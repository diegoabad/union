import React, {useEffect} from 'react'

import {Paper, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import TextoMultiline from './componentes/TextoMultiline';
import RadioButton from '../admision1/componente/RadioButton';

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FEFEFA'
    },

    '& .MuiTextField-root':{
      width: '300px',
      fontSize: 'medium',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
      fontSize: 'medium',
    },
    '& .MuiFormLabel-root': {
      fontSize: 'medium',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiTypography-body1': {
      fontSize: '1.5rem',
    },
  },
}));

const ActividadOcupacional = ({estado, setEstado, paciente}) => {


  const initialStateValues = {
    trabajo: 'no',
    detalle_trabajo: '',
    estudio: 'no',
    detalle_estudio: '',
    socializacion: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() => {
    if (paciente) setValues({...values, 
    trabajo: paciente.trabajo,
    detalle_trabajo: paciente.detalle_trabajo,
    estudio: paciente.estudio,
    detalle_estudio: paciente.detalle_estudio,
    socializacion: paciente.socializacion,
    })
  },[])

  useEffect(() => {
    setEstado({...estado, ...values})
  }, [values])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const classes = useStyles();
  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Actividad ocupacional' />

        <Opcion titulo = 'Trabajo' />
          <RadioButton handleChange = { handleChange } datos = { [ {name: 'si',  label: 'Si'}, {name: 'no', label: 'No'}] } titulo = 'Trabajo' name = 'trabajo' value = {values.trabajo}/>

          {values.trabajo === 'si' &&
          <TextoMultiline error = { (values.trabajo === 'si' && values.detalle_trabajo === '')? true : false } label={"descrición trabajo "} name="detalle_trabajo" value={values.detalle_trabajo} handleChange = { handleChange } />
          }

        <Opcion titulo = 'Estudio' />
          <RadioButton handleChange = { handleChange } datos = { [ {name: 'si',  label: 'Si'}, {name: 'no', label: 'No'}] } titulo = 'Estudio' name = 'estudio' value = {values.estudio}/>

          {values.estudio === 'si' &&
          <TextoMultiline error = { (values.estudio === 'si' && values.detalle_estudio === '')? true : false } label={"descrición estudio "} name="detalle_estudio" value={values.detalle_estudio} handleChange = { handleChange } />
          }

        <Opcion titulo = 'Socialización' />

          <TextoMultiline error = { (values.socializacion === '')? true : false } label={"Socialización "} name="socializacion" value={values.socializacion} handleChange = { handleChange } />

      </Grid>
    </Paper>
  )
}

export default ActividadOcupacional