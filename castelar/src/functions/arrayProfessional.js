import { searchFullNameProfessional } from './searchFullNameProfessional';

export const arrayProfessional = (arrPro, arrPac) => {
	const arrayIdPro = [];
	arrPac.forEach((e) => {
		arrayIdPro.push(e.idProfesional);
	});
	const data = new Set(arrayIdPro);
	let notRepeatIdPro = [...data];

	return notRepeatIdPro.map((e) => {
		return { nombre: searchFullNameProfessional(arrPro, e), id: e };
	});
};
