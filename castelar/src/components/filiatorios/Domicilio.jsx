import React, {useEffect} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid,  Paper } from '@material-ui/core';

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

const Domicilio = () => {

	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);

const initialStateValues= {
  calle: '',
  numero: '',
  localidad: '',
  cod_post: '',
  provincia: '',
  tel: '',
  email: '',
}


const [values, setValues] = React.useState(initialStateValues);

useEffect(() => {
  if (editarFiliatorio) {
    setValues({
      calle: paciente.calle,
      numero: paciente.numero,
      localidad: paciente.localidad,
      cod_post: paciente.cod_post,
      provincia: paciente.provincia,
      tel: paciente.tel,
      email: paciente.email,
    });
  }
}, []);


useEffect( () => {dispatch(getFormulario(values))}, [values])


const handleChange = (event) => {

  const { name, value } = event.target;
 
    setValues({ ...values, [name]: value });
}



const classes = useStyles();

return (
  <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
    <Grid container spacing={3}>
  
      <Subtitulo titulo = 'Domicilio' />
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined" error = {values.calle === "" ? true : false } required = { true } label={values.calle === "" ? "calle requerida" : "calle" } name="calle" value={values.calle} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"número"} name="numero" value={values.numero} type="number" onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} variant="outlined" error = {values.localidad === "" ? true : false } label={values.localidad === "" ? "localidad requerido" : "localidad" } name="localidad" value={values.localidad} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          
          <TextField className={classes.textField} fullWidth required = {true} error = {values.cod_post === "" ? true : false } variant="outlined" label= {values.cod_post === "" ? "C.P requerido" :"C.P." } name="cod_post" value={values.cod_post} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} fullWidth error = { values.provincia === "" ? true : false } variant="outlined" label= { values.provincia === "" ? "provincia requerida" : "provincia"} name="provincia" value={values.provincia} required = {true} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} type="number" fullWidth variant="outlined" label="telefono" name="tel" value={values.tel} onChange={handleChange}/>
        </Grid>

        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} fullWidth variant="outlined" label="email" name="email" value={values.email} onChange={handleChange}/>
        </Grid>
      
      </Grid>

    </Paper>
  )
}

export default Domicilio
