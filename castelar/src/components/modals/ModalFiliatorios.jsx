import React from 'react';
import s from './Modal.module.css';
import { useDispatch } from 'react-redux';
import Formdata from '../Formdata';
import EvolucionPsiquiatrica from '../EvolucionPsiquatrica'
import Admision1 from '../Admision1'
export default function ModalFiliatorio(props) {
	const dispatch = useDispatch();

	const { setOpenFiliatorio, setDni, search, form } = props;

	function handleClose() {
		setOpenFiliatorio(false);
	}

	return (
		<div className={s.containerFiliatorio}>
			<div className={s.headerFiliatorio}>
				<img
					alt='Icono de cerrar'
					onClick={() => {
						handleClose();
					}}
					className={s.closeFiliatorio}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlN0NgkAQhD86sBMsQTuQSrUDLUE7sQQziSQn7h8mF1/gDbLMtzs7dwOdn6GzPhsgdfjvFp2AG/B0Wt0BB+DijRJNIPEzcAeOBkTiV2APTB4kAkhA3Y8GpBV/vKcwp8x2YEHkxtx5KK7CDKCaJUTfZEsqXgUsIXovia8FzLboP2/xX2GqWtR6LhFr8WZSM4CVFgl56Vo1QRTFKMIfkMpB8xbaQn46aOqk61WR3pSVgmzJFY2wZgOkFna36AUMCDQZmJpqFgAAAABJRU5ErkJggg=='
				/>
			</div>
			<div className={s.bodyFiliatorio}>
        {form === 'filiatorios' &&
				<Formdata
					setOpenFiliatorio={setOpenFiliatorio}
					setDni={setDni}
					search={search}
				/>
      }
        {form === 'psiquiatria' &&
				<EvolucionPsiquiatrica
					setOpenFiliatorio={setOpenFiliatorio}
					setDni={setDni}
					search={search}
				/>
      }
        {form === 'semiologica' &&
				<Admision1
					setOpenFiliatorio={setOpenFiliatorio}
					setDni={setDni}
					search={search}
				/>
      }
			</div>
		</div>
	);
}
