import React, {useEffect} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'

import { useDispatch, useSelector } from 'react-redux';
import { getFormulario, setPage } from '../../redux/actions/index'


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
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '150ch',
    },
    '& .MuiTextField-root':{
      width: '300px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textField: {

      width: '150ch',
    },
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
    },
    '& .MuiFormLabel-root': {
      fontSize: 'medium',
      backgroundColor: 'white',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiTypography-body1': {
      fontSize: '1.5rem',
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      backgroundColor: 'white',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
}));

const Referencia = (props) => {
  
	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);


  const initialStateValues= {
    nombre_ref: '',
    apellido_ref:'',
    calle_ref: '',
    nro_ref: '',
    localidad_ref: '',
    cod_post_ref: '',
    provincia_ref: '',
    tel_ref: '',
    email_ref: '',
  }

  const [values, setValues] = React.useState(initialStateValues);


	useEffect(() => {
		if (editarFiliatorio) {
			setValues({
				nombre_ref: paciente.nombre_ref,
				apellido_ref: paciente.apellido_ref,
				calle_ref: paciente.calle_ref,
				nro_ref: paciente.nro_ref,
				localidad_ref: paciente.localidad_ref,
				cod_post_ref: paciente.cod_post_ref,
				provincia_ref: paciente.provincia_ref,
				tel_ref: paciente.tel_ref,
				email_ref: paciente.email_ref,
			});
		}
	}, []);

  useEffect(async () => {dispatch(getFormulario(values ))}, [])
  
  const handleChange = (event) => {

    const { name, value } = event.target;
      
    setValues({ ...values, [name]: value });
}


  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>
  
        <Subtitulo titulo = 'Persona de referencia' />
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined" error={values.nombre === "" ? true : false} label={values.nombre === "" ? "Nombre es requerido" : "Nombre"} name="nombre_ref" value={values.nombre_ref} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined" error={values.apellido_ref === "" ? true : false} label={values.apellido_ref === "" ? "Apellido es requerido" : "Apellido"} name="apellido_ref" value={values.apellido_ref} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined" error = {values.calle_ref === "" ? true : false } required = { true } label={values.calle_ref === "" ? "calle requerida" : "calle" } name="calle_ref" value={values.calle_ref} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"número"} name="numero_ref" value={values.numero_ref} type="number" onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} variant="outlined" error = {values.localidad_ref === "" ? true : false } label={values.localidad_ref === "" ? "localidad requerida" : "localidad" } name="localidad_ref" value={values.localidad_ref} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} error = {values.cod_post_ref === "" ? true : false } variant="outlined" label= {values.cod_post_ref === "" ? "C.P requerido" :"C.P." } name="cod_post_ref" value={values.cod_post_ref} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth error = { values.provincia_ref === "" ? true : false } variant="outlined" label= { values.provincia_ref === "" ? "provincia requerida" : "provincia"} name="provincia_ref" value={values.provincia_ref} required = {true} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined" label="telefono" name="tel_ref" value={values.tel_ref} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} fullWidth variant="outlined" type="email" label="email" name="email_ref" value={values.email_ref} onChange={handleChange}/>
        </Grid>

        </Grid>

    </Paper>
  )
}

export default Referencia