import moment from 'moment';
import 'moment/locale/es';
import { transformDate } from './transformDate';
moment.locale('es');

export const filterEvoluciones = (evoluciones, doctor, inicio, fin) => {
	const evoFilter = evoluciones.filter((evo) => {
		const doc = doctor === 'all' ? true : evo.idProfesional === doctor;
		const date = moment(transformDate(evo.fechaCreacion, true)).isBetween(
			transformDate(inicio, true),
			transformDate(fin, true),
			undefined,
			[]
		);
		return doc && date;
	});

	return evoFilter;
};
