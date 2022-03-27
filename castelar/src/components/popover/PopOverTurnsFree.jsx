import React from 'react';
import s from './PopOver.module.css';
export default function PopOverTurnsFree({ visibility, value, currentDay }) {
	if (value === currentDay) {
		return (
			<div
				className={
					visibility ? `${s.popContainer} ${s.visibility}` : `${s.popContainer}`
				}
			>
				{`PopOverTurnsFree  ${currentDay}`}
			</div>
		);
	} else {
		return null;
	}
}
