import React from 'react'

import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import RadioButton from '../admision1/componente/RadioButton.jsx'
import TextArea from './componentes/TextArea.jsx'

import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    }
  }
}))

const HabitosDomesticos = () => {

  const initialStateValues = {
    incontinencia_urinaria: '',
    pañales: '',
    alimentacion_asistencia: '',
    alimentacion_descripcion: ''
  }

  const [values, setValues] = React.useState(initialStateValues);

  const handleChange = (event) => {
  
    setValues( {...values, [event.target.name]: event.target.value });
  }

  const handleTextarea = (event, name) => {
    setValues( {...values, [name]: event.target.value });
  }

  const classes = styles();
  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>

        <Subtitulo titulo = 'Hábitos domésticos' />

          <Opcion titulo = 'Incontinencia urinaria' />

            <RadioButton name = 'incontinencia_urinaria' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Incontinencia urinaria' value = {values.incontinencia_urinaria} />

          <Opcion titulo = 'Pañales' />

            <RadioButton name = 'pañales' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Pañales' value = {values.pañales} />

          <Opcion titulo = 'Alimentación, necesita asistencia' />

            <RadioButton name = 'alimentacion_asistencia' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Alimentación' value = {values.alimentacion_asistencia} />

            <TextArea name = 'alimentacion_descripcion' handleChange = {handleTextarea} value = {values.alimentacion_descripcion} placeholder = 'Alimentación '/>

      </Grid>
    </Paper>
  )
}

export default HabitosDomesticos