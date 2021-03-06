import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx';
import CheckBox from './componentes/CheckBox';
import TextoMultiline from './componentes/TextoMultiline.jsx';
import TituloIntermedio from './componentes/TituloIntermedio.jsx';
import RadioButton from '../admision1/componente/RadioButton.jsx';


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
      width: '1000px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      fontSize: 'medium'
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      paddingLeft: '10px',
      paddingRight: '10px',
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

const Psicodesarrollo = ({estado, setEstado, paciente}) => {


  const initialStateValues= {
    infancia: '',
    pubertad: '',
    adolescencia: '',
    juventud: '',
    adultez: '',
    estudios_primarios: false,
    estudios_secundarios: false,
    estudios_terciarios: false,
    estudios_universitarios: false,
    enfermedades_comunes: 'no',
    cirugias_adultez: 'no',
    otros_adultez: 'no',
    desc_enfermedades_comunes: '',
    desc_cirugias_adultez: '',
    desc_otros_adultez: '',
    interconsultas:'',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    setValues({...values,
      infancia: paciente.infancia,
      pubertad: paciente.pubertad,
      adolescencia: paciente.adolescencia,
      juventud: paciente.juventud,
      adultez: paciente.adultez,
      estudios_primarios: paciente.estudios_primarios,
      estudios_secundarios: paciente.estudios_secundarios,
      estudios_terciarios: paciente.estudios_terciarios,
      estudios_universitarios: paciente.estudios_universitarios,
      enfermedades_comunes: paciente.enfermedades_comunes,
      cirugias_adultez: paciente.cirugias_adultez,
      otros_adultez: paciente.otros_adultez,
      desc_enfermedades_comunes: paciente.desc_enfermedades_comunes,
      desc_cirugias_adultez: paciente.desc_cirugias_adultez,
      desc_otros_adultez: paciente.desc_otros_adultez,
      interconsultas: paciente.interconsultas,
    })
  },[])

  useEffect(() => {
    setEstado({...estado, ...values})
  },[values])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleCheck = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Psicodesarrollo' />

        <Opcion titulo = 'Infancia' />
          <TextoMultiline error = { (values.infancia === '')? true : false } label={"Infancia "} name="infancia" value={values.infancia} handleChange = { handleChange } />

        <Opcion titulo = 'Pubertad' />
          <TextoMultiline error = { (values.pubertad === '')? true : false } label={"Pubertad "} name="pubertad" value={values.pubertad} handleChange = { handleChange } />

        <Opcion titulo = 'Adolescencia' />
          <TextoMultiline error = { (values.adolescencia === '')? true : false } label={"Adolescencia "} name="adolescencia" value={values.adolescencia} handleChange = { handleChange } />

        <Opcion titulo = 'Juventud' />
          <TextoMultiline error = { (values.juventud === '')? true : false } label={"Juventud "} name="juventud" value={values.juventud} handleChange = { handleChange } />

        <Opcion titulo = 'Adultez' />
          <TextoMultiline error = { (values.adultez === '')? true : false } label={"Adultez "} name="adultez" value={values.adultez} handleChange = { handleChange } />

        <Opcion titulo = 'Escolaridad' />
          <CheckBox handleChange = { handleCheck } datos = { [ {name: 'estudios_primarios', checked: values.estudios_primarios, label: 'Estudios primarios'}, {name: 'estudios_secundarios', checked: values.estudios_secundarios, label: 'Estudios secundarios'}, {name: 'estudios_terciarios', checked: values.estudios_terciarios, label: 'Estudios terciarios'}, {name: 'estudios_universitarios', checked: values.estudios_universitarios, label: 'Estudios universitarios'}] } />

        <TituloIntermedio titulo = 'Enfermedades comunes de la Adultez' />

        <Opcion titulo = 'Enfermedades' />
          <RadioButton handleChange = { handleChange } datos = { [ {name: 'si',  label: 'Si'}, {name: 'no', label: 'No'}] } titulo = 'Enfermedades' name = 'enfermedades_comunes' value = {values.enfermedades_comunes}/>

          {values.enfermedades_comunes === 'si' &&
            <TextoMultiline error = { (values.enfermedades_comunes === 'si' && values.desc_enfermedades_comunes === '')? true : false } label={"Descripci??n "} name="desc_enfermedades_comunes" value={values.desc_enfermedades_comunes} handleChange = { handleChange } />
          }

        <Opcion titulo = 'Cirug??as' />
          <RadioButton handleChange = { handleChange } datos = { [ {name: 'si',  label: 'Si'}, {name: 'no', label: 'No'}] } titulo = 'Cirug??as' name = 'cirugias_adultez' value = {values.cirugias_adultez}/>

          {values.cirugias_adultez === 'si' &&
            <TextoMultiline error = { (values.cirugias_adultez === 'si' && values.desc_cirugias_adultez === '')? true : false } label={"Descripci??n "} name="desc_cirugias_adultez" value={values.desc_cirugias_adultez} handleChange = { handleChange } />
          }

        <Opcion titulo = 'Otros' />
          <RadioButton handleChange = { handleChange } datos = { [ {name: 'si',  label: 'Si'}, {name: 'no', label: 'No'}] } titulo = 'Cirug??as' name = 'otros_adultez' value = {values.otros_adultez}/>

          {values.otros_adultez === 'si' &&
            <TextoMultiline error = { (values.otros_adultez === 'si' && values.desc_otros_adultez === '')? true : false } label={"Descripci??n "} name="desc_otros_adultez" value={values.desc_otros_adultez} handleChange = { handleChange } />
          }

        <TituloIntermedio titulo = 'Interconsultas' />
          <TextoMultiline label={"Interconsultas "} name="interconsultas" value={values.interconsultas} handleChange = { handleChange } />

      </Grid>
    </Paper>
  )
}

export default Psicodesarrollo
