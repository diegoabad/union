import React, { useState, useEffect } from 'react';
import s from './PatientGeneral.module.css';
import { transformDate } from '../../../functions/transformDate';
import { filterEvoluciones } from '../../../functions/filterEvoluciones';
import { comparateDate } from '../../../functions/comparateDate';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function FiltrosTabla({
	pacienteActual,
	setEvoluciones,
	allDoctors,
}) {
	const [doctors, setDoctors] = useState('all');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	useEffect(() => {
		if (pacienteActual.length > 0) {
			setStartDate(
				moment(
					transformDate(
						pacienteActual[pacienteActual.length - 1].fechaCreacion,
						true
					)
				).format('yyyy-MM-DD')
			);
			setStart(
				moment(
					transformDate(
						pacienteActual[pacienteActual.length - 1].fechaCreacion,
						true
					)
				).format('yyyy-MM-DD')
			);
		} else {
			setStartDate(moment().format('yyyy-MM-DD'));
			setStart(moment().format('yyyy-MM-DD'));
		}
		setEndDate(moment().format('yyyy-MM-DD'));
		setEnd(moment().format('yyyy-MM-DD'));
	}, [pacienteActual]);

	function handleDateStart(e) {
		const flag = comparateDate(e.target.value, endDate, 'sameOrBefore');
		console.log(flag);
		if (!flag) {
			console.log('holas');
			setEndDate(e.target.value);
			setStartDate(e.target.value);
			setEvoluciones(
				filterEvoluciones(
					pacienteActual,
					doctors,
					e.target.value,
					e.target.value
				)
			);

			return;
		}
		setStartDate(e.target.value);
		setEvoluciones(
			filterEvoluciones(pacienteActual, doctors, e.target.value, endDate)
		);
	}

	function handleDateEnd(e) {
		setEndDate(e.target.value);
		setEvoluciones(
			filterEvoluciones(pacienteActual, doctors, startDate, e.target.value)
		);
	}

	function handleDoctors(e) {
		setDoctors(e.target.value);
		setEvoluciones(
			filterEvoluciones(pacienteActual, e.target.value, startDate, endDate)
		);
	}

	return (
		<div className={s.generalFilter}>
			<div>
				<label>Desde:</label>
				<input
					type='date'
					value={startDate}
					min={start}
					max={end}
					onChange={(e) => handleDateStart(e)}
				/>
			</div>
			<div>
				<label>Hasta:</label>
				<input
					type='date'
					value={startDate >= endDate ? startDate : endDate}
					min={startDate}
					max={end}
					onChange={(e) => handleDateEnd(e)}
				/>
			</div>
			<div>
				<label>Profesional:</label>
				<select onChange={(e) => handleDoctors(e)}>
					<option value='all'>Todos</option>
					{allDoctors.map((doc) => {
						return (
							<option key={doc.id} value={doc.id}>
								{doc.nombre}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
