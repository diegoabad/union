import { db } from '../firebase/credentials';
import { query, where, collection, onSnapshot } from 'firebase/firestore';

export const getTurnsRealTime = (day, month, year, idProfessional) => {
	const collectionRef = collection(db, 'turns');
	const queryMonth = query(
		collectionRef,
		where('day', '==', day),
		where('month', '==', month),
		where('year', '==', year),
		where('idProfessional', '==', idProfessional)
	);
	onSnapshot(queryMonth, (data) => {
		const turns = [];
		data.forEach((t) => {
			turns.push(t.data());
		});
		return turns;
	});
};
