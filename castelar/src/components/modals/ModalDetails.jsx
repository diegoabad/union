import React, { useEffect, useState } from 'react';
import s from './Modal.module.css';
import { useSelector } from 'react-redux';
import { searchFullNameProfessional } from '../../functions/searchFullNameProfessional';
import { transformDate } from '../../functions/transformDate';
export default function ModalDetails({ setOpenModal, data }) {
	const [professional, setProfessional] = useState('');
	const arrPro = useSelector((state) => state.allProfessional);
	const solapa = useSelector((state) => state.solapaPaciente);
	const [parrafoPro, setParrafoPro] = useState([]);
	const [parrafoEvo, setParrafoEvo] = useState([]);
	const [parrafoInt, setParrafoInt] = useState([]);
	const [select, setSelect] = useState('evo');
	useEffect(() => {
		const fullName = searchFullNameProfessional(arrPro, data.idProfesional);
		setProfessional(fullName);
	}, [arrPro]);

	useEffect(() => {
		setParrafoPro(data.problematica.split('\n'));
		setParrafoEvo(data.evolucion.split('\n'));
		setParrafoInt(data.interconsultas.split('\n'));
	}, [data]);

	function handleClose() {
		setOpenModal(false);
	}

	return (
		<div className={s.overlay}>
			<div className={s.modalContainerDetails}>
				<img
					alt='Icono de cerrar'
					onClick={() => {
						handleClose();
					}}
					className={s.close}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlN0NgkAQhD86sBMsQTuQSrUDLUE7sQQziSQn7h8mF1/gDbLMtzs7dwOdn6GzPhsgdfjvFp2AG/B0Wt0BB+DijRJNIPEzcAeOBkTiV2APTB4kAkhA3Y8GpBV/vKcwp8x2YEHkxtx5KK7CDKCaJUTfZEsqXgUsIXovia8FzLboP2/xX2GqWtR6LhFr8WZSM4CVFgl56Vo1QRTFKMIfkMpB8xbaQn46aOqk61WR3pSVgmzJFY2wZgOkFna36AUMCDQZmJpqFgAAAABJRU5ErkJggg=='
				/>
				<div className={s.detailsHeader}>
					<p className={s.detailsHeader_p}>
						<span className={s.detailsHeader_span}>Profesional: </span>
						{professional}
					</p>
					<p className={s.detailsHeader_p}>
						<span className={s.detailsHeader_span}>Fecha: </span>
						{transformDate(data.fechaCreacion)}
					</p>
				</div>

				{solapa === 'Psicología' ? (
					<div className={`${s.containerEvo}`}>
						<div className={s.titleContainer}>
							<div
								className={select === 'pro' ? ` ${s.titleEvo}` : `${s.title}`}
								onClick={() => setSelect('pro')}
							>
								Problematica
							</div>
							<div
								className={select === 'evo' ? ` ${s.titleEvo}` : `${s.title}`}
								onClick={() => setSelect('evo')}
							>
								Evolución
							</div>
							<div
								className={select === 'inter' ? `${s.titleEvo}` : `${s.title}`}
								onClick={() => setSelect('inter')}
							>
								Interconsulta
							</div>
						</div>
						<div className={s.bodyEvo}>
							{select === 'evo'
								? parrafoEvo.map((par) => <p className={s.parrafo}>{par}</p>)
								: null}
							{select === 'pro'
								? parrafoPro.map((par) => <p className={s.parrafo}>{par}</p>)
								: null}
							{select === 'inter'
								? parrafoInt.map((par) => <p className={s.parrafo}>{par}</p>)
								: null}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
