import React from 'react';
import s from './Calendar.module.css';
import { generateDates } from '../../functions/createCalendar';
import { NavLink } from 'react-router-dom';

export default function BodyCalendar({ professional, month }) {
	const cellsDates = generateDates(month, professional);

	return (
		<div className={s.bodyCalendarContainer}>
			<div className={s.calendarGridHeaderDesktop}>
				<span className={s.gridCellHeader}>Lunes</span>
				<span className={s.gridCellHeader}>Martes</span>
				<span className={s.gridCellHeader}>Miércoles</span>
				<span className={s.gridCellHeader}>Jueves</span>
				<span className={s.gridCellHeader}>Viernes</span>
				<span className={s.gridCellHeader}>Sábado</span>
				<span className={s.gridCellHeader}>Domingo</span>
			</div>
			<div className={s.calendarGridHeaderMobile}>
				<span className={s.gridCellHeader}>Lun.</span>
				<span className={s.gridCellHeader}>Mar.</span>
				<span className={s.gridCellHeader}>Mié.</span>
				<span className={s.gridCellHeader}>Jue.</span>
				<span className={s.gridCellHeader}>Vie.</span>
				<span className={s.gridCellHeader}>Sáb.</span>
				<span className={s.gridCellHeader}>Dom.</span>
			</div>
			<div className={s.calendarGridBody}>
				{cellsDates.length
					? cellsDates.map((d, i) => {
							if (d.isInCurrentMonth) {
								if (d.isInworkToday) {
									return (
										<NavLink
											className={s.navLinks}
											to={`/schedule/${professional.idProfessional}/${d.date
												.format('L')
												.replace('/', '-')
												.replace('/', '-')}`}
										>
											<div
												className={`${s.gridCellData} ${s.gridNumberCellAvailable}`}
											>
												<div
													className={
														d.isIncurrentDate
															? `${s.gridNumberCell} ${s.gridNumberCellToday}`
															: d.isSunday
															? `${s.gridNumberCell} ${s.gridNumberCellSunday}`
															: s.gridNumberCell
													}
												>
													{d.date.date()}
												</div>

												<span className={s.gridCellDataAvailability}>
													Turnos
												</span>
											</div>
										</NavLink>
									);
								} else {
									return (
										<div key={i} className={s.gridCellData}>
											<span
												className={
													d.isIncurrentDate
														? `${s.gridNumberCell} ${s.gridNumberCellToday} `
														: d.isSunday
														? `${s.gridNumberCell} ${s.gridNumberCellSunday}`
														: s.gridNumberCell
												}
											>
												{d.date.date()}
											</span>
										</div>
									);
								}
							} else {
								return (
									<div
										key={i}
										className={`${s.gridCellData} ${s.gridNumberCellNotMonth}`}
									>
										<span className={s.gridNumberCell}>{d.date.date()}</span>
									</div>
								);
							}
					  })
					: ''}
			</div>
		</div>
	);
}
