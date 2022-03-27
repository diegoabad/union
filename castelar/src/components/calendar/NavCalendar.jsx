import React from 'react';
import s from './Calendar.module.css';
import { NavLink } from 'react-router-dom';
import { checkBackMonth } from '../../functions/checkBackDate';
export default function NavCalendar({
	professional,
	date,
	setMoveMonth,
	moveMonth,
}) {
	return (
		<>
			<div className={s.NavCalendarContainer2}>
				<h2>{`${professional.title}. ${professional.lastName} ${professional.name}`}</h2>
			</div>
			<div className={s.NavCalendarContainer}>
				<NavLink className={s.navLinks} to='/calendar'>
					<div className={s.NavCalendarReturnContainer}>
						<img
							alt='volver a atras'
							className={s.off}
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJpJREFUSEvtk8ENgCAMAI8N3ERH0BGcxBV0IzfQEXQTRzBNfBA+LRUSH/rF3JUDApW/UJnPL1ALfzJRA0zAoo4P2Ycs8A3oHsGsSXISxfAT6IGrlMAFF7llB264RfAKbhXsQAscwGDpHp+LNZFbYhHIQJLKJbEK3JIcQSoZgbXUO4g5kksemQq33CJtQHU9N5EKTH/4BWqy6oluh2weGSJzuSQAAAAASUVORK5CYII='
						/>
						<p>Volver</p>
					</div>
				</NavLink>
				<h2
					className={s.h2D}
				>{`${professional.title}. ${professional.lastName} ${professional.name}`}</h2>
				<div className={s.NavCalendarMonthContainer}>
					{checkBackMonth(professional, date) ? (
						<img
							alt='volver mes anterior'
							onClick={() => setMoveMonth(moveMonth - 1)}
							className={s.off}
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJpJREFUSEvtk8ENgCAMAI8N3ERH0BGcxBV0IzfQEXQTRzBNfBA+LRUSH/rF3JUDApW/UJnPL1ALfzJRA0zAoo4P2Ycs8A3oHsGsSXISxfAT6IGrlMAFF7llB264RfAKbhXsQAscwGDpHp+LNZFbYhHIQJLKJbEK3JIcQSoZgbXUO4g5kksemQq33CJtQHU9N5EKTH/4BWqy6oluh2weGSJzuSQAAAAASUVORK5CYII='
						/>
					) : (
						<div className={s.backNull}></div>
					)}

					<p className={s.month}>{`${date.format('MMM')} ${date.format(
						'YYYY'
					)}`}</p>
					<img
						alt='mes siguiente'
						onClick={() => setMoveMonth(moveMonth + 1)}
						className={s.off}
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJVJREFUSEvt1EENgDAQRNFfBzgBCeAARyABJ0gACeAECWRvwIHubNKEAz0387rTtInCKxXO5weyDX+qohGYgCN77MsG7wQWPgAb0CmIF6iAFahVxAvY0CFEAUKICshIFFiABtiB9u3SVcDuwR1u4yqAHK4AoXAF6IHZ0/nzlSsVGWKPrchXoXw/t73KBCHkB7K1Fa/oBCp+IhnuHeH5AAAAAElFTkSuQmCC'
					/>
				</div>
			</div>
		</>
	);
}
