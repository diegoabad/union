import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

import data from  './datos/enfermedades.json'

import { postToken, getAdmision } from '../redux/actions/index';
import { useDispatch } from 'react-redux';

import '../App.css';
import { db } from '../firebase/credentials';
import { collection, addDoc } from 'firebase/firestore';

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

const addAdmision = async (payload) => {
	try {
		const docRef = await addDoc(collection(db, 'admision'), payload);

		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};
const Admision = () => {
	const dispatch = useDispatch();
	const { dni } = useParams();

	const admision = useSelector((state) => state.admision);
	const [error, setError] = React.useState('');
	const [nombre, setNombre] = React.useState('');
	const [enfermedades, setEnfermedades] = React.useState([]);

	useEffect(() => {
		dispatch(getAdmision({ dni: dni }));
		dispatch(postToken());
		setEnfermedades(data);
	}, [dispatch, dni]);

	const handleClick = async () => {
		const resultado = cont_admision(admision);

		if (resultado.mensaje !== 'alta admitida') {
			setError(resultado.mensaje);
		} else {
			await addAdmision(admision);
			setError('');
		}
	};

	const classes = useStyles();
	return (
		<>
			<Headers />
			<Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<MotivoConsulta />
					</Grid>

					<Grid item xs={12}>
						<AntecedentesTrastornoActual />
					</Grid>

					<Grid item xs={12}>
						<Familiares />
					</Grid>

					<Grid item xs={12}>
						<AntecedentesPersonales />
					</Grid>

					<Grid item xs={12}>
						<SucesosTraumaticos />
					</Grid>

					<Grid item xs={12}>
						<Psicodesarrollo />
					</Grid>

					<Grid item xs={12}>
						<ActividadOcupacional />
					</Grid>

					<Grid item xs={12}>
						<DiagnosticoActual
							nombre={nombre}
							setNombre={setNombre}
							enfermedades={enfermedades}
							setEnfermedades={setEnfermedades}
							data={data}
						/>
					</Grid>

					<Grid item xs={12}>
						<Perentoreidad />
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
