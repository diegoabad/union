import React, { useEffect } from 'react'

import { getMusicoterapia } from '../redux/actions/index';

import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Header from './admisionpsicologia/Header.jsx'
import Admision from './admisionpsicologia/Admision.jsx'
import Diagnostico from './admision/DiagnosticoActual.jsx'
import Tratamiento from './admisionpsicologia/Tratamiento.jsx'
import Alerta from './admision1/componente/Alerta.jsx';

import { db } from '../firebase/credentials';
import { doc, updateDoc } from 'firebase/firestore';

import data from './datos/enfermedades.json';
import { admision } from './controls/admisionPsico'

import { postToken } from '../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';

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

const addTerapias = async (payload, id) => {
	try {
		const ref = doc(db, 'pacientes', id);
		await updateDoc(ref, {admisiones: payload });
		console.log('Document written with ID: ', ref.id);
		return true;
	} catch (e) {
		console.error('Error adding document: ', e);
		return false;
	}
};


const AdmisiónPsicologia = ({setOpenFiliatorio, registro}) => {

  const dispatch = useDispatch();
  const [nombre, setNombre] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [error, setError] = React.useState('');
  const dni = useSelector((state) => state.pacienteActual.filiatorios.dni);
  const paciente = useSelector((state) => state.pacienteActual.admisiones);
  const editar = useSelector((state) => state.editarFiliatorio)
  const [enfermedades, setEnfermedades] = React.useState([])
  const userActual = useSelector((state) => state.usuarioActual);
	const extraData = {
		idProfesional: userActual.uid,
		nombreCompletoProfesional: `${userActual.name} ${userActual.lastName}`,
		fechaCreacion: new Date(),
    type: 'admision_psicologica',
	};
	useEffect(() => {
		setEstado(extraData);
		dispatch(postToken());
		setEnfermedades(data);
	}, []);

  const handleClick = async () => {
		const control = admision(estado);
		if (control.mensaje !== 'alta admitida') {
			setError(control.mensaje);
		} else {
      let data
      if (!editar){
		    data = [estado, ...paciente ];
      } else {
        data = paciente.map((item, index) => {
          if (index === registro) {
            return estado
          } else {
            return item
          }
        })
      }

      console.log(estado)

			const result = await addTerapias(data, dni, 'admisiones');
			if (result) {
				setOpenFiliatorio(false);
				dispatch(getMusicoterapia(data, 'admisiones'));
				//Cerramos el modal, se actualiza el redux, notificacion de envio correcto
			} else {
				//notificacion de envio incorrecto
			}
			setError('');
		}
	};

  useEffect(() => {
    if (!editar) setEstado({...estado, ...extraData});
    else setEstado({...estado, ...paciente[registro]});
	}, []);

  console.log(estado)

  const classes = useStyles();

  return (
    <>
      <Header />
      <Paper className={classes.pagecontent} spacing={2}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
            <Admision estado = {estado} setEstado = {setEstado} paciente = {editar ? paciente[registro] : false}/>
          </Grid>  

          <Grid item xs={12}>
            <Diagnostico 
            setNombre={setNombre}
            enfermedades={enfermedades}
            setEnfermedades={setEnfermedades}
            mostrar = {false}
            data={data}
            estado={estado}
            setEstado={setEstado}
            paciente = {editar ? paciente[registro] : false}
            />
          </Grid>

          <Grid item xs={12}>
            <Tratamiento estado = {estado} setEstado = {setEstado} paciente = {editar ? paciente[registro] : false} control = {editar ? paciente[registro].consultas : 5}/>
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

export default AdmisiónPsicologia