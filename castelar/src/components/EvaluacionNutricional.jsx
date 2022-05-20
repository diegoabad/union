import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {getNutricional} from '../redux/actions/index'

import Headers from './evaluacion_nutricional/headers'
import Diagnostico from './evaluacion_nutricional/Diagnostico';
import ValoracionAntropometrica from './evaluacion_nutricional/ValoracionAntropometrica';
import Alerta from './admision1/componente/Alerta.jsx';

import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import {Paper, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import {cont_nutricional} from './controls/controlNutricional'

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
    backgroundColor: '#FFFFFF',
  },

}))

const addNutricional = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { nutricion: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const EvaluacionNutricional = ({ setOpenFiliatorio, registro}) => {

  const [nutricional, setNutricional] = React.useState('')
  const [error, setError] = React.useState('')
  const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
	const paciente = useSelector((state) => state.pacienteActual.nutricion);
  const editar = useSelector((state) => state.editarFiliatorio)
  const userActual = useSelector((state) => state.usuarioActual);
  const dispatch = useDispatch();

  const extraData = {
		idProfesional: userActual.uid,
		nombreCompletoProfesional: `${userActual.name} ${userActual.lastName}`,
	};

	useEffect(() => {
    if (!editar) setNutricional({...nutricional, ...extraData});
    else setNutricional({...nutricional, idProfesional: paciente[registro].idProfesional, nombreCompletoProfesional: paciente[registro].nombreCompletoProfesional, fechaCreacion: paciente[registro].fechaCreacion.seconds? new Date(paciente[registro].fechaCreacion.seconds * 1000) : new Date(paciente[registro].fechaCreacion)});
	}, []);


  const handleClick = async () => {
		const control = cont_nutricional(nutricional);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
			let data
      if (!editar){
		    data = [nutricional,...paciente ];
      } else {
        data = paciente.map((item, index) => {
          if (index === registro) {
            return nutricional
          } else {
            return item
          }
        })
      }
			const result = await addNutricional(data, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getNutricional(data));
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
    <Headers nutricional = {nutricional} setNutricional ={setNutricional}/>
    <Paper className={classes.pagecontent} spacing = {2}>

      <Grid container spacing = {2} >

        <Grid item xs = {12} >
          <Diagnostico nutricional = {nutricional} setNutricional ={setNutricional} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid item xs = {12} >
          <ValoracionAntropometrica nutricional = {nutricional} setNutricional ={setNutricional} paciente = {editar ? paciente[registro] : false}/>
        </Grid>

        <Grid container item xs={12} spacing={2} style={{alignItems: 'center'}}>
					<Alerta error={error} handleClick={handleClick} />
				</Grid>

      </Grid>
    </Paper>
  </>
  )
}

export default EvaluacionNutricional