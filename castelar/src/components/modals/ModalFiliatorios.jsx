import React, { useEffect, useState } from 'react';
import s from './Modal.module.css';
import Formdata from '../Formdata';
import EvolucionPsiquiatrica from '../EvolucionPsiquatrica';
import Admision1 from '../Admision1';
import Admision from '../Admision';
import EvolucionPsicologica from '../EvolucionPsicologica';
import EvaluacionNutricional from '../EvaluacionNutricional';
import ExamenClinico from '../ExamenClinico';
import Musicoterapia from '../Musicoterapia';
import EducacionFisica from '../EducacionFisica';
import AreaSocial from '../AreaSocial';
import Ocupacional from '../Ocupacional';
import Contextuales from '../Contextuales';
import AdmisionPsicologia from '../AdmisionPsicologia';
import AdmisionMusicoterapia from '../MusicoterapiaAdmision';
import AdmisionTerapiaOcupacional from '../TerapiaOcupacionalEvaluacion';
import AdmisionEdFisica from '../EdFisicaAdmision';
import AdmisionAreaSocial from '../AreaSocialEvaluacion';
import AdmisionEspecialidades from '../OtrasEspecialidadsEvaluacion';
import AdmisionTerapiasContextuales from '../TerapiasContextualesAmision';
import Otras from '../OtrasTerapias';
import Medicacion from '../Medicacion';

export default function ModalFiliatorio(props) {
	const {
		setOpenFiliatorio,
		setDni,
		search,
		form,
		paciente,
		editar,
		setForm,
		register,
		formu,
	} = props;

	const [registro, setRegistro] = useState('');
	const [formulario, setFormulario] = useState(false);

	function handleClose() {
		setOpenFiliatorio(false);
	}

	useEffect(() => {
		setRegistro(register);
		setFormulario(formu);
	}, [register, formu]);

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
				{form !== 'filiatorios' && formulario === false && editar ? (
					<div>
						{paciente.map((e, index) => {
							return (
								<div key={index}>
									<h3>
										{e.fechaCreacion.seconds
											? new Date(
													e.fechaCreacion.seconds * 1000
											  ).toLocaleDateString()
											: new Date(e.fechaCreacion).toLocaleDateString()}
									</h3>
									{e.type ? <button>editar</button> : <button>agregar</button>}
								</div>
							);
						})}
					</div>
				) : (
					<div>
						{form === 'filiatorios' && (
							<Formdata
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
							/>
						)}
						{form === 'psiquiatria' && (
							<EvolucionPsiquiatrica
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'semiologia' && (
							<Admision1
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}

						{form === 'admision' && (
							<Admision
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'admision_psicologica' && (
							<AdmisionPsicologia
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'psicologia' && (
							<EvolucionPsicologica
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'nutricion' && (
							<EvaluacionNutricional
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'ingreso' && (
							<ExamenClinico
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'musicoterapia' && (
							<Musicoterapia
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'admision_musicoterapia' && (
							<AdmisionMusicoterapia
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'admision_edfisica' && (
							<AdmisionEdFisica
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'ed_fisica' && (
							<EducacionFisica
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'admision_area_social' && (
							<AdmisionAreaSocial
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'area_social' && (
							<AreaSocial
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'admision_terapia_ocupacional' && (
							<AdmisionTerapiaOcupacional
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'ocupacional' && (
							<Ocupacional
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'admision_terapias_contextuales' && (
							<AdmisionTerapiasContextuales
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'contextual' && (
							<Contextuales
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'admision_especialidades' && (
							<AdmisionEspecialidades
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'otras' && (
							<Otras
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
						{form === 'medicacion' && (
							<Medicacion
								setOpenFiliatorio={setOpenFiliatorio}
								setDni={setDni}
								search={search}
								registro={registro}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
