export const filterProfessional = (array, data) => {
	const newArray = array.filter((pro) => {
		const filterName = pro.name.includes(data);
		const filterLastName = pro.lastName.includes(data);
		const filterFullName = pro.fullName.includes(data);
		return filterLastName || filterName || filterFullName;
	});
	return newArray;
};
