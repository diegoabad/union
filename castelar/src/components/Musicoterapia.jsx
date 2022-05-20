import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMusicoterapia } from '../redux/actions/index';

import Encabezado from './headers/Headers.jsx'
import Evolucion from './musicoterapia/Musicoterapia.jsx'
import Alerta from './admision1/componente/Alerta.jsx';

import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { cont_terapias } from './controls/controlTerapias';

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

const addTerapias = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { musicoterapia: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const Musicoterapia = ({setOpenFiliatorio, registro}) => {

  const [terapias, setTerapias] = React.useState('');
	const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
	const paciente = useSelector((state) => state.pacienteActual.musicoterapia);
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
		const control = cont_terapias(terapias);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
      let data
      if (!editar){
		    data = [terapias, ...paciente ];
      } else {
        data = paciente.map((item, index) => {
          if (index === registro) {
            return terapias
          } else {
            return item
          }
        })
      }

			const result = await addTerapias(data, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getMusicoterapia(data, 'musicoterapia' ));
				//Cerramos el modal, se actualiza el redux, notificacion de envio correcto
			} else {
				//notificacion de envio incorrecto
			}
			setError('');
		}
	};

	useEffect(() => {
    if (!editar) setTerapias({...terapias, ...extraData});
    else setTerapias({...terapias, idProfesional: paciente[registro].idProfesional, nombreCompletoProfesional: paciente[registro].nombreCompletoProfesional, fechaCreacion: paciente[registro].fechaCreacion.seconds? new Date(paciente[registro].fechaCreacion.seconds * 1000) : new Date(paciente[registro].fechaCreacion)});
	}, []);

  console.log(terapias)
  
	const classes = useStyles();

  return (
    <>
    <Encabezado titulo = 'Musicoterapia' />
    <Paper className={classes.pagecontent} spacing={2}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Evolucion terapias = {terapias} setTerapias = {setTerapias} paciente = {editar ? paciente[registro] : false}/>
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
  )
}

export default Musicoterapia