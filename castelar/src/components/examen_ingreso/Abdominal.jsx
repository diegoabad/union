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

const Abdominal = () => {

  const initialStateValues = {
    rha: '',
    blando: '',
    depresible: '',
    indoloro: '',
    visceromegalias: ''
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

      <Subtitulo titulo = 'Exámen abdominal' />

        <Opcion titulo = 'RHA' />

          <RadioButton name = 'rha' handleChange = {handleChange} datos = {[{name: 'positivos', label: 'Positivos'}, {name: 'disminuidos', label: 'Disminuidos'}]} titulo = 'RHA' value = {values.rha} />

        <Opcion titulo = 'Blando' />

          <TextArea name = 'blando' handleChange = {handleTextarea} value = {values.blando} placeholder = 'Blando '/>

        <Opcion titulo = 'Depresible' />

          <TextArea name = 'depresible' handleChange = {handleTextarea} value = {values.depresible} placeholder = 'Depresible'/>

        <Opcion titulo = 'Indoloro' />

          <TextArea name = 'indoloro' handleChange = {handleTextarea} value = {values.indoloro} placeholder = 'Indoloro'/>

        <Opcion titulo = 'Visceromegalias' />

          <TextArea name = 'visceromegalias' handleChange = {handleTextarea} value = {values.visceromegalias} placeholder = 'Visceromegalias'/>

      </Grid>
    </Paper>
  )
}

export default Abdominal