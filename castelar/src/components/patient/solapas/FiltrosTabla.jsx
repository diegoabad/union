import React, { useState, useEffect } from 'react';
import s from './PatientGeneral.module.css';
import { transformDate } from '../../../functions/transformDate';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function FiltrosTabla({ pacienteActual, setEvoluciones }) {
	const [doctors, setDoctors] = useState([]);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const today = moment().format('yyyy-MM-DD');
	console.log(today);
	useEffect(() => {}, []);
	const index = pacienteActual.length - 1;
	const first = moment(
		transformDate(pacienteActual[index].fechaCreacion, true)
	).format('yyyy-MM-DD');
	console.log(first);
	return (
		<div className={s.generalFilter}>
			<div>
				<label htmlFor=''>Desde:</label>
				<input
					type='date'
					name=''
					id=''
					value={first}
					min={first}
					max={today}
				/>
			</div>
			<div>
				<label htmlFor=''>Hasta:</label>
				<input
					type='date'
					name=''
					id=''
					value={today}
					min={first}
					max={today}
				/>
			</div>
			<div>
				<label htmlFor=''>Profesional:</label>
				<select>
					<option value=''>Todos</option>
					{doctors.map((doc) => {
						return <option value=''>{doc.fullName}</option>;
					})}
				</select>
			</div>
		</div>
	);
}
