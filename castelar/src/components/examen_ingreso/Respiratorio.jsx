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

const Respiratorio = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    mv: '',
    ruidos_agregados: '',
    tos: '',
    tos_descripcion: ''
  } 

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        mv: paciente.mv,
        ruidos_agregados: paciente.ruidos_agregados,
        tos: paciente.tos,
        tos_descripcion: paciente.tos_descripcion
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

      <Subtitulo titulo = 'Exámen respiratorio' />

        <Opcion titulo = 'MV' />

          <RadioButton name = 'mv' handleChange = {handleChange} datos = {[{name: 'conservado', label: 'Conservado'}, {name: 'hipoventilacion_global', label: 'Hipoventilación global'}]} titulo = 'MV Periféricos' value = {values.mv} />

        <Opcion titulo = 'Ruidos agregados' />
          <TextoMultiline error = {false} name = 'ruidos_agregados' handleChange = {handleChange} value = {values.ruidos_agregados} label = 'Ruidos agregados'/>

        <Opcion titulo = 'Tos' />

          <RadioButton name = 'tos' handleChange = {handleChange} datos = {[{name: 'no', label: 'No'}, {name: 'seca', label: 'Seca'}, { name: 'productiva', label: 'Preductiva'}]} titulo = 'MV Periféricos' value = {values.tos} />

          <TextoMultiline error = {false} name = 'tos_descripcion' handleChange = {handleChange} value = {values.tos_descripcion} label = 'Descripción'/>

      </Grid>
    </Paper>
  )
}

export default Respiratorio