import React from 'react';
import s from './Schedule.module.css';
import { NavLink } from 'react-router-dom';
import { calculateWorkDays } from '../../functions/calculateWorkDays';
import { checkBackDays } from '../../functions/checkBackDate';
export default function NavSchedule({ professional, date }) {
	const [day, month, year] = date.format('L').split('/');
	return (
		<>
			<div className={s.NavScheduleContainer2}>
				<h2>{`${professional.title}. ${professional.lastName} ${professional.name}`}</h2>
			</div>
			<div className={s.NavScheduleContainer}>
				<div className={s.NavScheduleReturnContainer}>
					<NavLink
						className={s.navLinkVolver}
						to={`/calendar/${professional.idProfessional}`}
					>
						<img
							alt='volver a atras'
							className={s.off}
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJpJREFUSEvtk8ENgCAMAI8N3ERH0BGcxBV0IzfQEXQTRzBNfBA+LRUSH/rF3JUDApW/UJnPL1ALfzJRA0zAoo4P2Ycs8A3oHsGsSXISxfAT6IGrlMAFF7llB264RfAKbhXsQAscwGDpHp+LNZFbYhHIQJLKJbEK3JIcQSoZgbXUO4g5kksemQq33CJtQHU9N5EKTH/4BWqy6oluh2weGSJzuSQAAAAASUVORK5CYII='
						/>
						<p>Volver</p>
					</NavLink>
				</div>
				<h2
					className={s.h2D}
				>{`${professional.title}. ${professional.lastName} ${professional.name}`}</h2>
				<div className={s.NavScheduleMonthContainer}>
					{checkBackDays(professional, date) ? (
						<NavLink
							className={s.navLinkVolver}
							to={`/schedule/${professional.idProfessional}/${calculateWorkDays(
								professional,
								date,
								false
							)}`}
						>
							<img
								alt='dia anterior'
								className={s.off}
								src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJpJREFUSEvtk8ENgCAMAI8N3ERH0BGcxBV0IzfQEXQTRzBNfBA+LRUSH/rF3JUDApW/UJnPL1ALfzJRA0zAoo4P2Ycs8A3oHsGsSXISxfAT6IGrlMAFF7llB264RfAKbhXsQAscwGDpHp+LNZFbYhHIQJLKJbEK3JIcQSoZgbXUO4g5kksemQq33CJtQHU9N5EKTH/4BWqy6oluh2weGSJzuSQAAAAASUVORK5CYII='
							/>
						</NavLink>
					) : (
						'hola'
					)}

					<p className={s.date}>{`${day} / ${month} / ${year}`}</p>

					<NavLink
						className={s.navLinkVolver}
						to={`/schedule/${professional.idProfessional}/${calculateWorkDays(
							professional,
							date,
							true
						)}`}
					>
						<img
							alt='siguiente dia'
							className={s.off}
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJVJREFUSEvt1EENgDAQRNFfBzgBCeAARyABJ0gACeAECWRvwIHubNKEAz0387rTtInCKxXO5weyDX+qohGYgCN77MsG7wQWPgAb0CmIF6iAFahVxAvY0CFEAUKICshIFFiABtiB9u3SVcDuwR1u4yqAHK4AoXAF6IHZ0/nzlSsVGWKPrchXoXw/t73KBCHkB7K1Fa/oBCp+IhnuHeH5AAAAAElFTkSuQmCC'
						/>
					</NavLink>
				</div>
			</div>
		</>
	);
}
