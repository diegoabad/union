import React from 'react';
import s from '../Patient.module.css';
import { useSelector } from 'react-redux';
import { dniPro } from '../../../functions/dniPro';
import { getCumple } from '../../../functions/getCumple';
export default function PatientFiliatorio() {
	const pac = useSelector((state) => state.pacienteActual.filiatorios);
	return (
		<>
			<div>
				<h3>Datos Personales</h3>
				<div>
					<p>
						Nombre: <span>{`${pac.nombre}`}</span>
					</p>
					<p>
						Apellido: <span>{`${pac.apellido}`}</span>
					</p>
					<p>
						DNI: <span>{`${dniPro(pac.dni)}`}</span>
					</p>
					<p>
						Sexo: <span>{`${pac.sexo}`}</span>
					</p>
					<p>
						Genero Autopercibido: <span>{`${pac.genero}`}</span>
					</p>
					<p>
						Fecha de Nacimiento:{' '}
						<span>{`${new Date(pac.fechaNacimiento.seconds * 1000).getDate()}/${
							new Date(pac.fechaNacimiento.seconds * 1000).getMonth() + 1 >= 10
								? new Date(pac.fechaNacimiento.seconds * 1000).getMonth() + 1
								: `0${
										new Date(pac.fechaNacimiento.seconds * 1000).getMonth() + 1
								  }`
						}/${new Date(
							pac.fechaNacimiento.seconds * 1000
						).getFullYear()}`}</span>
					</p>
					<p>
						Edad Actual:{' '}
						<span>{`${getCumple(
							new Date(pac.fechaNacimiento.seconds * 1000)
						)} años`}</span>
					</p>
					<p>
						Estado Civil: <span>{`${pac.estado_civil}`}</span>
					</p>
					<p>
						Nacionalidad: <span>{`${pac.nacionalidad}`}</span>
					</p>
				</div>
			</div>
		</>
	);
}
