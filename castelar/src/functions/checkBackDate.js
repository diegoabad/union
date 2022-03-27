import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export function checkBackMonth(professional, date) {
	const [dayPro, monthPro, yearPro] = professional.createdUser.split('/');
	const createProfessional = moment(`${monthPro}/${dayPro}/${yearPro}`);
	return date.isAfter(createProfessional, 'month');
}

export function checkBackDays(professional, date) {
	const [dayPro, monthPro, yearPro] = professional.createdUser.split('/');
	const createProfessional = moment(`${monthPro}/${dayPro}/${yearPro}`);
	return date.isSameOrAfter(createProfessional, 'month');
}
