import { db } from '../firebase/credentials';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getTurns = async (day, month, year, idProfessional) => {
	try {
		const turns = [];
		const collectionRef = collection(db, 'turns');
		let queryMonth;
		if (!day) {
			queryMonth = query(
				collectionRef,
				where('month', '==', month),
				where('year', '==', year),
				where('idProfessional', '==', idProfessional)
			);
		} else {
			queryMonth = query(
				collectionRef,
				where('day', '==', day),
				where('month', '==', month),
				where('year', '==', year),
				where('idProfessional', '==', idProfessional)
			);
		}
		const data = await getDocs(queryMonth);
		data.forEach((t) => {
			const turn = { ...t.data(), idTurn: t.id };
			turns.push(turn);
		});
		return turns;
	} catch {
		return [];
	}
};
