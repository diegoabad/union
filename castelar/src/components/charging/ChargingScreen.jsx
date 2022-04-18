import React from 'react';
import s from './ChargingScreen.module.css';
export default function ChargingScreen({ flag }) {
	return (
		<div className={s.containerLoaded}>
			{!flag ? (
				<div className={s.skChase}>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
				</div>
			) : (
				<div className={s.skChaseSmall}>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
					<div className={s.skChaseDot}></div>
				</div>
			)}
		</div>
	);
}
