import React, {useEffect} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid,  Typography, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'

import { useDispatch, useSelector } from 'react-redux';
import { getFormulario } from '../../redux/actions/index'


const useStyles = makeStyles((theme) => ({
  root: {

      '& .MuiGrid-root': {
        display: 'flex',
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2),
        width: '100%',   
        backgroundColor: '#FAFAFA'
      },
    '& .MuiTextField-root':{
      width: '300px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgba(32, 135, 252, 0.1)',
    },
    '& .MuiFormLabel-root': {
      fontSize: 'medium',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiTypography-body1': {
      fontSize: '1.5rem',
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
}));

const Acompañante = (props) => {
  
	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);

  const initialStateValues= {
    nombre_ac: '',
    apellido_ac: '',
    dni_ac: '',
    rel_ac: '',
    calle_ac: '',
    numero_ac:'',
    localidad_ac: '',
    cod_post_ac: '',
    provincia_ac: '',
    tel_ac: '',
    email_ac: '',
  }



  const [values, setValues] = React.useState(initialStateValues);


	useEffect(() => {
		try {
			if (editarFiliatorio) {
				setValues({
					nombre_ac: paciente.nombre_ac,
					apellido_ac: paciente.apellido_ac,
					dni_ac: paciente.dni_ac,
					rel_ac: paciente.rel_ac,
					calle_ac: paciente.calle_ac,
					numero_ac: paciente.numero_ac,
					localidad_ac: paciente.localidad_ac,
					cod_post_ac: paciente.cod_post_ac,
					provincia_ac: paciente.provincia_ac,
					tel_ac: paciente.tel_ac,
					email_ac: paciente.email_ac,
				});
			}
		} catch (error) {
			setValues({
				nombre_ac: '',
				apellido_ac: '',
				dni_ac: '',
				rel_ac: '',
				calle_ac: '',
				numero_ac: '',
				localidad_ac: '',
				cod_post_ac: '',
				provincia_ac: '',
				tel_ac: '',
				email_ac: '',
			});
		}
	}, []);

  useEffect(() => {dispatch(getFormulario(values ))} , [values])
  
  const handleChange = (event) => {

    const { name, value } = event.target;
      
      setValues({ ...values, [name]: value }); 
}
  

  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>
      
        <Subtitulo titulo = 'Acompañante' />
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled"  label={ "Nombre"} name="nombre_ac" value={values.nombre_ac} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error={(values.nombre_ac !== '' &&values.apellido_ac === "") ? true : false} label={(values.nombre_ac !== '' &&values.apellido_ac === "") ? "Apellido es requerido" : "Apellido"} name="apellido_ac" value={values.apellido_ac} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error = {((values.nombre_ac !== '') && ((values.dni_ac === 0 ) || (values.dni_ac < 1000000)))? true : false } label={((values.nombre_ac !== '') && ((values.dni_ac === 0 ) || (values.dni_ac < 1000000)))? "ingrese un dni válido" : "DNI" } name="dni_ac" value={values.dni_ac} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error = {(values.nombre_ac && values.rel_ac === "" )? true : false } required = { true } label={(values.nombre_ac && values.rel_ac === "" ) ? "Relación requerida" : "Relación con Paciente" } name="rel_ac" value={values.rel_ac} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} style = {{margin: "10px"}}>
            <Typography variant="h5" component="div"> Domicilio </Typography>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error = {(values.nombre_ac !== '' && values.calle_ac === "") ? true : false } required = { true } label={(values.nombre_ac !== '' && values.calle_ac === "") ? "calle requerida" : "calle" } name="calle_ac" value={values.calle_ac} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled"  label={"número"} name="numero_ac" value={values.numero_ac} type="number" onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} variant="filled" error = {(values.nombre_ac !== '' && values.localidad_ac === "" )? true : false } label={(values.nombre_ac !== '' && values.localidad_ac === "" ) ? "localidad requerida" : "localidad" } name="localidad_ac" value={values.localidad_ac} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} error = {(values.nombre_ac && values.cod_post_ac === "") ? true : false } variant="filled" label= {(values.nombre_ac && values.cod_post_ac === "") ? "C.P requerido" :"C.P." } name="cod_post_ac" value={values.cod_post_ac} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth error = { values.nombre_ac !== '' && values.provincia_ac === "" ? true : false } variant="filled" label= {values.nombre_ac !== '' && values.provincia_ac === "" ? "provincia requerida" : "provincia"} name="provincia_ac" value={values.provincia_ac} required = {true} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" label="telefono" name="tel_ac" value={values.tel_ac} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} fullWidth variant="filled" type="email" label="email" name="email_ac" value={values.email_ac} onChange={handleChange}/>
        </Grid>

        </Grid>

    </Paper>
  )
}

export default Acompañante