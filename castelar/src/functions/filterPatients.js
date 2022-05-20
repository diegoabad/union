export const filterPatients = (allPatients, valueSearch) => {
	const value = allPatients.filter((paciente) => {
		const completo1 = `${paciente.nombre.toLowerCase()} ${paciente.apellido.toLowerCase()}`;
		const fullName1 = completo1.includes(valueSearch);
		const completo2 = ` ${paciente.apellido.toLowerCase()} ${paciente.nombre.toLowerCase()}`;
		const fullName2 = completo2.includes(valueSearch);
		const dni = paciente.id.includes(valueSearch);
		const nombre = paciente.nombre.toLowerCase().includes(valueSearch);
		const apellido = paciente.apellido.toLowerCase().includes(valueSearch);
		const afiliado = paciente.nro_afiliado.includes(valueSearch);

		if (dni || nombre || apellido || afiliado || fullName1 || fullName2) {
			return paciente;
		}
	});
	return value;
};
