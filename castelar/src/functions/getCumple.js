export const getCumple = (date) => {
	let años = '';
	if (date !== null && date !== 'Invalid Date' && date !== undefined) {
		let today = new Date();
		let day = today.getDate() - date.getDate();
		let month = today.getMonth() + 1 - (date.getMonth() + 1);
		let year = today.getFullYear() - date.getFullYear();
		if (!day || !month || !year) años = 'error';
		if (
			year < 0 ||
			(year === 0 && month < 0) ||
			(year === 0 && month === 0 && day < 0)
		)
			años = 'error';
		if ((year > 0 && month < 0) || (year > 0 && month === 0 && day < 0))
			años = year - 1;
		if (year >= 0 && month >= 0 && day >= 0) años = year;

		if (años !== 'error') {
			return años;
		} else return 'error';
	} else {
		return 'error';
	}
};
