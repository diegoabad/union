import { db } from '../firebase/credentials';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getAllProfessional = async () => {
	try {
		const array = [];
		const collectionRef = collection(db, 'users');
		let queryPros = query(
			collectionRef,
			where('rol', '==', 'profesional'),
			where('calendar', '==', true)
			/* where('idInstitucion', '==', idInstitucion) */
		);
		const data = await getDocs(queryPros);

		data.forEach((t) => {
			let attentionDays = [];
			t.data().schedule.forEach((s) => attentionDays.push(s.day));
			const pro = {
				...t.data(),
				idProfessional: t.id,
				fullName: `${t.data().name} ${t.data().lastName}`,
				attentionDays,
			};
			array.push(pro);
		});
		return array;
	} catch {
		return [];
	}
};
