import React from 'react'

import Opcion from '../admision1/componente/Opcion.jsx'
import TextArea from '../examen_ingreso/componentes/TextArea.jsx'
import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import IngresoNros from '../examen_ingreso/componentes/IngresoNros.jsx'

import {Grid, Paper, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '95%',
    },
    '& .MuiInputBase-input': {
      fontSize: 'medium',
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

}))

const ValoracionAntropometrica = () => {

  const initialStateValues = {
    evaluacion_nutricional: '',
    plan_nutricional: '',
    profesional_actuante: '',
    peso_nutricional: '',
    talla: '',
    imc: '',
    diagnostico_nutricional: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  const handleChange = (event) => {
    console.log(event.target.name)
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleChangeNro = (event) => {
    if(event.target.value.match(/^[0-9]+([.])?([0-9]+)?$/) || event.target.value === ''){
      setValues( {...values, [event.target.name]: event.target.value });
    }
  }

  const handleTextarea = (event, name) => {
    setValues( {...values, [name]: event.target.value });
  }

  const classes = styles();

  return (
  <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
    <Grid container spacing={3}>

      <Subtitulo titulo = 'Valoración antropométrica' />

      <Opcion titulo = 'Peso' />
        <IngresoNros label = 'Peso' name = 'peso' value = {values.peso} handleChange = { handleChangeNro }/>

      <Opcion titulo = 'Talla' />
        <Grid item xs = {12}>
          <TextField label = 'Talla' name = 'talla' onChange = {handleChange} value = {values.talla} style = { {fontSize: '1.5px'} }/>
        </Grid>

      <Opcion titulo = 'IMC' />
        <TextArea name = 'imc' handleChange = {handleTextarea} value = {values.imc} placeholder = 'IMC'/>

      <Opcion titulo = 'Diagnóstico nutricional' />
        <TextArea name = 'diagnostico_nutricional' handleChange = {handleTextarea} value = {values.diagnostico_nutricional} placeholder = 'Diagnóstico nutricional'/>

      <Opcion titulo = 'Evaluación nutricional' />
        <TextArea name = 'evaluacion_nutricional' handleChange = {handleTextarea} value = {values.evaluacion_nutricional} placeholder = 'Evaluación nutricional'/>

      <Opcion titulo = 'Plan nutricional y tipo de dieta' />
        <TextArea name = 'plan_nutricional' handleChange = {handleTextarea} value = {values.plan_nutricional} placeholder = 'Plan nutricional y tipo de dieta'/>

      <Opcion titulo = 'Profesional actuante' />
        <Grid item xs = {12}>
          <TextField label = 'Profesional actuante' name = 'profesional_actuante' onChange = {handleChange} value = {values.profesional_actuante} style = { {fonSize: 'medium'} }/>
        </Grid>

    </Grid>
  </Paper>
  )
}

export default ValoracionAntropometrica