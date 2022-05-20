import React, { useEffect }from 'react'

import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import TextoMultiline from '../admision/componentes/TextoMultiline.jsx'

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

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }


  const classes = styles(); 
  return (
  <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
    <Grid container spacing={3}> 

      < Subtitulo titulo = 'Sistema nervioso central' />
    
      <Opcion titulo = 'Movimientos anormales' />
        <TextoMultiline error = {false} name = 'movimientos_anormales' value = {values.movimientos_anormales} onChange = {handleChange} minRows = {4} maxRows = { 4 } label = 'Movimientos anormales'/>

      <Opcion titulo = 'Rigidez/extrapiramidalismo' />
        <TextoMultiline error = {false} name = 'rigidez' value = {values.rigidez} onChange = {handleChange} minRows = {4} maxRows = { 4 } label = 'Rigidez/extrapiramidalismo'/>

      <Opcion titulo = 'hemiplejisas' />
        <TextoMultiline error = {false} name = 'hemiplejias' value = {values.hemiplejias} onChange = {handleChange} minRows = {4} maxRows = { 4 } label = 'Hemiplejias'/>

      <Opcion titulo = 'Hemiparesias' />
        <TextoMultiline error = {false} name = 'hemiparesias' value = {values.hemiparesias} onChange = {handleChange} minRows = {4} maxRows = { 4 } label = 'Hemiparesias'/>

      <Opcion titulo = 'Marcha' />

      <Opcion titulo = 'Déficits neurológicos' />
        <TextoMultiline error = {false} name = 'deficits_neurologicos' value = {values.deficits_neurologicos} onChange = {handleChange} minRows = {4} maxRows = { 4 } label = 'Déficits neurológicos'/>

      <Opcion titulo = 'Enfermedades neurológicas' />
        <TextoMultiline error = {false} name = 'enfermedades_neurologicas' value = {values.enfermedades_neurologicas} onChange = {handleChange} minRows = {4} maxRows = { 4 } label = 'Enfermedades neurológicas'/> 

    </Grid>
  </Paper>
  )
}

export default SistemaNervioso