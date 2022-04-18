import React, { useState, useEffect } from 'react';
import s from './Schedule.module.css';
import NavSchedule from './NavSchedule';
import BodySchedule from './BodySchedule';
import { useParams } from 'react-router-dom';
import ChargingScreen from '../charging/ChargingScreen';

import { getProfessional } from '../../functions/getProfessional';
import { db } from '../../firebase/credentials';
import { query, where, collection, onSnapshot } from 'firebase/firestore';

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
/*De la url o de la db*/

export default function Schedule() {
	/*Profesional de prueba*/
	const { date, idProfessional } = useParams();
	const [day, month, year] = date.split('-');
	const [professional, setProfessional] = useState({});
	const [turnsDB, setTurnsDB] = useState([]);

	const getTurns = () => {
		const collectionRef = collection(db, 'turns');
		const queryMonth = query(
			collectionRef,
			where('day', '==', day),
			where('month', '==', month),
			where('year', '==', year),
			where('idProfessional', '==', idProfessional)
		);
		onSnapshot(queryMonth, (data) => {
			const turns = [];
			data.forEach((t) => {
				const turn = { ...t.data(), idTurn: t.id };
				turns.push(turn);
			});
			setTurnsDB(turns);
		});
	};

	useEffect(() => {
		getTurns();
		async function getPro() {
			let pro = await getProfessional(idProfessional);
			setProfessional(pro);
		}
		getPro();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date]);
	let currentDate = moment(`${month}/${day}/${year}`);

	return (
		<>
			{Object.keys(professional).length !== 0 ? (
				<div className={s.ScheduleContainer}>
					<NavSchedule professional={professional} date={currentDate} />
					<BodySchedule
						professional={professional}
						date={currentDate}
						turnsDB={turnsDB}
					/>
				</div>
			) : (
				<ChargingScreen />
			)}
		</>
	);
}
