import React from 'react';
import { auth } from '../../firebase/credentials';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import s from './Main.module.css';

export default function NavBar({ user }) {
	return (
		<div className={s.navbarContainer}>
			<NavLink
				className={(navData) =>
					navData.isActive ? `${s.active}` : `${s.navLinks}`
				}
				to='/'
			>
				<p className={s.options}>Inicio</p>
			</NavLink>
			<NavLink
				className={(navData) =>
					navData.isActive ? `${s.active}` : `${s.navLinks}`
				}
				to='/calendar'
			>
				<p className={s.options}>Turnos</p>
			</NavLink>

			<NavLink
				className={(navData) =>
					navData.isActive ? `${s.active}` : `${s.navLinks}`
				}
				to='/crearPac'
			>
				<p className={s.options}>Crear Paciente</p>
			</NavLink>
			<NavLink
				className={(navData) =>
					navData.isActive ? `${s.active}` : `${s.navLinks}`
				}
				to='/administracion'
			>
				<p className={s.options}>Administración</p>
			</NavLink>
			<NavLink className={s.navLinks} to='/'>
				<p className={s.options} onClick={() => signOut(auth)}>
					Cerrar Sesion
				</p>
			</NavLink>

			<NavLink className={s.navLinksMobile} to='/'>
				<img
					alt='icono home'
					className={s.off}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtld0RQTEQhb/bgRZUgApQCSpBJXSCDqhACzpgjrm5E0nuzY/JE/uYbM63u3N20lA5msr65ABGwKktaAk8UopLBRjxaSt6BZIgqYAjsHIq1tkm1kUKICRudKOQGGAHbCNV7gHlBWMIsAYOsRG09xqVuvGiD5AjbkSDkBBATpEd5ZyckG3lLDmsCxdQKm4EPYgNUMX3gsrdLgUZm0W0AWptkjOTgVxpzXRfC3AD3lvf56JnYSee3m8B3G5DY/xqRH/AhzHPwNw6uQALx7opOVl/ctFqxD6cIlH70Qtl2ysZugObfgAAAABJRU5ErkJggg=='
				/>
			</NavLink>
			<NavLink className={s.navLinksMobile} to='/calendar'>
				<img
					alt='icono agenda'
					className={s.off}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK1JREFUSEtjZKAxYKSx+QyELPgPdQAudYTk6W+BAwMDw3wGBgYFMoPuAQMDQyIDA8MBmH50r4MUyJNpOEwbyAxFXBbAwpRCOxBBj+4DullAKHXh8iFGqsLlg+FjAbqXSeVjZDRSDSCknqAFpCbXwRfJhIKAkDzBICJkACF5ghYM/Tigug8+MDAw8JNqKpr6h8j1CXqZA6pwFlBQJ4AMT8BX4VDoeEzt5JaaRDsEAEtJNBmkfiBdAAAAAElFTkSuQmCC'
				/>
			</NavLink>

			<NavLink className={s.navLinksMobile} to='/crearPac'>
				<img
					alt='icono crear paciente'
					className={s.off}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOVJREFUSEvtk9ERAUEQRN9lIAQZkAEiQARCEAIyEAIRkAEyIAMhyIBqtarOmrVzzvkyn3ez/XZ6egsarqJhff6ArMMpi1rADBgFhS2wAC5ZxaghBTgCnah3Dwy+AegDu4SQAAK5y5pgHuyxRGST/sd1DR9e9CyAfN8krjgGtI9aAB22dnACuglwpQmk0QaWwDAIroM15xLgIZrax92dOi/5Y4B2MAWUpnIpPVqylSK3RStgksmglSQX4F16Ymb8HlwAjd5zvqCDYaF5tLzk3NJiAVdAfgpwulOtzTVmNcnn7j8g694NZzEjGZb5xYoAAAAASUVORK5CYII='
				/>
			</NavLink>
			<NavLink className={s.navLinksMobile} to='/administracion'>
				<img
					alt='icono administracion'
					className={s.off}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJBJREFUSEvtVEEOgCAMKy9Tf64v05iwBGbGGnAcjFxpVtquJASfFDwf0wl2AIuh6r7b8h2Leyg4HctEMYszCbR1MlATeLifwHfA8tDKejjk1vodAFZiTUvc/KK9/nPoDOiGsi/pDbmcr0tYcbtNzOjWkDAC6z+qHj2iIJxAvO6yyGtyd8hsk9kt/WCTaeks8ALaDjAZXHt1HgAAAABJRU5ErkJggg=='
				/>
			</NavLink>
			<NavLink className={s.navLinksMobile} to='/'>
				<img
					alt='icono log out'
					onClick={() => signOut(auth)}
					className={s.off}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAU1JREFUSEvVlN1RAkEQhD8iUCNAIlAjADIwAyECzUDIQDKADMgAjACNQM0AI9Bqa+dqa539uQceuKe7utnp7umeHXDiZ3Di/vQF+AmEms81F4bG5wlwDXxmFMT/XDtrI1oAz9B5lY5I36pZ5sJSAlgDD4mpHoBKVDv3QHIAL8Aj8AXcA2+ZEd0CW2AIrICnFMQD0Fw/gG9gEjXXWS9FAtkDF8Ao8usPywOw0XiMcjE1xRtgFqvwAMRmDEwDs7g+ByClO+A1qO7OeADHILeWsHTcAtfZq5qC3tta2nKPpRJzA9wlBpfuRRl9AN4BvRdHZIa5scugZINRiql6tagw9qpviqkKTYVMU5ps0VIBaq70XPZZNGtiXthVoJEZkBpr0y3z/2ZvTWpRNCUlg4te1QDUWFeH7hgtk9KlR4y1kCJgV7lLogWgxL767/wBfgE2OEUZ4Z/YGwAAAABJRU5ErkJggg=='
				/>
			</NavLink>
		</div>
	);
}
