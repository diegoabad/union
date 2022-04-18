import React, { useEffect } from 'react'

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

const PielyMucosas = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    normohidratado: '',
    normocoloreado: '',
    hematomas: '', 
    escoriaciones: '',
    ulceras: '',
    lesiones_apoyo: '',
    lesiones_sujecion: '',
    autolesion: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        normohidratado: paciente.normohidratado,
        normocoloreado: paciente.normocoloreado,
        hematomas: paciente.hematomas, 
        escoriaciones: paciente.escoriaciones,
        ulceras: paciente.ulceras,
        lesiones_apoyo: paciente.lesiones_apoyo,
        lesiones_sujecion: paciente.lesiones_sujecion,
        autolesion: paciente.autolesion
      })
    }
  },[])

  useEffect(() => {
    setIngreso({...ingreso,...values})
  },[values])

  const handleChange = (event) => {
  
      setValues( {...values, [event.target.name]: event.target.value });
  }

  const handleTextarea = (event, name) => {
    setValues( {...values, [name]: event.target.value });
  }

  console.log(values)

  const classes = styles();
  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>

        <Subtitulo titulo = 'Exámen piel y mucosas' />

        <Opcion titulo = 'Normohidratado' />

          <RadioButton name = 'normohidratado' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Normohidratado' value = {values.marcha} />

        <Opcion titulo = 'Normocoloreado' />

          <RadioButton name = 'normocoloreado' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Normocoloreado' value = {values.marcha} />

        <Opcion titulo = 'Hematomas' />

          <RadioButton name = 'hematomas' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Hematomas' value = {values.marcha} />

        <Opcion titulo = 'Escoriaciones' />

          <RadioButton name = 'escoriaciones' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Escoriaciones' value = {values.marcha} />

        <Opcion titulo = 'Úlceras' />

          <RadioButton name = 'ulceras' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Úlceras' value = {values.marcha} />

        <Opcion titulo = 'Lesiones por apoyo' />

          <TextArea name = 'lesiones_apoyo' handleChange = {handleTextarea} value = {values.lesiones_apoyo} placeholder = 'Lesiones por apoyo'/> 

        <Opcion titulo = 'Lesiones por sujeción' />

          <TextArea name = 'lesiones_sujecion' handleChange = {handleTextarea} value = {values.lesiones_sujecion} placeholder = 'Lesiones por Sujeción'/> 

        <Opcion titulo = 'lesiones por autolesiones' />

          <TextArea name = 'autolesiones' handleChange = {handleTextarea} value = {values.autolesiones} placeholder = 'Lesiones por autolesiones'/> 


      </Grid>
    </Paper>
  )
}

export default PielyMucosas