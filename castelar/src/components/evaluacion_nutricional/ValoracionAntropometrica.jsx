import React, { useEffect} from 'react'

import Opcion from '../admision1/componente/Opcion.jsx'
import TextoMultiline from '../admision/componentes/TextoMultiline.jsx'
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

}))

const ValoracionAntropometrica = ({nutricional, setNutricional, paciente}) => {

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

  useEffect(() => {
    if (paciente) {
      setValues({...values,
        evaluacion_nutricional: paciente.evaluacion_nutricional,
        plan_nutricional: paciente.plan_nutricional,
        profesional_actuante: paciente.profesional_actuante,
        peso_nutricional: paciente.peso_nutricional,
        talla: paciente.talla,
        imc: paciente.imc,
        diagnostico_nutricional: paciente.diagnostico_nutricional,
      })
    }
  },[])

  useEffect(() => {
    setNutricional({ ...nutricional, ...values})
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleChangeNro = (event) => {
    if(event.target.value.match(/^[0-9]+([.])?([0-9]+)?$/) || event.target.value === ''){
      setValues( {...values, [event.target.name]: event.target.value });
    }
  }


  const classes = styles();

  return (
  <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
    <Grid container spacing={3}>

      <Subtitulo titulo = 'Valoración antropométrica' />

      <Opcion titulo = 'Peso' />
        <IngresoNros label = 'Peso' name = 'peso_nutricional' value = {values.peso} handleChange = { handleChangeNro }/>

      <Opcion titulo = 'Talla' />
        <Grid item xs = {12}>
          <TextField label = 'Talla' name = 'talla' onChange = {handleChange} value = {values.talla} style = { {fontSize: '1.5px'} }/>
        </Grid>

      <Opcion titulo = 'IMC' />
        <TextoMultiline error = {values.imc === '' ? true : false} name = 'imc' handleChange = {handleChange} value = {values.imc} label = 'IMC' minRows = {4} maxRows = {4}/>
        
      <Opcion titulo = 'Diagnóstico nutricional' />
        <TextoMultiline error = {values.diagnostico_nutricional === '' ? true : false} name = 'diagnostico_nutricional' handleChange = {handleChange} value = {values.diagnostico_nutricional} label = 'Diagnóstico nutricional' minRows = {4} maxRows = {4}/>
        
      <Opcion titulo = 'Evaluación nutricional' />
        <TextoMultiline error = {values.evaluacion_nutricional === '' ? true : false} name = 'evaluacion_nutricional' handleChange = {handleChange} value = {values.evaluacion_nutricional} label = 'Evaluación nutricional' minRows = {4} maxRows = {4}/>

      <Opcion titulo = 'Plan nutricional y tipo de dieta' />
        <TextoMultiline error = {values.plan_nutricional === '' ? true : false} name = 'plan_nutricional' handleChange = {handleChange} value = {values.plan_nutricional} label = 'Plan nutricional y tipo de dieta' minRows = {4} maxRows = {4}/>

      <Opcion titulo = 'Profesional actuante' />
        <Grid item xs = {12}>
          <TextField label = 'Profesional actuante' name = 'profesional_actuante' onChange = {handleChange} value = {values.profesional_actuante} style = { {fonSize: 'medium'} }/>
        </Grid>

    </Grid>
  </Paper>
  )
}

export default ValoracionAntropometrica