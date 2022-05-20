import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPsiquiatrica } from '../redux/actions/index';

import Headers from './evolucionpsiquiatrica/Headers';
import Interconsultas from './evolucionpsiquiatrica/Interconsultas';
import Evolucion from './evolucionpsiquiatrica/Evolucion';
import Alerta from './admision1/componente/Alerta.jsx';

import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import { cont_psiquiatrica } from './controls/contPsiquiatrica';

import { Paper, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
		backgroundColor: '#FFFFFF',
	},
}));

const addPsiquiatrica = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { psiquiatria: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const EvolucionPsiquiatrica = ({ setOpenFiliatorio, registro }) => {
	const [psiquiatria, setPsiquiatria] = React.useState({});
	const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
	const paciente = useSelector((state) => state.pacienteActual.psiquiatria);
  const editar = useSelector((state) => state.editarFiliatorio)
	const userActual = useSelector((state) => state.usuarioActual);
	const [error, setError] = React.useState('');
	const dispatch = useDispatch();
	const extraData = {
		idProfesional: userActual.uid,
		nombreCompletoProfesional: `${userActual.name} ${userActual.lastName}`,
		fechaCreacion: new Date(),
	};

	useEffect(() => {
    if (!editar) setPsiquiatria({...psiquiatria, ...extraData});
    else setPsiquiatria({...psiquiatria, idProfesional: paciente[registro].idProfesional, nombreCompletoProfesional: paciente[registro].nombreCompletoProfesional, fechaCreacion: paciente[registro].fechaCreacion.seconds? new Date(paciente[registro].fechaCreacion.seconds * 1000) : new Date(paciente[registro].fechaCreacion)});
	}, []);

	const handleClick = async () => {
		const control = cont_psiquiatrica(psiquiatria);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
			let data
      if (!editar){
		    data = [psiquiatria,...paciente ];
      } else {
        data = paciente.map((item, index) => {
          if (index === registro) {
            return psiquiatria
          } else {
            return item
          }
        })
      }
			const result = await addPsiquiatrica(data, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getPsiquiatrica(psiquiatria));
				//Cerramos el modal, se actualiza el redux, notificacion de envio correcto
			} else {
				//notificacion de envio incorrecto
			}
			setError('');
		}
	};

	const classes = useStyles();
	return (
		<>
			<Headers setPsiquiatria={setPsiquiatria} psiquiatria={psiquiatria} />
			<Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Evolucion
							setPsiquiatria={setPsiquiatria}
							psiquiatria={psiquiatria}
              paciente = {editar ? paciente[registro] : false}
						/>
					</Grid>

					<Grid item xs={12}>
						<Interconsultas
							setPsiquiatria={setPsiquiatria}
							psiquiatria={psiquiatria}
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

export default EvolucionPsiquiatrica;
