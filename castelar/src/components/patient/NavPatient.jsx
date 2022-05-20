import React, { useState, useEffect } from 'react';
import s from './Patient.module.css';

import { dniPro } from '../../functions/dniPro';
import { filterPatients } from '../../functions/filterPatients';
import ModalFiliatorios from '../modals/ModalFiliatorios';
import { useDispatch, useSelector } from 'react-redux';
import {
	getPaciente,
	getSolapaPaciente,
	getActiveSearch,
	getMenuSolapa,
} from '../../redux/actions/index';
export default function NavPatients({ setPacientes, inputValue, dni }) {
	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual);
	const activeSearch = useSelector((state) => state.activeSearch);
	/* 	const changeFiliatorio = useSelector((state) => state.editarFiliatorio); */
	const pacientesCopy = useSelector((state) => state.patienSearch);
	const [openFiliatorio, setOpenFiliatorio] = useState(false);

	/* 	useEffect(() => {
		if (!changeFiliatorio) {
			setDni(paciente.idPatient);
			handleSearch(paciente.idPatient); 
		}
	}, [changeFiliatorio]); */

	function handlePatient(e) {
		const value = e.target.value.trim().toLowerCase();
		if (value.length === 0) {
			dispatch(getActiveSearch(false));
			setPacientes(pacientesCopy);
		} else {
			const filtrado = filterPatients(pacientesCopy, value);
			setPacientes(filtrado);
		}
	}

	function handleClear() {
		dispatch(getActiveSearch(false));
		dispatch(getSolapaPaciente('Biografia'));
		dispatch(getMenuSolapa(true));
		setPacientes(pacientesCopy);
		dispatch(
			getPaciente({
				filiatorios: {},
				admision: [],
				semiologia: [],
				psiquiatria: [],
				psicologia: [],
				nutricion: [],
				medicacion: [],
				ingreso: [],
				musicoterapia: [],
				ed_fisica: [],
				area_social: [],
				ocupacional: [],
				contextual: [],
				otras: [],
				idPatient: '',
			})
		);
	}

	return (
		<div className={s.NavPatientContainer}>
			{!activeSearch ? <div className={s.leftSearch}></div> : ''}
			{paciente.idPatient !== '' && activeSearch ? (
				<div className={`${s.leftSearch} ${s.searchOk}`}></div>
			) : (
				''
			)}
			{paciente.idPatient === '' && activeSearch ? (
				<div className={`${s.leftSearch} ${s.searchOk}`}></div>
			) : (
				''
			)}

			{!activeSearch ? (
				<input
					onChange={(e) => {
						handlePatient(e);
					}}
					type='text'
					placeholder='Buscar paciente por DNI'
					autoFocus={true}
				/>
			) : (
				''
			)}
			{paciente.idPatient !== '' && activeSearch ? (
				<input
					onChange={(e) => {
						handlePatient(e);
					}}
					type='text'
					className={s.searchOk}
					placeholder='Buscar paciente por DNI'
					value={`${inputValue} >> DNI: ${dniPro(dni)}`}
					readOnly={true}
				/>
			) : (
				''
			)}

			{activeSearch ? (
				<div
					onClick={(e) => {
						handleClear(e);
					}}
					class={`${s.containerIcon} ${s.searchCancel}`}
				>
					<img
						alt='Icono de cancelar busqueda'
						className={s.search}
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAM5JREFUSEvtlMsNwkAMRJ87oJNQAnQAlYYOSAnQCR0YWXKkZPH+DisuyTHyzlvP2CsM/mSwPgeg6vB/LVLVG7CIyCe6qqqegIuIPHKtZDtw8Rl4AdcU4uJP4Azcc5ASwG63AFMKScTf3kXYZTEDF9pB3Ir15kVxq62GHEDsnNlSFW8CWFECsV9N4r2A1RY7FwYfTVKrRVvPTecn+O4x3VizC9SFwunq6qA0itF05ZaxZdHCQBNI/6K5ReOeiuoz2VhQnaJGnWzZAag6ONyiL3UxahlGNu2NAAAAAElFTkSuQmCC'
					/>
				</div>
			) : (
				<div class={`${s.containerIcon} `}></div>
			)}

			{openFiliatorio ? (
				<ModalFiliatorios setOpenFiliatorio={setOpenFiliatorio} />
			) : (
				''
			)}
		</div>
	);
}
