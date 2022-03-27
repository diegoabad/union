import React, { useState, useEffect } from 'react';
import s from '..mainScreens/Main.module.css';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function Clock({ user }) {
	const [hour, setHour] = useState('');
	const [day, setDay] = useState('');
	const [nDay, setNDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');

	const fullDate = moment();
	const updateTime = () => {
		const hour = moment().format('LTS');
		const day = moment().format('dddd');
		const nDay = fullDate.date();
		const month = moment().format('MMMM');
		const year = moment().format('YYYY');
		setHour(hour);
		setDay(day);
		setNDay(nDay);
		setMonth(month);
		setYear(year);
	};
	useEffect(() => {
		updateTime();
		setInterval(updateTime, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className={s.containerClock}>
			<p className={s.hour}>{hour}</p>
			<p className={s.infoDay}>
				<span className={s.cap}>
					{day} {nDay} de {month} del {year}
				</span>
			</p>
		</div>
	);
}
