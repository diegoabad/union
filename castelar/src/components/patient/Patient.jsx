import React, { useState, useEffect } from 'react';
import s from './Patient.module.css';
import NavPatient from './NavPatient';
import BodyPatient from './BodyPatient';
import { useSelector, useDispatch } from 'react-redux';
import ChargingScreen from '../charging/ChargingScreen';
import { allProfessional } from '../../redux/actions/index';
import { setPatiensSearch } from '../../redux/actions/index';
import { db } from '../../firebase/credentials';

import { query, getDocs, collection } from 'firebase/firestore';
export default function Patient() {
	const [dni, setDni] = useState('');
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();
	const allPacientes = useSelector((state) => state.patienSearch);
	const [pacientes, setPacientes] = useState([]);
	useEffect(() => {
		async function getPacients() {
			const q = query(collection(db, 'busqueda'));

			const querySnapshot = await getDocs(q);
			let arr = [];
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				const obj = {
					id: doc.id,
					...doc.data(),
				};
				arr.push(obj);
			});
			dispatch(setPatiensSearch(arr));
		}
		getPacients();
		dispatch(allProfessional());
	}, []);

	useEffect(() => {
		setPacientes(allPacientes);
	}, [allPacientes]);

	return (
		<div className={s.containerPatient}>
			<NavPatient
				setPacientes={setPacientes}
				inputValue={inputValue}
				dni={dni}
			/>
			<BodyPatient
				pacientes={pacientes}
				setInputValue={setInputValue}
				setDni={setDni}
			/>
		</div>
	);
}
