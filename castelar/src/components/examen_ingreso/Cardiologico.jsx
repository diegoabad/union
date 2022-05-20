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

const Cardiologico = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    auscultacion: '',
    soplos: '',
    soplos_descripcion: '',
    edemas: '',
    edemas_perifericos: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        auscultacion: paciente.auscultacion,
        soplos: paciente.soplos,
        soplos_descripcion: paciente.soplos_descripcion,
        edemas: paciente.edemas,
        edemas_perifericos: paciente.edemas_perifericos
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

        <Subtitulo titulo = 'Exámen cardiológico' />

        <Opcion titulo = 'Auscultación' />
          <TextoMultiline error = {false} name = 'auscultacion' handleChange = {handleChange} value = {values.auscultacion} label = 'Auscultación'/>


        <Opcion titulo = 'Soplos' />

          <RadioButton name = 'soplos' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Soplos' value = {values.soplos} />

          {values.soplos === 'si' &&
            <TextoMultiline error = {false} name = 'soplos_descripcion' handleChange = {handleChange} value = {values.soplos_descripcion} label = 'Descripción'/>
          }

        <Opcion titulo = 'Edemas Periféricos' />

          <RadioButton name = 'edemas' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Edemas Periféricos' value = {values.edemas} />

          {values.edemas === 'si' &&
          <TextoMultiline error = { false } name = 'edemas_perifericos' handleChange = {handleChange} value = {values.edemas_perifericos} label = 'Descripción de Edemas periféricos'/>
          }


      </Grid>
    </Paper>
  )
}

export default Cardiologico