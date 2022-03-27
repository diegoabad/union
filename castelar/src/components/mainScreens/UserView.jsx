import React from 'react';

import Calendar from '../calendar/Calendar';
import Schedule from '../schedule/Schedule';
import Administration from '../extras/Administration';
import CreatePatients from '../extras/CreatePatients';
import Patient from '../patient/Patient';
import Professional from '../professional/Professional';
import HomeUser from '../extras/HomeUser';
import s from './Main.module.css';
import { Route, Routes } from 'react-router-dom';
export default function UserView({ user }) {
	return (
		<div className={s.userContainer}>
			<Routes>
				<Route path='/' element={<HomeUser />} />
				<Route path='/calendar' element={<Professional />} />
				<Route path='/calendar/:idProfessional' element={<Calendar />} />
				<Route path='/schedule/:idProfessional/:date' element={<Schedule />} />
				<Route path='/administracion' element={<Administration />} />
				<Route path='/crearPac' element={<CreatePatients />} />
				<Route path='/paciente' element={<Patient />} />
			</Routes>
		</div>
	);
}
