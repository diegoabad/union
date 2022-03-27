import React, { useState } from 'react';
import s from './Modal.module.css';
import { setTurn } from '../../functions/setTurn';
import { toast } from 'react-toastify';
import { toastConfig } from '../toastConfig';
import { getPatientByDNI } from '../../functions/getPatientByDNI';
import ModalFiliatorio from './ModalFiliatorios';

export default function ModalTurn({
	setOpenModal,
	turn,
	setTurnState,
	professional,
}) {
	const [dni, setDni] = useState('');
	const [flagSearch, setFlagSearch] = useState(false);
	const [patient, setPatient] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [openFiliatorio, setOpenFiliatorio] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setOpenModal(false);
		setTurn(turn).then((flag) => {
			if (flag) {
				toast.success(`Turno Asignado Correctamente`, toastConfig);
			} else {
				toast.error(`El Turno No Puedo Ser Asignado`, toastConfig);
			}
		});
	}

	function handleClose() {
		setOpenModal(false);
	}

	function handleModality(e) {
		setTurnState({
			...turn,
			modality: e.target.value,
		});
	}

	function handleComment(e) {
		setTurnState({
			...turn,
			comment: e.target.value.trim().toLowerCase(),
		});
	}

	function handlePatient(e) {
		e.preventDefault();
		const value = e.target.value.trim().toLowerCase();
		if (value.length === 0) {
			setFlagSearch(false);
		}
		setDni(value);
	}

	function handleClear() {
		setFlagSearch(false);
		setPatient([]);
		setTurnState({ ...turn, idPatient: '' });
		setDni('');
		setInputValue('');
	}

	async function handleSearch(dni) {
		console.log(dni);
		const a = await getPatientByDNI(dni);
    const p = [a];
		console.log(p);
		if (p.length) {
			const fullName = `${p[0].filiatorios.nombre} ${p[0].filiatorios.apellido}`;
			setInputValue(fullName);
			setTurnState({ ...turn, idPatient: p[0].filiatorios.dni, fullName });
		}
		setFlagSearch(true);
		setPatient(p);
	}

	return (
		<div className={s.overlay}>
			<div className={s.modalContainer}>
				<div className={s.modalHeader}>
					<h3>Asignación de Turno</h3>
				</div>
				<div className={s.modalResume}>
					<div>
						{professional.title}:{' '}
						<span>{`${professional.lastName} ${professional.name}`}</span>
					</div>
					<div>
						Especialidad: <span>{professional.specialty}</span>
					</div>
					<div>
						Fecha: <span>{`${turn.day}/${turn.month}/${turn.year}`}</span>
					</div>
					<div>
						Hora: <span>{turn.hour} Hs.</span>
					</div>
				</div>
				<img
					alt='Icono de cerrar'
					onClick={() => {
						handleClose();
					}}
					className={s.close}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlN0NgkAQhD86sBMsQTuQSrUDLUE7sQQziSQn7h8mF1/gDbLMtzs7dwOdn6GzPhsgdfjvFp2AG/B0Wt0BB+DijRJNIPEzcAeOBkTiV2APTB4kAkhA3Y8GpBV/vKcwp8x2YEHkxtx5KK7CDKCaJUTfZEsqXgUsIXovia8FzLboP2/xX2GqWtR6LhFr8WZSM4CVFgl56Vo1QRTFKMIfkMpB8xbaQn46aOqk61WR3pSVgmzJFY2wZgOkFna36AUMCDQZmJpqFgAAAABJRU5ErkJggg=='
				/>
				<form
					className={s.formModal}
					action=''
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className={s.divForm}>
						<label htmlFor=''>Paciente:</label>
						{!flagSearch ? (
							<input
								onChange={(e) => {
									handlePatient(e);
								}}
								type='text'
								name=''
								id=''
								placeholder='Buscar paciente por DNI'
							/>
						) : (
							''
						)}
						{patient.length > 0 && flagSearch ? (
							<input
								onChange={(e) => {
									handlePatient(e);
								}}
								type='text'
								name=''
								id=''
								placeholder='Buscar paciente por DNI'
								value={`${inputValue}`}
							/>
						) : (
							''
						)}
						{patient.length === 0 && flagSearch ? (
							<input
								className={s.notExist}
								onChange={(e) => {
									handlePatient(e);
								}}
								type='text'
								name=''
								id=''
								placeholder='Buscar paciente por DNI'
								value='NO EXISTE el PACIENTE'
							/>
						) : (
							''
						)}
						{!flagSearch ? (
							<img
								onClick={() => {
									handleSearch(dni);
								}}
								alt='Icono de busqueda'
								className={s.search}
								src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVVJREFUSEvVVVFRA0EUSxSABFBA6wAcgAJwADgAB8UBOMABoIA6oBKogjBh3nYe7e4thSsz7Mx9XPc2yea9lxI7XtwxPpoEkg4AXAI4BjAJIXMAzwDuSC6+I65KIGkW4EMYM5LXPZINAklWeRQHHwAYyL9Bkm9yBeC83IjkdIjkC0FSvrQ1BXgdIIhs1V7YZdLqWhGE52/x1bQFXlCC5DXeD1s1yQTFdxewqSjLlHQfdjXPZILifVd95RbzVi0ygXyQ5FazIWnw3FgES5L7tSqPZdELSQ/kxvrTIjsaftKmnplJt01jUkurvgM46QzaEwD7fkvypjtoqfVyVLjP3eM5KhyAFwnQexZjUe0arA1QL+xsi785jdxqkvTi2hPt7nD4GdRAfhyAC0m2yJnk/SrJVkNVs6BH8muCaI58kzOSj0XMKASJxBG/Av+MnqE/izH2/j/BB3p8rBlg04KKAAAAAElFTkSuQmCC'
							/>
						) : (
							<img
								onClick={(e) => {
									handleClear(e);
								}}
								alt='Icono de cancerlar busqueda'
								className={s.search}
								src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAM5JREFUSEvtlMsNwkAMRJ87oJNQAnQAlYYOSAnQCR0YWXKkZPH+DisuyTHyzlvP2CsM/mSwPgeg6vB/LVLVG7CIyCe6qqqegIuIPHKtZDtw8Rl4AdcU4uJP4Azcc5ASwG63AFMKScTf3kXYZTEDF9pB3Ir15kVxq62GHEDsnNlSFW8CWFECsV9N4r2A1RY7FwYfTVKrRVvPTecn+O4x3VizC9SFwunq6qA0itF05ZaxZdHCQBNI/6K5ReOeiuoz2VhQnaJGnWzZAag6ONyiL3UxahlGNu2NAAAAAElFTkSuQmCC'
							/>
						)}
					</div>
					{patient.length === 0 && flagSearch ? (
						<p
							onClick={(e) => {
								setOpenFiliatorio(true);
							}}
							className={s.createPatient}
						>
							Crear Paciente
						</p>
					) : (
						''
					)}

					<div className={s.divForm}>
						<label htmlFor=''>Modalidad:</label>
						<select name='modality' onChange={(e) => handleModality(e)}>
							<option value='presencial'>Presencial</option>
							<option value='virtual'>Virtual</option>
						</select>
					</div>

					<div className={s.divAreaForm}>
						<label htmlFor=''>Comentarios:</label>
						<textarea
							name='comment'
							rows='6'
							onChange={(e) => handleComment(e)}
						></textarea>
					</div>

					{patient.length > 0 ? (
						<button className={s.btnSendTurn}>Agendar</button>
					) : (
						<button className={s.btnSendTurnDisabled} disabled>
							Agendar
						</button>
					)}
				</form>
			</div>
			{openFiliatorio ? (
				<ModalFiliatorio
          form = 'filiatorios'
					setOpenFiliatorio={setOpenFiliatorio}
					setDni={setDni}
					search={handleSearch}
				/>
			) : (
				''
			)}
		</div>
	);
}
