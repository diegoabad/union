import React, { useEffect } from 'react';
import Headers from './Headers';
import Filiatorios from './filiatorios/Filiatorios.jsx';
import Domicilio from './filiatorios/Domicilio.jsx';
import Social from './filiatorios/Social.jsx';
import Tratamiento from './filiatorios/Tratamiento.jsx';
import Judicial from './filiatorios/Judicial.jsx';
import Acompaniante from './filiatorios/Acompañante.jsx';
import Referencia from './filiatorios/Referencia.jsx';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import '../App.css';
import { db } from '../firebase/credentials';
import { doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
import { getFormulario, editFiliatorios } from '../redux/actions/index';
import { controles } from './controls/controlFiliatorios';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFormControl-root': {
			margin: theme.spacing(1),
			width: '100%',
			minWidth: '250px',
		},
		'& .MuiGrid-root': {
			display: 'flex',
			margin: theme.spacing(1),
			width: '100%',
		},
	},
	pagecontent: {
		margin: theme.spacing(5),
		padding: theme.spacing(3),
		width: '100%',
		alignItems: 'strech',
		justifyContent: 'space-between',
		backgroundColor: '#F0FFFF',
	},
}));

const addFiliatorios = async (
	filiatorios,
	historial,
	setOpenFiliatorio,
	setDni,
	search
) => {
	try {
		const docRef = await setDoc(doc(db, 'pacientes', filiatorios.dni), {
			filiatorios,
			admision: [],
			semiologia: [],
			psiquiatria: [],
			psicologia: [],
			nutricion: [],
			medicacion: [],
			ingreso: [],
			musicoterapia: [],
			ed_fisica: [],
			area_social: [],
			ocupacional: [],
			contextual: [],
			otras: [],
		});
		await setDoc(doc(db, 'historial', 'ctrl'), {
			numero: historial,
		});

		if (setOpenFiliatorio && setDni && search) {
			setOpenFiliatorio(false);
		} else {
			return true;
		}
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const edit_Filiatorios = async (datos, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		const flag = await updateDoc(ref, { filiatorios: datos });

		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const Formdata = (props) => {
	const filiatorios = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);
	const [error, setError] = React.useState('');
	const [historial, setHistorial] = React.useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { setOpenFiliatorio, setDni, search } = props;

	useEffect(async () => {
		if (!editarFiliatorio) {
			const referencia = doc(db, 'historial', 'ctrl');
			const querySnapshot = await getDoc(referencia);
			if (querySnapshot.exists()) setHistorial(querySnapshot.data().numero + 1);
			else setHistorial(1);
		}
	}, []);

	const handleClick = async (evt) => {
		evt.preventDefault();
		const resultado = controles(filiatorios);

		if (resultado.mensaje !== 'alta admitida') {
			setError(resultado.mensaje);
		} else {
			const respuesta = await addFiliatorios(
				filiatorios,
				historial,
				setOpenFiliatorio,
				setDni,
				search
			);
			setError('');
			if (respuesta) {
				console.log('formdata: ' + filiatorios);
				dispatch(getFormulario(filiatorios));
				navigate('/paciente');
			}
		}
	};

	const handleEdit = async () => {
		const resultado = controles(filiatorios);

		if (resultado.mensaje !== 'alta admitida') {
			setError(resultado.mensaje);
		} else {
			const bool = await edit_Filiatorios(filiatorios, filiatorios.dni);
			if (bool) {
				dispatch(getFormulario(filiatorios));
				dispatch(editFiliatorios(false));
				setOpenFiliatorio(false);
			}
			setError('');
		}
	};

	const classes = useStyles();
	return (
		<>
			{editarFiliatorio ? (
				<Headers fecha={new Date().toLocaleDateString('en-US')} editar={true} />
			) : (
				<Headers editar={false} />
			)}
			<Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<>
						<Grid item md={12}>
							<Filiatorios historial={historial} />
						</Grid>

						<Grid item xs={12}>
							<Domicilio />
						</Grid>

						<Grid item xs={12}>
							<Social />
						</Grid>

						<Grid item xs={12}>
							<Tratamiento />
						</Grid>

						<Grid item xs={12}>
							<Judicial />
						</Grid>

						<Grid item xs={12}>
							<Acompaniante />
						</Grid>

						<Grid item xs={12}>
							<Referencia />
						</Grid>
					</>

					{error !== '' && (
						<Grid item xs={12}>
							{' '}
							<Paper>
								<Alert severity='error'>{error}</Alert>
							</Paper>
						</Grid>
					)}
					{!editarFiliatorio ? (
						<Grid
							item
							xs={12}
							style={{ alignItems: 'center', textAlign: 'center' }}
						>
							<Button
								size='large'
								color='primary'
								variant='contained'
								onClick={(evt) => handleClick(evt)}
							>
								Guardar
							</Button>{' '}
						</Grid>
					) : (
						<Grid
							item
							xs={12}
							style={{ alignItems: 'center', textAlign: 'center' }}
						>
							{' '}
							<Button
								size='large'
								color='primary'
								variant='contained'
								onClick={handleEdit}
							>
								Editar
							</Button>{' '}
						</Grid>
					)}
				</Grid>
			</Paper>
		</>
	);
};

export default Formdata;
