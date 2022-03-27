import React from 'react';
import s from './Patient.module.css';
import InfoPatient from './InfoPatient';
import MenuPatient from './MenuPatient';
import { useSelector } from 'react-redux';
export default function BodyPatients() {
	const menuSolapa = useSelector((state) => state.menuSolapa);
	return (
		<div className={s.BodyPatientContainer}>
			{menuSolapa ? <MenuPatient /> : ''}
			<InfoPatient />
		</div>
	);
}
