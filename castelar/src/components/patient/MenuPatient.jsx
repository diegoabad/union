import React from 'react';
import s from './Patient.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getSolapaPaciente } from '../../redux/actions/index';
export default function MenuPatient() {
	const dispatch = useDispatch();
	const solapa = useSelector((state) => state.solapaPaciente);
	function handleSolapa(e) {
		dispatch(getSolapaPaciente(e.target.innerHTML));
	}

	return (
		<div className={s.containerMenuPatient}>
			<div
				className={solapa === 'Biografia' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Biografia
			</div>
			<div
				className={
					solapa === 'Datos Filiatorios' ? `${s.active}` : `${s.normal}`
				}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Datos Filiatorios
			</div>
			<div
				className={solapa === 'Admisiones' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Admisiones
			</div>
			<div
				className={solapa === 'Semiología' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Semiología
			</div>
			<div
				className={solapa === 'Psiquiatría' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Psiquiatría
			</div>
			<div
				className={solapa === 'Medicación' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Medicación
			</div>
			<div
				className={solapa === 'Psicología' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Psicología
			</div>
			<div
				className={solapa === 'Clínica' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Clínica
			</div>

			<div
				className={solapa === 'Nutrición' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Nutrición
			</div>
			<div
				className={solapa === 'Área Social' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Área Social
			</div>
			<div
				className={solapa === 'Ed. Física' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Ed. Física
			</div>
			<div
				className={
					solapa === 'Terapia Ocupacional' ? `${s.active}` : `${s.normal}`
				}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Terapia Ocupacional
			</div>
			<div
				className={solapa === 'Musicoterapia' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Musicoterapia
			</div>
			{/* 
      <div
				className={solapa === 'Guardia' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Terapias Contextuales
			</div>
      <div
				className={solapa === 'Guardia' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Terapias Varias
			</div>
 */}
			<div
				className={solapa === 'Guardia' ? `${s.active}` : `${s.normal}`}
				onClick={(e) => {
					handleSolapa(e);
				}}
			>
				Guardia
			</div>
		</div>
	);
}
