export const searchFullNameProfessional = (arrPro, id) => {
	const pro = arrPro.filter((p) => p.idProfessional === id);
	const fullName = `${pro[0].name} ${pro[0].lastName}`;
	return fullName;
};
