import moment from 'moment';
import 'moment/locale/es';
import { transformDate } from './transformDate';
moment.locale('es');

export const comparateDate = (date1, date2, flag) => {
	const start = transformDate(date1, true);
	const end = transformDate(date2, true);
	let result;
	if (flag === 'same') {
		result = start.isSame(end);
	}
	if (flag === 'sameOrBefore') {
		result = start.isSameOrBefore(end);
	}
	if (flag === 'sameOrAfter') {
		result = start.isSameOrAfter(end);
	}
	if (flag === 'before') {
		result = start.isBefore(end);
	}
	if (flag === 'after') {
		result = start.isAfter(end);
	}

	return result;
};
