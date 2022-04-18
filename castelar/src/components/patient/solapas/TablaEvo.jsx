import React, { useState } from 'react';
import s from './PatientGeneral.module.css';
import { useSelector } from 'react-redux';
import { transformDate } from '../../../functions/transformDate';
import { searchFullNameProfessional } from '../../../functions/searchFullNameProfessional';
import { calculateTwoDaysAgo } from '../../../functions/calculateTwoDaysAgo';
import ChargingScreen from '../../charging/ChargingScreen';
import ModalDetails from '../../modals/ModalDetails';
export default function TablaEvo({ pac, flag }) {
	const [openModal, setOpenModal] = useState(false);
	const [data, setData] = useState({});
	const arrPro = useSelector((state) => state.allProfessional);
	function sendDataModal(paciente) {
		setData(paciente);
		setOpenModal(true);
	}

	if (flag) {
		return (
			<table>
				<tr className={s.trEsp}>
					<th className={s.widthEsp}>Fecha</th>
					<th>Profesional</th>
					<th className={s.widthEsp}>Acciones</th>
				</tr>
				{pac.map((evo) => {
					const fullName = searchFullNameProfessional(
						arrPro,
						evo.idProfesional
					);
					return (
						<tr key={evo.idProfesional} className={s.trPro}>
							<td className={s.widthEsp}>{` ${transformDate(
								evo.fechaCreacion
							)}`}</td>
							<td>{fullName || <ChargingScreen flag={true} />}</td>
							<td className={s.containerAction}>
								{calculateTwoDaysAgo(evo.fechaCreacion) ? (
									<div className={s.containerImg}>
										<img
											alt='Editar'
											src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASdJREFUSEvVldF1wjAMRaUJKBMQNmADqRMwAqcbsBEdoRtU2gA2oBuwgTjixBzHmNgO5KP+yUfsd633ZBth5oEz68PbAMz8DQAiIv69jwGAmdnMDgDQjVWGiF+xkIub2c7XpP8GACI6A8CqUbwzsyMALMK6GJICzCepapV1zNyJyJmZN2YmAfIWQG/LFhE/ReQYIIi4j+2bVEHsOQBcIsiHiFyehkxERYsS8aDlkHUqfgs9ppUAT8QfOmdSBbXinoVncu+omgpaxM3sV1WX1YBacRckIg94Ebd5MYOQy8DX5CSHf7kMmwHpVVCyuAkwJt5b9NDmRUDLdT7Jon8HuLVZy64zc0+qusmeg/7B8Rdp9E0Y2cBff5v+ZAEv7jy7vOpheQU8O+AKo27wGdcWF1QAAAAASUVORK5CYII='
										/>{' '}
									</div>
								) : (
									<div className={s.containerImgDisabled}>
										<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAU5JREFUSEvVla9OxDAYwPstgQlmUBgUb8F5MChEg8F0mdkTTW3NEtTVYFA8AOZeAYVCnRgk24mv5COUdGO9a3c3wWzX3+/71xbYzB/MzGcHEwghFoj4Xtf1qx10T5Bl2ZnW+hIRk22ZIeKLDSI4Y+yC9gzXeoI0TW+11ichcM55kiTJDWPsyOyzJT2BEOKefpJSPvj0huBKqY88z0/btr02koMIqCwAcB7H8XNRFGsjQcSVXb5JGdg1B4CNkXDOj5VSG2eTfUpkww2IJE3TPA7htB6UwRh8bHImZeALp15QT36zs22uEoXAu667qqpq6S3whRNQCHFHo2qP+c4emKzsTIen1ayNVSBY4IL/ZPDnoAYJtsEnC3yujL1K9O8E32MWEvXw3yiK1mVZPo2eA3pwEHGx601wBQAAn1rrlZTybVSwT+RO6RxQ52U3h+wLUhoOKG0r7vYAAAAASUVORK5CYII=' />
									</div>
								)}

								<div className={s.containerImg}>
									<img
										onClick={() => {
											sendDataModal(evo);
										}}
										alt='Ver Más'
										src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcdJREFUSEvtlc1RG0EQhd8bnXGRgYEELO4qzXAzJ5MBshOQMgAygCrOBjLAF1/dowQMESBloLJ9nnb11iyMVou0HHRjqrZW2p/+ul+/niW2vLjl+HgHbFR4rUQhhN2U0heSIwC7APo54gOAhareOud+iMjiNVIrIAcekzzfmCIAVT13zl21gVYAFlxVf9XZkrwDIHaIyMyAIYQ9O9mhqqd1VSSPmpAlQA7+lOV4NGlExOR4dYUQ+iYVgE8AHpqQJcBwOBSSHoAFD3U2g8HgoNfrXQP4DOAfye8iMqmpOTGr0iASYzyq7z0DQggjVb0BMCfZL0v13v8EcFyWQdI0b0Ks2o8kv4qIVfUyaN5703fpZh3Qe5/KZ/P1vzHGDyW0SHIWY9x/C+APgJ1GI9YB5jFGM8JLBSWd5GEpUQjhUlXHHST6DWCvVSJ7uWjyihsy5FuVVXuTK2urapxOp2bharXZtGpUtpw1q4tNzRw25UvuWwHkIbJBqy1nl27tv3MuloOWUvJmZQC2jdhaCd4KqCEAJqp6tm7InmUgLwBcdtoqGrazDe4kpTQiab9tkKpsVXXmnLsHcP/mza5L1l2fef+ibVRq6xL9B8EX/hlCIYmsAAAAAElFTkSuQmCC'
									/>
								</div>
							</td>
						</tr>
					);
				})}
				{openModal ? (
					<ModalDetails setOpenModal={setOpenModal} data={data} />
				) : (
					''
				)}
			</table>
		);
	} else {
		return (
			<table className={s.sinEvoTable}>
				<tr className={s.trEsp}>
					<th className={s.widthEsp}>Fecha</th>
					<th>Profesional</th>
					<th className={s.widthEsp}>Acciones</th>
				</tr>
				<tr>
					<td className={s.sinEvo} colspan='3'>
						No hay evoluciones . . .
					</td>
				</tr>
			</table>
		);
	}
}
