import { db } from '../firebase/credentials';
import { doc, getDoc } from 'firebase/firestore';

export const getProfessional = async (idProfessional) => {
	const collectionRef = doc(db, 'users', idProfessional);
	const doctor = (await getDoc(collectionRef)).data();
	let attentionDays = [];
	doctor.schedule.forEach((s) => attentionDays.push(s.day));
	return { ...doctor, idProfessional, attentionDays };
};
