import { db } from '../firebase/credentials';
import { updateDoc, doc } from 'firebase/firestore';
const arrayStatus = ['pendiente', 'espera', 'presente', 'ausente'];
export const changeStatus = async (id, status) => {
	let index = arrayStatus.indexOf(status);
	if (index === arrayStatus.length - 1) {
		index = 0;
	} else {
		index++;
	}
	try {
		const turn = doc(db, 'turns', id);
		const newStatus = { status: arrayStatus[index] };
		await updateDoc(turn, newStatus);
	} catch (err) {
		console.log(err);
	}
};
