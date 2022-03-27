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

const getCuit = (dni, sexo) =>{
  if (dni.length === 7) dni = '0' + dni
  let contdni
  sexo === 'masculino' ? contdni = '20' + dni : contdni = '27' + dni
  let count = 6;
  var result = 0;
  for (let i = 0; i < contdni.length; i++) {
    count === 2 ? count = 7 : count --
    result += parseInt(contdni[i]) * count
  }
  let resto = 11 - (result % 11)

  if (resto === 0) contdni += '0'
  else {
    if ((resto > 9)&&(sexo === 'masculino')) contdni = '23' + dni + '9'
    if ((resto > 9)&&(sexo === 'femenino')) contdni = '23' + dni + '4'
    if (resto < 10) {
      contdni = contdni + "" + resto
    }
  }
  return contdni
}

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
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>
      
        <Subtitulo titulo = 'Obra social' />
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined" error = {values.ob_social === "" ? true : false } required = { true } label={values.ob_social === "" ? "obra social requerida" : "obra social" } name="ob_social" value={values.ob_social} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"nro_afiliado"} name="nro_afiliado" value={values.nro_afiliado} type="number" onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined" error = {values.oficio === "" ? true : false } required = { true } label={values.oficio === "" ? "oficio" : "calle" } name="oficio" value={values.oficio} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} variant="outlined" error = {values.cuit === "" ? true : false } label={values.cuit === "" ? "Cuit Requerido" : "CUIT" } name="cuit" value={values.cuit} onChange={handleChange}/>
          </Grid>

        </Grid>                   

    </Paper>
  )
}

export default Social
