import React, {useState} from 'react';
import s from './Patient.module.css';
import { useSelector, useDispatch } from 'react-redux';
import ModalFiliatorio from '../modals/ModalFiliatorios';
import { getMenuSolapa, editFiliatorios } from '../../redux/actions/index';
export default function InfoPatient() {
	const solapa = useSelector((state) => state.solapaPaciente);
	const menuSolapa = useSelector((state) => state.menuSolapa);
  const paciente = useSelector((state) => state.pacienteActual);
  const [openFiliatorio, setOpenFiliatorio] = useState(false);
	const dispatch = useDispatch();
  const [form, setForm] = useState('filiatorios');

  const handleEditar = (evt, form) => {
    evt.preventDefault();
    if(form === 'filiatorios'){
      dispatch(editFiliatorios(true));
    }
    setForm(form)
    setOpenFiliatorio(true);
  }

	return (
		<div className={s.containerInfoPatient}>
			{!menuSolapa ? (
				<div
					onClick={() => {
						dispatch(getMenuSolapa(!menuSolapa));
					}}
					className={`${s.containerMenuInfoPaciente} ${s.menuActive}`}
				>
					<img
						className={`${s.menuInfoPaciente}`}
						alt='Menu info paciente'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFJJREFUSEtjZKAxYKSx+QyjFhAMYfoH0e/v3/8TdBYeBaycnCiOxvABzS2gxPXY9NI/DmjuA5rHAc0toHkQDX0LaB4HNLdg6MfBqA/QQ4DmpSkATVQYGarCjvAAAAAASUVORK5CYII='
					/>
				</div>
			) : (
				<div
					onClick={() => {
						dispatch(getMenuSolapa(!menuSolapa));
					}}
					className={`${s.containerMenuInfoPaciente} ${s.menuDisabled}`}
				>
					<img
						className={`${s.menuInfoPaciente}`}
						alt='Menu info paciente'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGlJREFUSEtjZKAxYKSx+QyjFhAMYfoH0e/v3/8TdBYeBaycnCiOxvABzS2gxPXY9NI/DmjuA1LjAD1S0R1IcSSTbAHNg2joW0Agkh1ZOTkPkOJLUiOZcgtIcR0xaodhTibG26SoGfpBBACfpxoZcSBZ0QAAAABJRU5ErkJggg=='
					/>
				</div>
			)}
			

      {openFiliatorio ? (
				<ModalFiliatorio form={form} setOpenFiliatorio={setOpenFiliatorio} />
			) : (
      <> 
			<h1 className={s.infoMainTitle}>{solapa}</h1>
			{solapa === 'Biografia' ? <div>{paciente ? paciente.nombre : 'Hola' }
      <button onClick={(evt) => handleEditar(evt, 'filiatorios')}>Editar</button>
      <button onClick={(evt) => handleEditar(evt, 'semiologica')}>Semiologica</button>
      </div> : ''}
      </> 
			)}   
      

      
		</div>
	);
}