import React, { useEffect, useState } from 'react';
import NavProfessional from './NavProfessional';
import BodyProfessional from './BodyProfessional';
import { getAllProfessional } from '../../functions/getAllProfessional';
import s from './Professional.module.css';

export default function Professional() {
	const [pros, setPros] = useState([]);

	useEffect(() => {
		async function listPro() {
			const professionals = await getAllProfessional();
			setPros(professionals);
		}
		listPro();
	}, []);

	return (
		<div className={s.professionalContainer}>
			<NavProfessional setPros={setPros} pros={pros}/>
			<BodyProfessional arrayProfessionals={pros} />
		</div>
	);
}
