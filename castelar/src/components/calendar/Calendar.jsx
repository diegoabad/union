import React, { useState, useEffect } from 'react';
import s from './Calendar.module.css';
import NavCalendar from './NavCalendar';
import BodyCalendar from './BodyCalendar';
import { getProfessional } from '../../functions/getProfessional';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import ChargingScreen from '../charging/ChargingScreen';
import 'moment/locale/es';
moment.locale('es');

export default function Calendar() {
	const [moveMonth, setMoveMonth] = useState(0);
	const [professional, setProfessional] = useState({});

	const { idProfessional } = useParams();
	useEffect(() => {
		async function getPro() {
			let pro = await getProfessional(idProfessional);
			setProfessional(pro);
		}
		getPro();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let currentMonth = moment();
	currentMonth = currentMonth.add(moveMonth, 'months');

	return (
		<>
			{Object.keys(professional).length !== 0 ? (
				<div className={s.CalendarContainer}>
					<NavCalendar
						professional={professional}
						date={currentMonth}
						setMoveMonth={setMoveMonth}
						moveMonth={moveMonth}
					/>
					<BodyCalendar professional={professional} month={currentMonth} />
				</div>
			) : (
				<ChargingScreen />
			)}
		</>
	);
}
