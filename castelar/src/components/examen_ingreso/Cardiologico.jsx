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

const Cardiologico = () => {

  const initialStateValues = {
    auscultacion: '',
    soplos: '',
    soplos_descripcion: '',
    edemas: '',
    edemas_perifericos: '',
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

        <Subtitulo titulo = 'Exámen cardiológico' />

        <Opcion titulo = 'Auscultación' />

          <TextArea name = 'auscultacion' handleChange = {handleTextarea} value = {values.auscultacion} placeholder = 'Auscultación'/> 

        <Opcion titulo = 'Soplos' />

          <RadioButton name = 'soplos' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Soplos' value = {values.soplos} />

          {values.soplos === 'si' &&
          <TextArea name = 'soplos_descripcion' handleChange = {handleTextarea} value = {values.soplos_descripcion} placeholder = 'Descripción de soplos'/> }

        <Opcion titulo = 'Edemas Periféricos' />

          <RadioButton name = 'edemas' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Edemas Periféricos' value = {values.edemas} />

          {values.edemas === 'si' &&
          <TextArea name = 'edemas_perifericos' handleChange = {handleTextarea} value = {values.edemas_perifericos} placeholder = 'Descripción de Edemas periféricos'/> }


      </Grid>
    </Paper>
  )
}

export default Cardiologico