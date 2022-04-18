import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPsicologica } from '../redux/actions/index';

import Headers from './evolucionpsicologica/Headers';
import Interconsultas from './evolucionpsicologica/Interconsultas';
import Evolucion from './evolucionpsicologica/Evolucion';
import Problematica from './evolucionpsicologica/Problematica';
import Alerta from './admision1/componente/Alerta.jsx';

import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { cont_psicologica } from './controls/contPsicologica';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFormControl-root': {
			margin: theme.spacing(1),
			width: '80%',
			minWidth: '250px',
		},
		'& .MuiGrid-root': {
			display: 'flex',
			margin: theme.spacing(1),
			width: '100%',
		},
		'& .MuiAlert-message': {
			fontSize: '1.5rem',
		},
	},
	pagecontent: {
		margin: theme.spacing(5),
		padding: theme.spacing(3),
		width: '90%',
		alignItems: 'strech',
		justifyContent: 'space-between',
		backgroundColor: '#F0FFFF',
	},
}));

const addPsicologica = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { psicologia: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const EvolucionPsicologica = ({ setOpenFiliatorio, registro }) => {
	const [psicologica, setPsicologica] = React.useState('');
	const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
	const paciente = useSelector((state) => state.pacienteActual.psicologia);
  const editar = useSelector((state) => state.editarFiliatorio)
	const userActual = useSelector((state) => state.usuarioActual);
	const [error, setError] = React.useState('');
	const dispatch = useDispatch();
	const extraData = {
		idProfesional: userActual.uid,
		nombreCompletoProfesional: `${userActual.name} ${userActual.lastName}`,
		fechaCreacion: new Date(),
	};

	const handleClick = async () => {
		const control = cont_psicologica(psicologica);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
			let data
      if (!editar){
		    data = [psicologica, ...paciente ];
      } else {
        data = paciente.map((item, index) => {
          if (index === registro) {
            return psicologica
          } else {
            return item
          }
        })
      }
			const result = await addPsicologica(data, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getPsicologica(data));
				//Cerramos el modal, se actualiza el redux, notificacion de envio correcto
			} else {
				//notificacion de envio incorrecto
			}
			setError('');
		}
	};

	useEffect(() => {
    if (!editar) setPsicologica({...psicologica, ...extraData});
    else setPsicologica({...psicologica, idProfesional: paciente[registro].idProfesional, nombreCompletoProfesional: paciente[registro].nombreCompletoProfesional, fechaCreacion: paciente[registro].fechaCreacion.seconds? new Date(paciente[registro].fechaCreacion.seconds * 1000) : new Date(paciente[registro].fechaCreacion)});
	}, []);

	const classes = useStyles();
	return (
		<>
			<Headers setPsicologica={setPsicologica} psicologica={psicologica} />
			<Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Problematica
							setPsicologica={setPsicologica}
							psicologica={psicologica}
              paciente = {editar ? paciente[registro] : false}
						/>
					</Grid>

					<Grid item xs={12}>
						<Evolucion
							setPsicologica={setPsicologica}
							psicologica={psicologica}
              paciente = {editar ? paciente[registro] : false}
						/>
					</Grid>

					<Grid item xs={12}>
						<Interconsultas
							setPsicologica={setPsicologica}
							psicologica={psicologica}
              paciente = {editar ? paciente[registro] : false}
						/>
					</Grid>

					<Grid
						container
						item
						xs={12}
						spacing={2}
						style={{ alignItems: 'center' }}
					>
						<Alerta error={error} handleClick={handleClick} />
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default EvolucionPsicologica;
