import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import TextoMultiline from './componentes/TextoMultiline';
import RadioButton from '../admision1/componente/RadioButton';
import TituloIntermedio from './componentes/TituloIntermedio';



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

const Antecedentes_personales = ({estado, setEstado, paciente}) => {


  const initialStateValues= {
    parto: '',
    lenguaje: 'no',
    detalle_lenguaje: '',
    enfermedades: 'no',
    detalle_enfermedades: '',
    traumatismo: 'no',
    detalle_traumatismo: '',
    convulsiones: 'no',
    detalle_convulsiones: '',

  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) setValues({...values, 
    parto: paciente.parto,
    lenguaje: paciente.lenguaje,
    detalle_lenguaje: paciente.detalle_lenguaje,
    enfermedades: paciente.enfermedades,
    detalle_enfermedades: paciente.detalle_enfermedades,
    traumatismo: paciente.traumatismo,
    detalle_traumatismo: paciente.detalle_traumatismo,
    convulsiones: paciente.convulsiones,
    detalle_convulsiones: paciente.detalle_convulsiones,
    })
  },[])

  useEffect(() => {
    setEstado({...estado, ...values})
  }, [values])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Antecedentes personales' />

        <Opcion titulo = 'Parto' />    
          <TextoMultiline error = { values.parto === '' ? true : false } label={"Parto"} name="parto" value={values.parto} handleChange = { handleChange } />

        <Opcion titulo = 'Trastornos del Lenguaje' />
          <RadioButton name = 'lenguaje' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Trastornos del lenguaje' value = {values.lenguaje} />

          {values.lenguaje === 'si' &&
          <TextoMultiline error = { values.detalle_lenguaje === '' ? true : false } label={"Detalle del trastorno de lenguaje"} name="detalle_lenguaje" value={values.detalle_lenguaje} handleChange = { handleChange } />
          }
        
        <TituloIntermedio titulo = 'Enfermedades comunes de la infancia' />
        <Opcion titulo = 'Enfermedades' />
          <RadioButton name = 'enfermedades' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Enfermedades' value = {values.enfermedades} />

          {values.enfermedades === 'si' &&
          <TextoMultiline error = { ((values.enfermedades === 'si') && (values.detalle_enfermedades === ''))? true : false } label={"Detalle y edades de enfermedades "} name="detalle_enfermedades" value={values.detalle_enfermedades} handleChange = { handleChange } />
          }

        <Opcion titulo = 'Traumatismos' />
          <RadioButton name = 'traumatismo' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Traumatismos' value = {values.traumatismo} />

          {values.traumatismo === 'si' &&
          <TextoMultiline error = { ((values.traumatismo === 'si') && (values.detalle_traumatismo === ''))? true : false } label={"Detalle de traumatismos "} name="detalle_traumatismo" value={values.detalle_traumatismo} handleChange = { handleChange } />
          }

        <Opcion titulo = 'Convulsiones' />
          <RadioButton name = 'convulsiones' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Convulsiones' value = {values.convulsiones} />

          {values.convulsiones === 'si' &&
          <TextoMultiline error = { ((values.convulsiones === 'si') && (values.detalle_convulsiones === ''))? true : false } label={"Detalle de convulsiones "} name="detalle_convulsiones" value={values.detalle_convulsiones} handleChange = { handleChange } />
          }

        </Grid>

    </Paper>
  )
}

export default Antecedentes_personales
