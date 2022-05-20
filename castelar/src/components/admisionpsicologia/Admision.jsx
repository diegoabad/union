import React, { useEffect } from 'react'

import { Paper, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Subtitulo from '../admision1/componente/Opcion.jsx' 
import Text from '../admision/componentes/TextoMultiline.jsx'
import Radio from '../admision1/componente/RadioButton.jsx'

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

const Admision = ({estado, setEstado, paciente}) => {

  const initialStateValues = {
    consulta: '',
    rotulacion: '',
    motivo: '',
    busqueda: '',
    redes_sociales: '',
    tratamientos_psicologicos: 'no',
    tratamiento_descripcion: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value});
  }

  useEffect(() => {
    if (paciente) {
      setValues({...values, 
        consulta: paciente.consulta,
        rotulacion: paciente.rotulacion,
        motivo: paciente.motivo,
        busqueda: paciente.busqueda,
        redes_sociales: paciente.redes_sociales,
        tratamientos_psicologicos: paciente.tratamientos_psicologicos,
        tratamiento_descripcion: paciente.tratamiento_descripcion,
      })
    }
  },[]);

  useEffect(() => {
    setEstado({...estado, ...values})
  }, [values])

  console.log(values)
  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={2}>

        <Subtitulo titulo = "Motivo de Consulta" />
          <Text handleChange = { handleChange } name = {'consulta' } value = { values.consulta } label = {'Motivo de Consulta' } error = { values.consulta === '' ? true : false } minRows = { 12 } maxRows = { 12 }/>

        <Subtitulo titulo = "Rotulación" />
          <Text handleChange = { handleChange } name = {'rotulacion' } value = { values.rotulacion } label = {'Rotulación' } error = { false } minRows = { 4 } maxRows = { 4 }/>

        <Subtitulo titulo = "¿Por qué consulta en este momento?" />
          <Text handleChange = { handleChange } name = {'motivo' } value = { values.motivo } label = {'Motivo de Consulta actual' } error = { false } minRows = { 4 } maxRows = { 4 }/>
 
        <Subtitulo titulo = "Búsqueda (¿qué espera lograr?)" />
          <Text handleChange = { handleChange } name = {'busqueda' } value = { values.busqueda } label = {'Búsqueda' } error = { false } minRows = { 4 } maxRows = { 4 }/>

        <Subtitulo titulo = "Redes sociales de contención" />
          <Text handleChange = { handleChange } name = {'redes_sociales' } value = { values.redes_sociales } label = {'Redes sociales de contención' } error = { false } minRows = { 8 } maxRows = { 8 }/>

        <Subtitulo titulo = "Tratamientos Psicológicos Previos" />
          <Radio handleChange = { handleChange } name = {'tratamientos_psicologicos' } value = { values.tratamientos_psicologicos } titulo = 'Tratamientos psicológicos previos' datos = { [ {name:'si', label: 'Si'}, {name: 'no', label: 'No'} ] }/>

          {estado.tratamientos_psicologicos === 'si' &&
            <Text handleChange = { handleChange } name = {'tratamiento_descripcion' } value = { values.tratamiento_descripcion } label = {'Descripción del tratamiento' } error = { values.tratamientos_psicologicos === 'si' && values.tratamiento_descripcion === '' ? true : false} minRows = { 8 } maxRows = { 8 }/>
          }

      </Grid>
    </Paper>
  )
}

export default Admision