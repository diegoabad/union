import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const generateDates = (monthToShow, professional) => {
	if (!moment.isMoment(monthToShow)) {
		return null;
	}

	let dateStart = moment(monthToShow).startOf('month');

	let dateEnd = moment(monthToShow).endOf('month');

	let cells = [];

	while (dateStart.day() !== 1) {
		dateStart.subtract(1, 'days');
	}

	while (dateEnd.day() !== 0) {
		dateEnd.add(1, 'days');
	}

	do {
		cells.push({
			date: moment(dateStart),
			isInCurrentMonth: dateStart.month() === monthToShow.month(),
			isIncurrentDate: comparateDates(dateStart),
			isInworkToday: workToday(dateStart, professional),
			isSunday: dateStart.day() === 0 ? true : false,
			isBlock: false,
		});
		dateStart.add(1, 'days');
	} while (dateStart.isSameOrBefore(dateEnd));
	return cells;
};

const comparateDates = (date) => {
	let currentDate = moment();
	if (
		date.isSame(currentDate, 'day') &&
		date.isSame(currentDate, 'month') &&
		date.isSame(currentDate, 'year')
	) {
		return true;
	}
	return false;
};

const workToday = (date, professional) => {
	return professional.attentionDays.includes(date.day());
};
