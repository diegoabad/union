import moment from 'moment';
import 'moment/locale/es';
import { transformDate } from './transformDate';
moment.locale('es');

export const calculateTwoDaysAgo = (date) => {
	const today = moment();
	let date2 = transformDate(date, true);
	let addTwoDay = date2.add(3, 'days');
	const result = today.isSameOrBefore(addTwoDay);
	return result;
};
