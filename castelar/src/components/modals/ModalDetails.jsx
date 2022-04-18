import React, { useEffect, useState } from 'react';
import s from './Modal.module.css';
import { getProfessional } from '../../functions/getProfessional';
export default function ModalDetails({ setOpenModal, data }) {
	const [professional, setProfessional] = useState({});

	useEffect(() => {
		async function getPro() {
			let pro = await getProfessional(data.idProfesional);
			setProfessional(pro);
		}
		getPro();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				<div className={s.detailsHeader}></div>
				<div className={s.detailsBody}></div>
			</div>
		</div>
	);
}
