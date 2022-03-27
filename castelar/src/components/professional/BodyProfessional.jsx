import React from 'react';
import s from './Professional.module.css';
import { NavLink } from 'react-router-dom';
import ChargingScreen from '../charging/ChargingScreen';
export default function BodyProfessional({ arrayProfessionals }) {
	return (
		<>
			{arrayProfessionals.length ? (
				<div className={s.bodyProfessionalContainer}>
					{arrayProfessionals.map((pro) => {
						return (
							<div className={s.card} key={pro.email}>
								<div
									className={s.cardName}
								>{`${pro.title}. ${pro.lastName} ${pro.name}`}</div>
								<div
									className={
										pro.specialty === 'psicología'
											? `${s.cardSpecialty} ${s.psicologia}`
											: `${s.cardSpecialty} ${s.psiquiatria}`
									}
								>{`${pro.specialty}`}</div>
								<NavLink
									className={s.cardSeeCalendar}
									to={`/calendar/${pro.idProfessional}`}
								>
									{' '}
									<span>Ver Agenda</span>{' '}
								</NavLink>
							</div>
						);
					})}
				</div>
			) : (
				<ChargingScreen />
			)}
		</>
	);
}
