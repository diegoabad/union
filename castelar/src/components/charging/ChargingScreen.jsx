import React from 'react';
import s from './ChargingScreen.module.css';
export default function ChargingScreen() {
	return (
		<div className={s.containerLoaded}>
			<div className={s.skChase}>
				<div className={s.skChaseDot}></div>
				<div className={s.skChaseDot}></div>
				<div className={s.skChaseDot}></div>
				<div className={s.skChaseDot}></div>
				<div className={s.skChaseDot}></div>
				<div className={s.skChaseDot}></div>
			</div>
		</div>
	);
}
