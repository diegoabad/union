import React, { useEffect, useState } from 'react';
import NavProfessional from './NavProfessional';
import BodyProfessional from './BodyProfessional';
import { getAllProfessional } from '../../functions/getAllProfessional';
import s from './Professional.module.css';

export default function Professional() {
	const [pros, setPros] = useState([]);
	const [copyPros, setCopyPros] = useState([]);
	const [flagSearch, setFlagSearch] = useState(false);
	useEffect(() => {
		async function listPro() {
			const professionals = await getAllProfessional();
			setPros(professionals);
			setCopyPros(professionals);
		}
		listPro();
	}, []);

	return (
		<div className={s.professionalContainer}>
			<NavProfessional
				setPros={setPros}
				copyPros={copyPros}
				setFlagSearch={setFlagSearch}
			/>
			<BodyProfessional arrayProfessionals={pros} flagSearch={flagSearch} />
		</div>
	);
}
