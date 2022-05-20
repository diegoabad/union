import React, {useEffect} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from '@material-ui/core';

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
    '& .pagecontent-2': {
      width: '80%',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
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
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  '& .MuiFilledInput-root': {
    backgroundColor: 'rgba(32, 135, 252, 0.1)',
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

const Social = () => {

	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);
  
  
  const initialStateValues= {
    ob_social: '',
    nro_afiliado: '',
    oficio: '',
    cuit: '',
  }
 
  const [values, setValues] = React.useState(initialStateValues);


	useEffect(() => {
		if (editarFiliatorio) {
			setValues({
				ob_social: paciente.ob_social,
				nro_afiliado: paciente.nro_afiliado,
				oficio: paciente.oficio,
				cuit: paciente.cuit,
			});
		}
	}, []);

useEffect(() => {dispatch(getFormulario(values))}, [values])

const handleChange = (event) => {

  const { name, value } = event.target;
 
  setValues({ ...values, [name]: value });
}


const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>
      
        <Subtitulo titulo = 'Obra social' />
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error = {values.ob_social === "" ? true : false } required = { true } label={values.ob_social === "" ? "obra social requerida" : "obra social" } name="ob_social" value={values.ob_social} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled"  label={"nro_afiliado"} name="nro_afiliado" value={values.nro_afiliado} type="number" onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error = {values.oficio === "" ? true : false } required = { true } label={values.oficio === "" ? "oficio" : "calle" } name="oficio" value={values.oficio} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} variant="filled" error = {values.cuit === "" ? true : false } label={values.cuit === "" ? "Cuit Requerido" : "CUIT" } name="cuit" value={values.cuit} onChange={handleChange}/>
          </Grid>

        </Grid>                   

    </Paper>
  )
}

export default Social
