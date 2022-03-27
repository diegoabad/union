import React from 'react';
import s from './Modal.module.css';
import { deleteTurn } from '../../functions/deleteTurn';
import { setTurn } from '../../functions/setTurn.js';
import { toast } from 'react-toastify';
import { toastConfig } from '../toastConfig';
export default function ModalAccept({
	title,
	data,
	setOpenModal,
	identification,
}) {
	function handleClose() {
		setOpenModal(false);
	}

	function handleDelete() {
		deleteTurn(data).then((flag) => {
			if (flag) {
				toast.success(`Turno Eliminado Correctamente`, toastConfig);
			} else {
				toast.error(`El Turno No Puedo Ser Eliminado`, toastConfig);
			}
		});
		setOpenModal(false);
	}

	function handleBlock() {
		setTurn(data).then((flag) => {
			if (flag) {
				toast.success(`Turno Bloqueado Correctamente`, toastConfig);
			} else {
				toast.error(`El Turno No Puedo Ser Bloqueado`, toastConfig);
			}
		});
		setOpenModal(false);
	}

	return (
		<div className={s.overlay}>
			<div className={` ${s.modalAccept}`}>
				<div className={s.modalHeader}>
					<h3>{title}</h3>
				</div>
				<img
					alt='Icono de cerrar'
					onClick={() => {
						handleClose();
					}}
					className={s.close}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlN0NgkAQhD86sBMsQTuQSrUDLUE7sQQziSQn7h8mF1/gDbLMtzs7dwOdn6GzPhsgdfjvFp2AG/B0Wt0BB+DijRJNIPEzcAeOBkTiV2APTB4kAkhA3Y8GpBV/vKcwp8x2YEHkxtx5KK7CDKCaJUTfZEsqXgUsIXovia8FzLboP2/xX2GqWtR6LhFr8WZSM4CVFgl56Vo1QRTFKMIfkMpB8xbaQn46aOqk61WR3pSVgmzJFY2wZgOkFna36AUMCDQZmJpqFgAAAABJRU5ErkJggg=='
				/>
				<div className={s.containerBtn}>
					{identification === 'delete' ? (
						<button
							className={`${s.btn} ${s.btnAccept}`}
							onClick={() => handleDelete()}
						>
							Si
						</button>
					) : (
						<button
							className={`${s.btn} ${s.btnAccept}`}
							onClick={() => handleBlock()}
						>
							Si
						</button>
					)}

					<button
						className={`${s.btn} ${s.btnCancel}`}
						onClick={() => {
							handleClose();
						}}
					>
						No
					</button>
				</div>
			</div>
		</div>
	);
}
