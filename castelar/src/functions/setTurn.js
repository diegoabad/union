import { db } from '../firebase/credentials';
import { addDoc, collection } from 'firebase/firestore';

export const setTurn = async (dataTurn) => {
	const collectionRef = collection(db, 'turns');
	try {
		await addDoc(collectionRef, dataTurn);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};
