import React, { useEffect }from 'react'

import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import RadioButton from '../admision1/componente/RadioButton.jsx'
import TextoMultiline from '../admision/componentes/TextoMultiline.jsx'

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

const Abdominal = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    rha: '',
    blando: '',
    depresible: '',
    indoloro: '',
    visceromegalias: ''
  } 

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        rha: paciente.rha,
        blando: paciente.blando,
        depresible: paciente.depresible,
        indoloro: paciente.indoloro,
        visceromegalias: paciente.visceromegalias
      })
    }
  },[])

  useEffect(() => {
    setIngreso({...ingreso,...values})
  },[values])

  const handleChange = (event) => { 
    setValues( {...values, [event.target.name]: event.target.value });
  }


  const classes = styles();
  return (
    <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>

      <Subtitulo titulo = 'Exámen abdominal' />

        <Opcion titulo = 'RHA' />

          <RadioButton name = 'rha' handleChange = {handleChange} datos = {[{name: 'positivos', label: 'Positivos'}, {name: 'disminuidos', label: 'Disminuidos'}]} titulo = 'RHA' value = {values.rha} />

        <Opcion titulo = 'Blando' />
          <TextoMultiline error = {false} name = 'blando' handleChange = {handleChange} value = {values.blando} label = 'Blando'/>

        <Opcion titulo = 'Depresible' />
          <TextoMultiline error = {false} name = 'depresible' handleChange = {handleChange} value = {values.depresible} label = 'Depresible'/>

        <Opcion titulo = 'Indoloro' />
          <TextoMultiline error = {false} name = 'indoloro' handleChange = {handleChange} value = {values.indoloro} label = 'Indoloro'/>

        <Opcion titulo = 'Visceromegalias' />
          <TextoMultiline error = {false} name = 'visceromegalias' handleChange = {handleChange} value = {values.visceromegalias} label = 'Visceromegalias'/>

      </Grid>
    </Paper>
  )
}

export default Abdominal