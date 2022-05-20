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
import { withStyles } from '@material-ui/core/styles';
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
  buton:{
    
      backgroundColor: 'rgb(32, 135, 252)',
      color: 'white',
      'buton-hover': {
        backgroundColor: 'rgb(2, 154, 255)',
      }
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

const StyledButton = withStyles({
  root: {
    background: 'rgb(32, 135, 252)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    fontSize: '1.5rem',
    width: 80,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(32, 135, 252, .3)',  
    '&:hover': {
      backgroundColor: 'rgb(2, 154, 255)',
    }
  },
  label: {
    textTransform: 'capitalize',
  },

})(Button);

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

const Admision = ({ setOpenFiliatorio, registro }) => {
	const dispatch = useDispatch();

	const admision = useSelector((state) => state.pacienteActual.admision);
	const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
  const editar = useSelector((state) => state.editarFiliatorio);
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
      let arrayAdmision = [];
      if (!editar){
		    arrayAdmision = [estado,...admision];
      } else {
        arrayAdmision = admision.map((item, index) => {
          if (index === registro) {
            return estado
          } else {
            return item
          }
        })
      }
    
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

  useEffect(() => {
    if (!editar) setEstado({...estado, ...extraData});
    else setEstado({...estado, idProfesional: admision[registro].idProfesional, nombreCompletoProfesional: admision[registro].nombreCompletoProfesional, fechaCreacion: admision[registro].fechaCreacion.seconds? new Date(admision[registro].fechaCreacion.seconds * 1000) : new Date(admision[registro].fechaCreacion)});
	}, []);

	const classes = useStyles();
	return (
		<>
			<Headers estado={estado} setEstado={setEstado} />
			<Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<MotivoConsulta estado={estado} setEstado={setEstado} paciente = {editar ? admision[registro] : false}/>
					</Grid>

					<Grid item xs={12}>
						<AntecedentesTrastornoActual
							estado={estado}
							setEstado={setEstado}
						/>
					</Grid>

					<Grid item xs={12}>
						<Familiares estado={estado} setEstado={setEstado} paciente = {editar ? admision[registro] : false}/>
					</Grid>

					<Grid item xs={12}>
						<AntecedentesPersonales estado={estado} setEstado={setEstado} paciente = {editar ? admision[registro] : false}/>
					</Grid>

					<Grid item xs={12}>
						<SucesosTraumaticos estado={estado} setEstado={setEstado} paciente = {editar ? admision[registro] : false}/>
					</Grid>

					<Grid item xs={12}>
						<Psicodesarrollo estado={estado} setEstado={setEstado} paciente = {editar ? admision[registro] : false}/>
					</Grid>

					<Grid item xs={12}>
						<ActividadOcupacional estado={estado} setEstado={setEstado} paciente = {editar ? admision[registro] : false}/>
					</Grid>

					<Grid item xs={12}>
						<DiagnosticoActual
							nombre={nombre}
							setNombre={setNombre}
							enfermedades={enfermedades}
							setEnfermedades={setEnfermedades}
              mostrar = {true}
							data={data}
							estado={estado}
							setEstado={setEstado}
              paciente = {editar ? admision[registro] : false}
						/>
					</Grid>

					<Grid item xs={12}>
						<Perentoreidad estado={estado} setEstado={setEstado} paciente = {editar ? admision[registro] : false}/>
					</Grid>

					<Grid item xs={12} style={{ alignItems: 'center', textAlign: 'center' }}>
						{error !== '' && (
							<Grid item xs={12}>
								<Paper>
									<Alert severity='error' className={classes.root}>
										{error}
									</Alert>
								</Paper>
							</Grid>
						)}
						<StyledButton

							onClick={handleClick}
						>
							Guardar
						</StyledButton>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default Admision;
