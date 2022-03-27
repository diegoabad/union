import React, { useState, useEffect } from 'react';
import s from './Schedule.module.css';
import ModalTurn from '../modals/ModalTurn';
import ModalAccept from '../modals/ModalAccept';
import { generateArrayTurns } from '../../functions/generateArrayTurns';
import { changeStatus } from '../../functions/changeStatus';
import { deleteTurn } from '../../functions/deleteTurn';

export default function BodySchedule({ date, professional, turnsDB }) {
	const [day, month, year] = date.format('L').split('/');
	const [turns, setTurns] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [openModalBlock, setOpenModalBlock] = useState(false);
	const [idTurnState, setIdTurnState] = useState('');
	const [title, setTitle] = useState('');
	const [turn, setTurn] = useState({});
	useEffect(() => {
		async function arrayTurns() {
			const arrayTurns = await generateArrayTurns(date, professional, turnsDB);
			setTurns(arrayTurns);
		}
		arrayTurns();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date]);

	function handleBLock(hour) {
		setTurn({
			day,
			month,
			year,
			hour,
			block: true,
			idProfessional: professional.idProfessional,
		});
		setOpenModalBlock(!openModalDelete);
		setTitle('¿Desea bloquear este turno?');
	}

	function handleOpenModal(hour) {
		setTurn({
			idProfessional: professional.idProfessional,
			day,
			month,
			year,
			hour,
			fullName: '',
			idPatient: '',
			block: false,
			overturn: false,
			status: 'pendiente',
			modality: 'presencial',
			comment: '',
		});
		setOpenModal(true);
	}

	function handleDelete(idTurn) {
		setOpenModalDelete(!openModalDelete);
		setIdTurnState(idTurn);
		setTitle('¿Desea eliminar este turno?');
	}

	function handlePatient(idPatient) {
		console.log(idPatient);
	}

	return (
		<div className={s.bodyScheduleContainer}>
			<div className={s.scheduleGridBody}>
				{turns.length
					? turns.map((t, i) => {
							if (t.free) {
								return (
									<div
										key={i}
										className={`${s.scheduleCard} ${s.scheduleCardAvailable}`}
									>
										<p className={s.scheduleCardHour}>{t.hour}</p>
										<p
											onClick={() => handleOpenModal(t.hour)}
											className={s.scheduleCardName}
										>
											DISPONIBLE
										</p>
										<div className={s.scheduleCardIcons}>
											<img
												onClick={() => handleBLock(t.hour)}
												alt='Icono de bloquear'
												src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOZJREFUSEvtleENAUEQhb+rQFSAStCBDlCBqAAd6IAOKIFK0IEOXF6yYq3dm7tLNvHj9s9dLjPvm3mZmy3IfIrM+tQFzIAVMHEFXYAdoGflqQM4AvOEiiDbKoIFUOUnJ7AGzu59AWzc+7SqEwsgC8aAxPdBpapckKtn3U8zFuDlMvrAM8geAjf3LalTF5CKexeQDWANkTmmZoUWIdaaZv0AyOMm5w4sw4mKARQ4aKLsxSp35OfGAG1tieZ1AN/uziJzcP/HIm3NnllvPOARboDUqtAt1vRvlrguoq9r1FrXLRv5pGUHlFRcLhn3ZVmjAAAAAElFTkSuQmCC'
											/>
										</div>
									</div>
								);
							}
							if (t.block) {
								return (
									<div
										key={i}
										className={`${s.scheduleCard} ${s.scheduleCardLocked}`}
									>
										<p className={s.scheduleCardHour}>{t.hour}</p>
										<p className={s.scheduleCardNameBlock}>BLOQUEADO</p>
										<div className={s.scheduleCardIcons}>
											<img
												onClick={() => deleteTurn(t.idTurn)}
												alt='Icono de desbloquear'
												src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPRJREFUSEvtleFtAjEMhb83AWICYJLCBt2gMAFiAsoG3aBsUEagkwAbdIOHjNLqgMuFAyFVAv+56GT7e7ETR9zZdOf8XASw/QpMgWEStAYWkuLbaEWA7SXwlskSkPcmQiMgKf9KCWbAKq3HwDytR007KQGiBC/ATNJHVantUB6Qb0m/pTvbTAngFNGV9HMC6AOb+Ccpm+ciQC6B7YOABwPYjoZ9AlHjNrYFJqcn6qwHtsOx1yZzxXcraVCNrQMUG1cHzzX8Cfir1rNExVP7r0oUU7NTlFzvsJN0NAHq7kGMinjF2t7mHTAujoorlWfDim/yrcA9yheTGVlFrnMAAAAASUVORK5CYII='
											/>
										</div>
									</div>
								);
							} else {
								if (!t.overturn) {
									if (t.status === 'pendiente') {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.pending}`}
												>
													{t.status}
												</p>
												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									} else if (t.status === 'ausente') {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.absent}`}
												>
													{t.status}
												</p>
												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									} else if (t.status === 'espera') {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.waiting}`}
												>
													{t.status}
												</p>
												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									} else {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.present}`}
												>
													{t.status}
												</p>

												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									}
								} else {
									if (t.status === 'pendiente') {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.pending}`}
												>
													{t.status}
												</p>
												<div className={s.overturn}>st</div>
												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									} else if (t.status === 'ausente') {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.absent}`}
												>
													{t.status}
												</p>
												<div className={s.overturn}>st</div>
												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									} else if (t.status === 'espera') {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.waiting}`}
												>
													{t.status}
												</p>
												<div className={s.overturn}>st</div>
												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									} else {
										return (
											<div key={i} className={s.scheduleCard}>
												<p className={s.scheduleCardHour}>{t.hour}</p>
												<p
													onClick={() => {
														handlePatient(t.idPatient);
													}}
													className={s.scheduleCardName}
												>
													{t.fullName}
												</p>
												<p
													onClick={() => {
														changeStatus(t.idTurn, t.status);
													}}
													className={`${s.scheduleCardState} ${s.present}`}
												>
													{t.status}
												</p>
												<div className={s.overturn}>st</div>

												<div className={s.scheduleCardIcons}>
													<img
														onClick={() => handleDelete(t.idTurn)}
														alt='Icono de eliminar'
														src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII='
													/>
												</div>
											</div>
										);
									}
								}
							}
					  })
					: ''}
			</div>
			{openModal ? (
				<ModalTurn
					setOpenModal={setOpenModal}
					turn={turn}
					setTurnState={setTurn}
					professional={professional}
				/>
			) : null}
			{openModalDelete ? (
				<ModalAccept
					title={title}
					data={idTurnState}
					setOpenModal={setOpenModalDelete}
					identification={'delete'}
				/>
			) : (
				''
			)}
			{openModalBlock ? (
				<ModalAccept
					title={title}
					data={turn}
					setOpenModal={setOpenModalBlock}
					identification={'block'}
				/>
			) : (
				''
			)}
		</div>
	);
}
