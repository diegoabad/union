import React from 'react'

import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import RadioButton from '../admision1/componente/RadioButton.jsx'
import Contenedor from './componentes/Contenedor.jsx'
import IngresoNros from './componentes/IngresoNros.jsx'

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

const SignosVitales = () => {

  const initialStateValues = {
    maxima: '',
    minima: '',
    temp_axilar: '',
    frec_cardiaca: '',
    saturacion: '',
    marcha: ''
  }

const [values, setValues] = React.useState(initialStateValues);

const handleChange = (event) => {
  if(event.target.value.match(/^[0-9]+([.])?([0-9]+)?$/) || event.target.value === ''){
    setValues( {...values, [event.target.name]: event.target.value });
  }
}

const handleCheck = (event) => {
  setValues( {...values, [event.target.name]: event.target.value });
}


const classes = styles();
return(
  <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
    <Grid container spacing={3}>

      < Subtitulo titulo = 'Control de signos vitales' />

      <Opcion titulo = 'TA' />

      <Contenedor 
        datos = {[{ label: 'Máxima', value: values.maxima, name: 'maxima' }, { label: 'Mínima', value: values.minima, name: 'minima' }]}
        handleChange = { handleChange }
      />
      
      <Opcion titulo = 'Temperatura Axilar' />

      <IngresoNros label = 'Grados' name = 'temp_axilar' value = {values.temp_axilar} handleChange = { handleChange }/>

      <Opcion titulo = 'Frecuencia Cardíaca' />

      <IngresoNros label = 'LPM' name = 'frec_cardiaca' value = {values.frec_cardiaca} handleChange = { handleChange }/>

      <Opcion titulo = 'Saturación basal de oxígeno' />
      
      <IngresoNros label = 'porc. %' name = 'saturacion' value = {values.saturacion} handleChange = { handleChange }/>

      <Opcion titulo = 'Marcha' />

      <RadioButton name = 'marcha' handleChange = {handleCheck} datos = {[{name: 'autonoma', label: 'Autónoma'}, {name: 'no_deambula', label: 'No deambula'}]} titulo = 'Marcha' value = {values.marcha} />


    </Grid>
  
  </Paper>
)
}

export default SignosVitales