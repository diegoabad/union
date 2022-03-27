import React, { useState, useEffect } from 'react';
import s from './Patient.module.css';
import { getPatientByDNI } from '../../functions/getPatientByDNI';
import ModalFiliatorios from '../modals/ModalFiliatorios';
import { useDispatch, useSelector } from 'react-redux';
import {
	getPaciente,
	getFiliatorios,
	getSolapaPaciente,
	getActiveSearch,
	getMenuSolapa,
} from '../../redux/actions/index';
export default function NavPatients() {
	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual);
	const activeSearch = useSelector((state) => state.activeSearch);
	const changeFiliatorio = useSelector((state) => state.editarFiliatorio);
	const [dni, setDni] = useState('');
	const [inputValue, setInputValue] = useState('');
	const [openFiliatorio, setOpenFiliatorio] = useState(false);

	useEffect(() => {
		if (!changeFiliatorio) {
			setDni(paciente.idPatient);
			handleSearch(paciente.idPatient);
		}
	}, [changeFiliatorio]);

	function dniPro(dni) {
		let array = [];
		let cont = 1;

		for (let i = dni.length - 1; i >= 0; i--) {
			array.unshift(dni[i].toString());
			if (cont % 3 == 0 && i !== 0) {
				array.unshift('.');
			}

			cont++;
		}

		let texto = array.join('');
		return texto;
	}

	function handlePatient(e) {
		const value = e.target.value.trim().toLowerCase();
		if (value.length === 0) {
			dispatch(getActiveSearch(false));
		}
		setDni(value);
	}

	function handleClear() {
		dispatch(getActiveSearch(false));
		setDni('');
		setInputValue('');
		dispatch(getSolapaPaciente('Biografia'));
		dispatch(getMenuSolapa(true));
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
				idPatient: '',
			})
		);
	}

	async function handleSearch(dni) {
		if (dni !== '') {
			const p = await getPatientByDNI(dni);
			if (p) {
				const fullName = `${p.filiatorios.nombre} ${p.filiatorios.apellido}`;
				setInputValue(fullName);
				dispatch(getFiliatorios(p));
			}
			dispatch(getActiveSearch(true));
			return;
		}
		handleClear();
	}

	return (
		<div className={s.NavPatientContainer}>
			{!activeSearch ? (
				<input
					onChange={(e) => {
						handlePatient(e);
					}}
					type='text'
					placeholder='Buscar paciente por DNI'
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
			{paciente.idPatient === '' && activeSearch ? (
				<input
					className={s.notExist}
					onChange={(e) => {
						handlePatient(e);
					}}
					type='text'
					placeholder='Buscar paciente por DNI'
					value={`NO EXISTE EL PACIENTE CON DNI: ${dniPro(dni)}`}
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
			) : dni.length > 6 ? (
				<div
					onClick={() => {
						handleSearch(dni);
					}}
					class={`${s.containerIcon} ${s.searchActive}`}
				>
					<img
						alt='Icono de busqueda'
						className={s.search}
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVVJREFUSEvVVVFRA0EUSxSABFBA6wAcgAJwADgAB8UBOMABoIA6oBKogjBh3nYe7e4thSsz7Mx9XPc2yea9lxI7XtwxPpoEkg4AXAI4BjAJIXMAzwDuSC6+I65KIGkW4EMYM5LXPZINAklWeRQHHwAYyL9Bkm9yBeC83IjkdIjkC0FSvrQ1BXgdIIhs1V7YZdLqWhGE52/x1bQFXlCC5DXeD1s1yQTFdxewqSjLlHQfdjXPZILifVd95RbzVi0ygXyQ5FazIWnw3FgES5L7tSqPZdELSQ/kxvrTIjsaftKmnplJt01jUkurvgM46QzaEwD7fkvypjtoqfVyVLjP3eM5KhyAFwnQexZjUe0arA1QL+xsi785jdxqkvTi2hPt7nD4GdRAfhyAC0m2yJnk/SrJVkNVs6BH8muCaI58kzOSj0XMKASJxBG/Av+MnqE/izH2/j/BB3p8rBlg04KKAAAAAElFTkSuQmCC'
					/>
				</div>
			) : (
				<div class={`${s.containerIcon} ${s.searchDisabled}`}>
					<img
						alt='Icono de busqueda'
						className={s.search}
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVVJREFUSEvVVVFRA0EUSxSABFBA6wAcgAJwADgAB8UBOMABoIA6oBKogjBh3nYe7e4thSsz7Mx9XPc2yea9lxI7XtwxPpoEkg4AXAI4BjAJIXMAzwDuSC6+I65KIGkW4EMYM5LXPZINAklWeRQHHwAYyL9Bkm9yBeC83IjkdIjkC0FSvrQ1BXgdIIhs1V7YZdLqWhGE52/x1bQFXlCC5DXeD1s1yQTFdxewqSjLlHQfdjXPZILifVd95RbzVi0ygXyQ5FazIWnw3FgES5L7tSqPZdELSQ/kxvrTIjsaftKmnplJt01jUkurvgM46QzaEwD7fkvypjtoqfVyVLjP3eM5KhyAFwnQexZjUe0arA1QL+xsi785jdxqkvTi2hPt7nD4GdRAfhyAC0m2yJnk/SrJVkNVs6BH8muCaI58kzOSj0XMKASJxBG/Av+MnqE/izH2/j/BB3p8rBlg04KKAAAAAElFTkSuQmCC'
					/>
				</div>
			)}

			{openFiliatorio ? (
				<ModalFiliatorios setOpenFiliatorio={setOpenFiliatorio} />
			) : (
				''
			)}
		</div>
	);
}
