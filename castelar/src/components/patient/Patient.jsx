import React from 'react';
import s from './Patient.module.css';
import NavPatient from './NavPatient';
import BodyPatient from './BodyPatient';
import { useSelector } from 'react-redux';
export default function Patient() {
	const dniPaciente = useSelector((state) => state.pacienteActual.idPatient);
	return (
		<div className={s.containerPatient}>
			<NavPatient />
			{dniPaciente !== '' ? <BodyPatient /> : ''}
		</div>
	);
}
