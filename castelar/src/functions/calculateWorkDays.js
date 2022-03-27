import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const calculateWorkDays = (professional, date, next) => {
	const [day, month, year] = date.format('L').split('/');
	let currentDate = moment(`${month}/${day}/${year}`);
	do {
		if (next) {
			currentDate.add(1, 'day');
		} else {
			currentDate.subtract(1, 'day');
		}
	} while (!professional.attentionDays.includes(currentDate.day()));
	return currentDate.format('L').replace('/', '-').replace('/', '-');
};
