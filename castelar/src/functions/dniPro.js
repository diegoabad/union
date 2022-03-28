export const dniPro = (dni) => {
	let array = [];
	let cont = 1;

	for (let i = dni.length - 1; i >= 0; i--) {
		array.unshift(dni[i].toString());
		if (cont % 3 === 0 && i !== 0) {
			array.unshift('.');
		}

		cont++;
	}

	let texto = array.join('');
	return texto;
};
