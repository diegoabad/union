import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export const generateArrayTurns = async (date, professional, arrayDB) => {
	const [day, month, year] = date.format('L').split('/');
	let dateMoment = moment(`${month}/${day}/${year}`);
	const dayMoment = dateMoment.day();
	const index = professional.attentionDays.indexOf(dayMoment);
	const doctorDay = professional.schedule[index];
	dateMoment = moment(`${month}/${day}/${year} ${doctorDay.startTime}`);
	const endTime = moment(`${month}/${day}/${year} ${doctorDay.endTime}`);
	let array = [];

	while (dateMoment.isBefore(endTime)) {
		let flag = true;
		arrayDB.forEach((t) => {
			if (t.hour === dateMoment.format('HH:mm')) {
				array.push(t);
				flag = false;
			}
		});
		if (flag) {
			let objTurn = {
				hour: dateMoment.format('HH:mm'),
				free: true,
			};
			array.push(objTurn);
		}

		dateMoment.add(`${doctorDay.durationInMinutes}`, 'minutes');
	}

	return array;
};
