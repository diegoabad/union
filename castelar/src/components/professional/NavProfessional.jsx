import React, { useState } from 'react';
import s from './Professional.module.css';
import { NavLink } from 'react-router-dom';
import { filterProfessional } from '../../functions/filterProfessional';

export default function NavProfessional({ setPros, copyPros, setFlagSearch }) {
	const [focus, setFocus] = useState(false);
	function handleSearch(e) {
		const texto = e.target.value.toLowerCase().trim();
		if (texto.length > 0) {
			setFlagSearch(true);
		} else {
			setFlagSearch(false);
		}
		const professionals = filterProfessional(copyPros, texto);
		setPros(professionals);
	}

	return (
		<div className={s.NavProfessionalContainer}>
			<NavLink className={s.navLinks} to='/'>
				<div className={s.NavProfessionalReturnContainer}>
					<img
						alt='volver a atras'
						className={s.off}
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJpJREFUSEvtk8ENgCAMAI8N3ERH0BGcxBV0IzfQEXQTRzBNfBA+LRUSH/rF3JUDApW/UJnPL1ALfzJRA0zAoo4P2Ycs8A3oHsGsSXISxfAT6IGrlMAFF7llB264RfAKbhXsQAscwGDpHp+LNZFbYhHIQJLKJbEK3JIcQSoZgbXUO4g5kksemQq33CJtQHU9N5EKTH/4BWqy6oluh2weGSJzuSQAAAAASUVORK5CYII='
					/>
					<p>Volver</p>
				</div>
			</NavLink>

			<div
				className={
					focus ? `${s.containerSearch} ${s.focusSearch}` : s.containerSearch
				}
			>
				<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVpJREFUSEu9VVFVA0EQSxWABFBA6gAcgAJwADgAB8UBOMABoIA4oBJaBfDy3mzf0O7etuXKvncft3ubzGRmchMceE0OjI8mAckTALcAzgEwAhGAdwBPkubbBFclIDkL8CGMmaT7HskGAUlHeRYXXwAYyHsg6UzuAFyXjCRNh0h+EaTIl5amAK8DBJGlOgq5TFpdK4LQ/Cu+mrbAC0qQfMb7aasmmaDo7gI2I8phknwOuZp3MkHRvht9JQsnXK1FJvj2RUk7zQbJwXtjESwlHdeqPJZEH5I8kBvrX4tsa9inTT0z7LZpTGpp1QWAi86gvQGw7o+SHrqDllovW4X73D2ercIGeJMAfeZgHFS7BmsD1DM7y+JvLsO3miQ9u/ZEuztsfgY1kB8b4JykJbIn+bxKstNQ1STokfyZIJojZ3Il6bUEMwpBIrHFr8C9PxrB1m069Hfa5+zgGfwAGFmsGY0xnQYAAAAASUVORK5CYII=' />
				<input
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className={s.search}
					onChange={(e) => handleSearch(e)}
					placeholder='Busca profesional por nombre o apellido'
				/>
			</div>
		</div>
	);
}
