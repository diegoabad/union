import { db } from '../firebase/credentials';
import {
	collection,
	getDocs,
	query,
	where,
	getDoc,
	doc,
} from 'firebase/firestore';

export const getPatientByDNI = async (dni) => {
	try {
		const referencia = doc(db, 'pacientes', dni);
		const allTodos = await getDoc(referencia);
    console.log(allTodos)
		if (allTodos.exists()) {
			return allTodos.data();
		} else {
			return false;
		}
	} catch (e) {
		console.log(e);
		return false;
	}
};
