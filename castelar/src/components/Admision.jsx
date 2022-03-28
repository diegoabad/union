import React, { useEffect } from 'react';

import Headers from './admision/Headers';
import MotivoConsulta from './admision/MotivoConsulta';
import Familiares from './admision/Familiares.jsx';
import AntecedentesPersonales from './admision/Antecedentes_personales';
import SucesosTraumaticos from './admision/Sucesos_traumaticos.jsx';
import Psicodesarrollo from './admision/Psicodesarrollo.jsx';
import AntecedentesTrastornoActual from './admision/Antecedentes_trastorno_actual';
import DiagnosticoActual from './admision/DiagnosticoActual';
import Perentoreidad from './admision/Perentoreidad.jsx';
import ActividadOcupacional from './admision/ActividadOcupacional';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import data from './datos/enfermedades.json';

import { postToken, getAdmision } from '../redux/actions/index';
import { useDispatch } from 'react-redux';

import '../App.css';
import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import { cont_admision } from './controls/controlAdmision';

import { useSelector } from 'react-redux';

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

const addAdmision = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { admision: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const Admision = ({ setOpenFiliatorio }) => {
	const dispatch = useDispatch();

	const admision = useSelector((state) => state.pacienteActual.admision);
	const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
	const [error, setError] = React.useState('');
	const [nombre, setNombre] = React.useState('');
	const [enfermedades, setEnfermedades] = React.useState([]);
	const [estado, setEstado] = React.useState('');
	const userActual = useSelector((state) => state.usuarioActual);
	const extraData = {
		idProfesional: userActual.uid,
		nombreCompletoProfesional: `${userActual.name} ${userActual.lastName}`,
		fechaCreacion: new Date(),
	};
	useEffect(() => {
		setEstado(extraData);
		dispatch(postToken());
		setEnfermedades(data);
	}, []);

	const handleClick = async () => {
		const resultado = cont_admision(estado);

		if (resultado.mensaje !== 'alta admitida') {
			setError(resultado.mensaje);
		} else {
			const arrayAdmision = [...admision, estado];
			const result = await addAdmision(arrayAdmision, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getAdmision(arrayAdmision));
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
			<Headers estado={estado} setEstado={setEstado} />
			<Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<MotivoConsulta estado={estado} setEstado={setEstado} />
					</Grid>

					<Grid item xs={12}>
						<AntecedentesTrastornoActual
							estado={estado}
							setEstado={setEstado}
						/>
					</Grid>

					<Grid item xs={12}>
						<Familiares estado={estado} setEstado={setEstado} />
					</Grid>

					<Grid item xs={12}>
						<AntecedentesPersonales estado={estado} setEstado={setEstado} />
					</Grid>

					<Grid item xs={12}>
						<SucesosTraumaticos estado={estado} setEstado={setEstado} />
					</Grid>

					<Grid item xs={12}>
						<Psicodesarrollo estado={estado} setEstado={setEstado} />
					</Grid>

					<Grid item xs={12}>
						<ActividadOcupacional estado={estado} setEstado={setEstado} />
					</Grid>

					<Grid item xs={12}>
						<DiagnosticoActual
							nombre={nombre}
							setNombre={setNombre}
							enfermedades={enfermedades}
							setEnfermedades={setEnfermedades}
							data={data}
							estado={estado}
							setEstado={setEstado}
						/>
					</Grid>

					<Grid item xs={12}>
						<Perentoreidad estado={estado} setEstado={setEstado} />
					</Grid>

					<Grid item xs={12}>
						{error !== '' && (
							<Grid item xs={12}>
								<Paper>
									<Alert severity='error' className={classes.root}>
										{error}
									</Alert>
								</Paper>
							</Grid>
						)}
						<Button
							size='large'
							color='primary'
							variant='contained'
							onClick={handleClick}
						>
							Guardar
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default Admision;
