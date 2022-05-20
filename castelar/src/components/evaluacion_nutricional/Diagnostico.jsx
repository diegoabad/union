import React, {useEffect} from 'react'

import Opcion from '../admision1/componente/Opcion.jsx'
import TextoMultiline from '../admision/componentes/TextoMultiline.jsx'

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

const Diagnostico = ({nutricional, setNutricional, paciente}) => {

  const initialStateValues = {
    diagnostico_medico: '',
    relevancia_nutricional: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }


  useEffect(() => {
    if (paciente) {
      setValues({...values,
      diagnostico_medico: paciente.diagnostico_medico,
      });
    }
  },[])

  useEffect(() => {
    setNutricional({ ...nutricional, ...values})
  } , [values]);

  const classes = styles();
  return (
    <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>

        <Opcion titulo = 'Diagnóstico médico' />
          <TextoMultiline error = {values.diagnostico_medico === '' ? true : false} name = 'diagnostico_medico' handleChange = {handleChange} value = {values.diagnostico_medico} label = 'Diagnóstico médico' minRows = {4} maxRows = {4}/>

        <Opcion titulo = 'Datos de relevancia nutricional' />
          <TextoMultiline error = {values.relevancia_nutricional === '' ? true : false} name = 'relevancia_nutricional' handleChange = {handleChange} value = {values.relevancia_nutricional} label = 'Datos de relevancia nutricional' minRows = {4} maxRows = {4}/>

      </Grid>
    </Paper>
  )
}

export default Diagnostico