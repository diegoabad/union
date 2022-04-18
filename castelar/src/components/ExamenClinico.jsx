import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {getClinico} from '../redux/actions/index'

import { Paper, Grid } from '@material-ui/core'

import SignosVitales from './examen_ingreso/SignosVitales.jsx'
import PielyMucosas from './examen_ingreso/PielyMucosas.jsx'
import Cardiologico from './examen_ingreso/Cardiologico.jsx'
import Respiratorio from './examen_ingreso/Respiratorio.jsx'
import Abdominal from './examen_ingreso/Abdominal.jsx'
import HabitosDomesticos from './examen_ingreso/HabitosDomesticos.jsx'
import SistemaNervioso from './examen_ingreso/SistemaNervioso.jsx'
import MedicacionIngreso from './examen_ingreso/MedicacionIngreso.jsx'
import Headers from './examen_ingreso/Headers.jsx'
import Alerta from './admision1/componente/Alerta.jsx';
import {cont_clinico} from './controls/contClinico'

import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

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
      fontSize: '1.5rem'
    },
    
  },
  pagecontent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    width: '90%',
    alignItems: 'strech',
    justifyContent: 'space-between',
    backgroundColor: '#F0FFFF',
  },

}))

const addClinico = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { ingreso: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const ExamenClinico = ({ setOpenFiliatorio, registro }) => {

  const paciente = useSelector((state) => state.pacienteActual.ingreso);
	const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
  const userActual = useSelector((state) => state.usuarioActual);
  const editar = useSelector((state) => state.editarFiliatorio)
  const [ingreso, setIngreso] = React.useState('')
  const [error, setError] = React.useState('')
  const dispatch = useDispatch();

  const extraData = {
		idProfesional: userActual.uid,
		nombreCompletoProfesional: `${userActual.name} ${userActual.lastName}`,
    fechaCreacion: new Date(),
	};

	useEffect(() => {
    if (!editar) setIngreso({...ingreso, ...extraData});
    else setIngreso({...ingreso, idProfesional: paciente[registro].idProfesional, nombreCompletoProfesional: paciente[registro].nombreCompletoProfesional, fechaCreacion: paciente[registro].fechaCreacion.seconds? new Date(paciente[registro].fechaCreacion.seconds * 1000) : new Date(paciente[registro].fechaCreacion)});
	}, []);

  const handleClick = async () => {
		const control = cont_clinico(ingreso);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
			let data
      if (!editar){
		    data = [ingreso,...paciente ];
      } else {
        data = paciente.map((item, index) => {
          if (index === registro) {
            return ingreso
          } else {
            return item
          }
        })
      }
			const result = await addClinico(data, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getClinico(data));
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
    <Headers />
    <Paper className={classes.pagecontent} spacing = {2}>

      <Grid container spacing = {2} >

        <Grid item xs = {12} >
          <SignosVitales ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <PielyMucosas ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <Cardiologico ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <Respiratorio ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <Abdominal ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <HabitosDomesticos ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <SistemaNervioso ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <MedicacionIngreso ingreso={ingreso} setIngreso={setIngreso} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid container item xs={12} spacing={2} style={{alignItems: 'center'}}>
					<Alerta error={error} handleClick={handleClick} />
				</Grid>

      </Grid>
    </Paper>
  </>
  )
}

export default ExamenClinico