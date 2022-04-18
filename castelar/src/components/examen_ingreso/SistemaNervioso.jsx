import React, { useEffect }from 'react'

import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import TextArea from './componentes/TextArea.jsx'

import { makeStyles } from '@material-ui/core/styles';

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

const SistemaNervioso = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    movimientos_anormales: '',
    rigidez: '',
    hemiplejias: '',
    hemiparesias: '',
    deficits_neurologicos: '',
    enfermedades_neurologicas: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        movimientos_anormales: paciente.movimientos_anormales,
        rigidez: paciente.rigidez,
        hemiplejias: paciente.hemiplejias,
        hemiparesias: paciente.hemiparesias,
        deficits_neurologicos: paciente.deficits_neurologicos,
        enfermedades_neurologicas: paciente.enfermedades_neurologicas
      })
    }
  },[])

  useEffect(() => {
    setIngreso({...ingreso,...values})
  },[values])


  const handleTextarea = (event, name) => {
    setValues( {...values, [name]: event.target.value });
  }

  const classes = styles(); 
  return (
  <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
    <Grid container spacing={3}> 

      < Subtitulo titulo = 'Sistema nervioso central' />
    
      <Opcion titulo = 'Movimientos anormales' />

        <TextArea name = 'movimientos_anormales' handleChange = {handleTextarea} value = {values.movimientos_anormales} placeholder = 'Movimientos anormales'/> 

      <Opcion titulo = 'Rigidez/extrapiramidalismo' />

        <TextArea name = 'rigidez' handleChange = {handleTextarea} value = {values.rigidez} placeholder = 'Rigidez/extrapiramidalismo'/> 

      <Opcion titulo = 'hemiplejisas' />

        <TextArea name = 'hemiplejias' handleChange = {handleTextarea} value = {values.hemiplejias} placeholder = 'Hemiplejias'/> 

      <Opcion titulo = 'Hemiparesias' />

        <TextArea name = 'hemiparesias' handleChange = {handleTextarea} value = {values.hemiparesias} placeholder = 'Hemiparesias'/> 

      <Opcion titulo = 'Marcha' />

      <Opcion titulo = 'Déficits neurológicos' />

        <TextArea name = 'deficits_neurologicos' handleChange = {handleTextarea} value = {values.deficits_neurologicos} placeholder = 'Déficits Neurológicos'/> 

      <Opcion titulo = 'Enfermedades neurológicas' />

        <TextArea name = 'enfermedades_neurologicas' handleChange = {handleTextarea} value = {values.enfermedades_neurologicas} placeholder = 'Enfermedades Neurológicas'/> 

    </Grid>
  </Paper>
  )
}

export default SistemaNervioso