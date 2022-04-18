import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const transformDate = (date, flag = false) => {
	if (date.seconds) {
		const day = new Date(date.seconds * 1000).getDate();

		const month =
			new Date(date.seconds * 1000).getMonth() + 1 >= 10
				? new Date(date.seconds * 1000).getMonth() + 1
				: `0${new Date(date.seconds * 1000).getMonth() + 1}`;

		const year = new Date(date.seconds * 1000).getFullYear();
		if (flag) {
			return moment(`${parseInt(month)}/${parseInt(day)}/${parseInt(year)}`);
		}
		return moment(`${month}/${day}/${year}`).format('L');
	}
	if (flag) {
		return moment(date);
	}
	return moment(date).format('L');
};
