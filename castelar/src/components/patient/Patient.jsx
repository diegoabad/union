import React, { useState, useEffect } from 'react';
import s from './Patient.module.css';
import NavPatient from './NavPatient';
import BodyPatient from './BodyPatient';
import { useSelector, useDispatch } from 'react-redux';
import ChargingScreen from '../charging/ChargingScreen';
import { allProfessional } from '../../redux/actions/index';
export default function Patient() {
	const dispatch = useDispatch();
	const dniPaciente = useSelector((state) => state.pacienteActual.idPatient);
	const [flagSearch, setFlagSearch] = useState(false);
	useEffect(() => {
		dispatch(allProfessional());
	}, []);
	return (
		<div className={s.containerPatient}>
			<NavPatient setFlagS={setFlagSearch} />
			{dniPaciente !== '' ? (
				<BodyPatient />
			) : !flagSearch ? (
				''
			) : (
				<ChargingScreen />
			)}
		</div>
	);
}
