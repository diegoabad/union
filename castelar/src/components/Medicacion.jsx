import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMusicoterapia } from '../redux/actions/index';

import Horarios from './medicacion/Horarios.jsx'
import Headers from './medicacion/Headers.jsx'
import Alerta from './admision1/componente/Alerta.jsx';
import MedicacionActual from './medicacion/MedicacionActual.jsx'

import {cont_medicacion} from './controls/controlMedicacion.js'

import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core'

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
    }
    
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

const addTerapias = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, { medicacion: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};

const Medicacion = ({setOpenFiliatorio, registro}) => {

  const [medicacion, setMedicacion] = React.useState('')
  const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
  const filiatorio = useSelector((state) => state.pacienteActual.filiatorios);
	const paciente = useSelector((state) => state.pacienteActual.medicacion);
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
		const control = cont_medicacion(medicacion);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
      let data
      if (!editar){
		    data = [medicacion, ...paciente ];
      } else {
        data = paciente.map((item, index) => {
          if (index === registro) {
            return medicacion
          } else {
            return item
          }
        })
      }

      const result = await addTerapias(data, dni);
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getMusicoterapia(data, 'medicacion' ));
				//Cerramos el modal, se actualiza el redux, notificacion de envio correcto
			} else {
				//notificacion de envio incorrecto
			}
			setError('');
		}
	};

  
  useEffect(() => {
    if (!editar) setMedicacion({...medicacion, ...extraData});
    else setMedicacion({...medicacion, idProfesional: paciente[registro].idProfesional, nombreCompletoProfesional: paciente[registro].nombreCompletoProfesional, fechaCreacion: paciente[registro].fechaCreacion.seconds? new Date(paciente[registro].fechaCreacion.seconds * 1000) : new Date(paciente[registro].fechaCreacion)});
	}, []);


  const classes = useStyles();
  return (
  <>
    <Headers />
    <Paper className={classes.pagecontent} spacing={2}>
      <Grid container spacing={2}>

      {paciente.length > 0 && <Grid item xs={12}>
        <MedicacionActual medicacion={paciente} medico = {userActual} filiatorio = {filiatorio}/>
      </Grid>}

      <Grid item xs={12}>
        <Horarios medicacion={medicacion} setMedicacion ={setMedicacion} paciente = {editar ? paciente[registro] : false}/>
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

export default Medicacion