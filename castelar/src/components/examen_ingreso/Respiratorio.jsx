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

const Respiratorio = () => {

  const initialStateValues = {
    mv: '',
    ruidos_agregados: '',
    tos: '',
    tos_descripcion: ''
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

      <Subtitulo titulo = 'Exámen respiratorio' />

        <Opcion titulo = 'MV' />

          <RadioButton name = 'mv' handleChange = {handleChange} datos = {[{name: 'conservado', label: 'Conservado'}, {name: 'hipoventilacion_global', label: 'Hipoventilación global'}]} titulo = 'MV Periféricos' value = {values.mv} />

        <Opcion titulo = 'Ruidos agregados' />

          <TextArea name = 'ruidos_agregados' handleChange = {handleTextarea} value = {values.ruidos_agregados} placeholder = 'Ruidos agregados'/>

        <Opcion titulo = 'Tos' />

          <RadioButton name = 'tos' handleChange = {handleChange} datos = {[{name: 'no', label: 'No'}, {name: 'seca', label: 'Seca'}, { name: 'productiva', label: 'Preductiva'}]} titulo = 'MV Periféricos' value = {values.tos} />

          <TextArea name = 'tos_descripcion' handleChange = {handleTextarea} value = {values.tos_descripcion} placeholder = 'Descripción'/>

      </Grid>
    </Paper>
  )
}

export default Respiratorio