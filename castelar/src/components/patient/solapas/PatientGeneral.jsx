import React, { useState } from 'react';
import s from './PatientGeneral.module.css';
import { useSelector } from 'react-redux';
import { transformDate } from '../../../functions/transformDate';
import TablaEvo from './TablaEvo';
import FiltrosTabla from './FiltrosTabla';

export default function PatientFiliatorio({ estadoSolapa }) {
	const pac = useSelector((state) => state.pacienteActual);
	const [evoluciones, setEvoluciones] = useState([]);

	return (
		<div className={s.containerTable}>
			{estadoSolapa === 'Psicología' ? (
				<FiltrosTabla
					pacienteActual={pac.psicologia}
					setEvoluciones={setEvoluciones}
				/>
			) : (
				''
			)}

			{estadoSolapa === 'Psicología' && pac.psicologia.length > 0 ? (
				<TablaEvo pac={pac.psicologia} flag={true} />
			) : estadoSolapa === 'Psicología' && pac.psicologia.length === 0 ? (
				<TablaEvo flag={false} />
			) : (
				''
			)}

			{estadoSolapa === 'Psiquiatría' && pac.psiquiatria.length > 0 ? (
				<table>
					<tr>
						<th>Fecha</th>
						<th>Profesional</th>
						<th>Acciones</th>
					</tr>

					{pac.psiquiatria.map((evo, i) => {
						return (
							<tr key={evo.nombreCompletoProfesional + i}>
								<td>{` ${transformDate(evo.fechaCreacion)}`}</td>
								<td>{evo.nombreCompletoProfesional}</td>
								<td className={s.optAction}>
									<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASdJREFUSEvVldF1wjAMRaUJKBMQNmADqRMwAqcbsBEdoRtU2gA2oBuwgTjixBzHmNgO5KP+yUfsd633ZBth5oEz68PbAMz8DQAiIv69jwGAmdnMDgDQjVWGiF+xkIub2c7XpP8GACI6A8CqUbwzsyMALMK6GJICzCepapV1zNyJyJmZN2YmAfIWQG/LFhE/ReQYIIi4j+2bVEHsOQBcIsiHiFyehkxERYsS8aDlkHUqfgs9ppUAT8QfOmdSBbXinoVncu+omgpaxM3sV1WX1YBacRckIg94Ebd5MYOQy8DX5CSHf7kMmwHpVVCyuAkwJt5b9NDmRUDLdT7Jon8HuLVZy64zc0+qusmeg/7B8Rdp9E0Y2cBff5v+ZAEv7jy7vOpheQU8O+AKo27wGdcWF1QAAAAASUVORK5CYII=' />
									<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcdJREFUSEvtlc1RG0EQhd8bnXGRgYEELO4qzXAzJ5MBshOQMgAygCrOBjLAF1/dowQMESBloLJ9nnb11iyMVou0HHRjqrZW2p/+ul+/niW2vLjl+HgHbFR4rUQhhN2U0heSIwC7APo54gOAhareOud+iMjiNVIrIAcekzzfmCIAVT13zl21gVYAFlxVf9XZkrwDIHaIyMyAIYQ9O9mhqqd1VSSPmpAlQA7+lOV4NGlExOR4dYUQ+iYVgE8AHpqQJcBwOBSSHoAFD3U2g8HgoNfrXQP4DOAfye8iMqmpOTGr0iASYzyq7z0DQggjVb0BMCfZL0v13v8EcFyWQdI0b0Ks2o8kv4qIVfUyaN5703fpZh3Qe5/KZ/P1vzHGDyW0SHIWY9x/C+APgJ1GI9YB5jFGM8JLBSWd5GEpUQjhUlXHHST6DWCvVSJ7uWjyihsy5FuVVXuTK2urapxOp2bharXZtGpUtpw1q4tNzRw25UvuWwHkIbJBqy1nl27tv3MuloOWUvJmZQC2jdhaCd4KqCEAJqp6tm7InmUgLwBcdtoqGrazDe4kpTQiab9tkKpsVXXmnLsHcP/mza5L1l2fef+ibVRq6xL9B8EX/hlCIYmsAAAAAElFTkSuQmCC' />
								</td>
							</tr>
						);
					})}
				</table>
			) : estadoSolapa === 'Psiquiatría' && pac.psiquiatria.length === 0 ? (
				<div>
					<span>No hay evoluciones cargadas</span>
				</div>
			) : (
				''
			)}
		</div>
	);
}

{
	/* 	<table>
    

      {estadoSolapa === 'Psiquiatría' && pac.psiquiatria.length > 0 ? (
        <div>
          {pac.psiquiatria.map((evo) => {
            return (
              <div>
                <p>
                  Creacion:{' '}
                  <span>{` ${transformDate(evo.fechaCreacion)}`}</span>
                </p>
                <p>Profesional:{evo.nombreCompletoProfesional}</p>
                <p>Ver detalle</p>
              </div>
            );
          })}
        </div>
      ) : (
        'No hay evoluciones'
      )}

      {estadoSolapa === 'Nutrición' && pac.nutricion.length > 0 ? (
        <div>
          {pac.nutricion.map((evo) => {
            return (
              <div>
                <p>
                  Creacion:{' '}
                  <span>{` ${transformDate(evo.fechaCreacion)}`}</span>
                </p>
                <p>Profesional:{evo.nombreCompletoProfesional}</p>
                <p>Ver detalle</p>
              </div>
            );
          })}
        </div>
      ) : (
        'No hay evoluciones'
      )} 	</table>*/
}
