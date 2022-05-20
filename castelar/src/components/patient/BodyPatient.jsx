import React, { useEffect } from 'react';
import s from './Patient.module.css';
import InfoPatient from './InfoPatient';
import MenuPatient from './MenuPatient';
import { useSelector, useDispatch } from 'react-redux';
import { getFiliatorios, getActiveSearch } from '../../redux/actions/index';
import { getPatientByDNI } from '../../functions/getPatientByDNI';
import Tabla from '../tabla/Tabla';
export default function BodyPatients({ pacientes, setInputValue, setDni }) {
	const dniPaciente = useSelector((state) => state.pacienteActual.idPatient);
	const menuSolapa = useSelector((state) => state.menuSolapa);
	const dispatch = useDispatch();

	async function handleSearch(dni) {
		const p = await getPatientByDNI(dni);
		setDni(dni);
		if (p) {
			const fullName = `${p.filiatorios.nombre} ${p.filiatorios.apellido}`;
			setInputValue(fullName);
			dispatch(getFiliatorios(p));
		}
		dispatch(getActiveSearch(true));
	}

	useEffect(() => {
		if (dniPaciente !== '') {
			handleSearch(dniPaciente);
		}
	}, []);

	return (
		<div className={s.BodyPatientContainer}>
			{dniPaciente === '' ? (
				<Tabla rows={pacientes} handleClick={handleSearch} />
			) : (
				<>
					{menuSolapa ? <MenuPatient /> : ''}
					<InfoPatient />
				</>
			)}
		</div>
	);
}
