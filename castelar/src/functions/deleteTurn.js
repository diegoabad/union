import { db } from '../firebase/credentials';
import { deleteDoc, doc } from 'firebase/firestore';

export const deleteTurn = async (id) => {
	try {
		const turn = doc(db, 'turns', id);
		await deleteDoc(turn);
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};
