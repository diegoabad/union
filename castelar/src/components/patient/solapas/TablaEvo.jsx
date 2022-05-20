import React, { useState, useEffect } from 'react';
import s from './PatientGeneral.module.css';
import { transformDate } from '../../../functions/transformDate';
import { searchFullNameProfessional } from '../../../functions/searchFullNameProfessional';
import { calculateTwoDaysAgo } from '../../../functions/calculateTwoDaysAgo';
import ChargingScreen from '../../charging/ChargingScreen';
import ModalDetails from '../../modals/ModalDetails';
import ModalFiliatorio from '../../modals/ModalFiliatorios';
import { useSelector, useDispatch } from 'react-redux';
import { editFiliatorios } from '../../../redux/actions/index';
export default function TablaEvo({ pac, solapa }) {
	const [openModal, setOpenModal] = useState(false);
	const [data, setData] = useState({});
	const [evoluciones, setEvoluciones] = useState([]);
	const arrPro = useSelector((state) => state.allProfessional);
	const [openFiliatorio, setOpenFiliatorio] = useState(false);
	const [form, setForm] = useState('');
	const [registro, setRegistro] = useState(0);
	const dispatch = useDispatch();
	function sendDataModal(paciente) {
		setData(paciente);
		setOpenModal(true);
	}

	useEffect(() => {
		if (solapa === 'Psicología') {
			setForm('psicologia');
		}
	}, [solapa]);

	useEffect(() => {
		console.log(pac);
		setEvoluciones(pac);
	}, [pac]);

	function handleEditar(index) {
		setOpenFiliatorio(true);
		setRegistro(index);
		dispatch(editFiliatorios(true));
	}

	return (
		<table>
			<tr className={s.trEsp}>
				<th className={s.widthEsp}>Fecha</th>
				<th>Profesional</th>
				<th className={s.widthEsp}>Acciones</th>
			</tr>
			{evoluciones.length ? (
				evoluciones.map((evo, index) => {
					const fullName = searchFullNameProfessional(
						arrPro,
						evo.idProfesional
					);
					return (
						<tr key={evo.fechaCreacion} className={s.trPro}>
							<td className={s.widthEsp}>{` ${transformDate(
								evo.fechaCreacion
							)}`}</td>
							<td>{fullName || <ChargingScreen flag={true} />}</td>
							<td className={s.containerAction}>
								{calculateTwoDaysAgo(evo.fechaCreacion) ? (
									<div
										className={s.containerImg}
										onClick={() => {
											handleEditar(index);
										}}
									>
										<img
											alt='Editar'
											src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASdJREFUSEvVldF1wjAMRaUJKBMQNmADqRMwAqcbsBEdoRtU2gA2oBuwgTjixBzHmNgO5KP+yUfsd633ZBth5oEz68PbAMz8DQAiIv69jwGAmdnMDgDQjVWGiF+xkIub2c7XpP8GACI6A8CqUbwzsyMALMK6GJICzCepapV1zNyJyJmZN2YmAfIWQG/LFhE/ReQYIIi4j+2bVEHsOQBcIsiHiFyehkxERYsS8aDlkHUqfgs9ppUAT8QfOmdSBbXinoVncu+omgpaxM3sV1WX1YBacRckIg94Ebd5MYOQy8DX5CSHf7kMmwHpVVCyuAkwJt5b9NDmRUDLdT7Jon8HuLVZy64zc0+qusmeg/7B8Rdp9E0Y2cBff5v+ZAEv7jy7vOpheQU8O+AKo27wGdcWF1QAAAAASUVORK5CYII='
										/>
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
				})
			) : (
				<td className={s.sinEvo} colspan='3'>
					No hay evoluciones . . .
				</td>
			)}
			{openModal ? (
				<ModalDetails setOpenModal={setOpenModal} data={data} />
			) : null}
			{openFiliatorio ? (
				<ModalFiliatorio
					form={form}
					setForm={setForm}
					setOpenFiliatorio={setOpenFiliatorio}
					paciente={evoluciones}
					editar={true}
					register={registro}
					formu={true}
				/>
			) : null}
		</table>
	);
}
