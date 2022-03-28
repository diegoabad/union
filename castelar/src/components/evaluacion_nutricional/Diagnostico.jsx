import React, {useEffect} from 'react'

import Opcion from '../admision1/componente/Opcion.jsx'
import TextArea from '../examen_ingreso/componentes/TextArea.jsx'

import {Grid, Paper} from '@material-ui/core'
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

const Diagnostico = ({nutricional, setNutricional}) => {

  const initialStateValues = {
    diagnostico_medico: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  const handleTextarea = (event, name) => {
    setValues( {...values, [name]: event.target.value });
  }

  useEffect(() => {
    setNutricional({ ...nutricional, ...values})
  } , [values]);

  const classes = styles();
  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>

        <Opcion titulo = 'Diagnóstico médico' />
          <TextArea name = 'diagnostico_medico' handleChange = {handleTextarea} value = {values.diagnostico_medico} placeholder = 'Diagnóstico médico'/>

        <Opcion titulo = 'Datos de relevancia nutricional' />
          <TextArea name = 'relevancia_nutricional' handleChange = {handleTextarea} value = {values.relevancia_nutricional} placeholder = 'Datos de relevancia nutricional'/>

      </Grid>
    </Paper>
  )
}

export default Diagnostico