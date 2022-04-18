import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AspectoFisico from './admision1/AspectoFisico.jsx';
import Facies from './admision1/Facies.jsx';
import AspectoPsiquico from './admision1/AspectoPsiquico.jsx';
import Lenguaje from './admision1/Lenguaje.jsx';
import ActitudPsiquica from './admision1/ActitudPsiquica.jsx';
import Actividad from './admision1/Actividad.jsx';
import Marcha from './admision1/Marcha.jsx';
import Sexualidad from './admision1/Sexualidad.jsx';
import Conciencia from './admision1/Conciencia.jsx';
import Orientacion from './admision1/orientacion.jsx';
import Atencion from './admision1/Atencion.jsx';
import Memoria from './admision1/Memoria.jsx';
import Pensamiento from './admision1/Pensamiento.jsx';
import Ideacion from './admision1/Ideacion.jsx';
import Sensopercepcion from './admision1/Sensopercepcion.jsx';
import Afectividad from './admision1/Afectividad.jsx';
import Inteligencia from './admision1/Inteligencia.jsx';
import Juicio from './admision1/Juicio.jsx';
import Suenio from './admision1/Sueño.jsx';
import Orexia from './admision1/Orexia.jsx';
import Header from './admision1/Header.jsx';
import Alerta from './admision1/componente/Alerta.jsx';
import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import { cont_semiologica } from './controls/controlSemiologica';

import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getSemiologica } from '../redux/actions/index';
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

const addSemiologica = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { semiologia: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const Admision1 = ({ setOpenFiliatorio, registro }) => {
	const dispatch = useDispatch();
	const [error, setError] = React.useState('');
  const editar = useSelector((state) => state.editarFiliatorio)
	const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
	const paciente = useSelector((state) => state.pacienteActual.semiologia);
	const userActual = useSelector((state) => state.usuarioActual);
	const [semiologica, setSemiologica] = React.useState({});
	const extraData = {
		idProfesional: userActual.uid,
		nombreCompletoProfesional: `${userActual.name} ${userActual.lastName}`,
		fechaCreacion: new Date(),
	};

	useEffect(() => {
    if (!editar) setSemiologica({...semiologica, ...extraData});
    else setSemiologica({...semiologica, idProfesional: paciente[registro].idProfesional, nombreCompletoProfesional: paciente[registro].nombreCompletoProfesional, fechaCreacion: new Date(paciente[registro].fechaCreacion)});
	}, []);
  
	const handleClick = async () => {
		const control = cont_semiologica(semiologica);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
			const data = [semiologica, ...paciente ];
			const result = await addSemiologica(data, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getSemiologica(semiologica));
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
			<Header setSemiologica={setSemiologica} semiologica={semiologica} paciente={editar ? paciente[registro] : false}/>
			<Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<AspectoFisico
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Facies setSemiologica={setSemiologica} semiologica={semiologica} paciente = {editar ? paciente[registro] : false}/>
					</Grid>
					<Grid item xs={12}>
						<AspectoPsiquico
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Lenguaje
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<ActitudPsiquica
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Actividad
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Marcha setSemiologica={setSemiologica} semiologica={semiologica} paciente={editar ? paciente[registro] : false}/>
					</Grid>
					<Grid item xs={12}>
						<Sexualidad
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Conciencia
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Orientacion
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Atencion
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Memoria
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Pensamiento
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Ideacion
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Sensopercepcion
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Afectividad
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Inteligencia
							setSemiologica={setSemiologica}
							semiologica={semiologica}
              paciente={editar ? paciente[registro] : false}
						/>
					</Grid>
					<Grid item xs={12}>
						<Juicio setSemiologica={setSemiologica} semiologica={semiologica} paciente={editar ? paciente[registro] : false}/>
					</Grid>
					<Grid item xs={12}>
						<Suenio setSemiologica={setSemiologica} semiologica={semiologica} paciente={editar ? paciente[registro] : false}/>
					</Grid>
					<Grid item xs={12}>
						<Orexia setSemiologica={setSemiologica} semiologica={semiologica} paciente={editar ? paciente[registro] : false}/>
					</Grid>

					<Grid container item xs={12} spacing={2}>
						<Alerta error={error} handleClick={handleClick} />
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default Admision1;
