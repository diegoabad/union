import React, {useEffect} from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Slider, Card, CardContent, Typography, Divider } from '@material-ui/core/';

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
      backgroundColor: 'white',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiTypography-body1': {
      fontSize: '1.5rem',
    },
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: 'rgb(32, 135, 252)',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: 'rgb(32, 135, 252)',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Tratamiento = ({estado, setEstado, paciente, control}) => {

  const initialStateValues = {
    default: control,
    consultas: 5,
    frecuencia: '',
    duracion: '',
    dispositivo: '',
    pruebas: '',
    observaciones: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues({...values, 
        default: paciente.consultas,
        consultas: paciente.consultas,
        frecuencia: paciente.frecuencia,
        duracion: paciente.duracion,
        dispositivo: paciente.dispositivo,
        pruebas: paciente.pruebas,
        observaciones: paciente.observaciones,
      })
    }
  },[]);


  useEffect(() => {
    setEstado({...estado, ...values})
  }, [values])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value});
  }

  const handleSlider = (event) => {
    const { innerText } = event.target;
    const value = innerText * 1;
    if (value > 0 && value < 29) {
      setValues({...values, consultas: innerText * 1});
    }
  }

  const classes = useStyles();
  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={2}>

        <Subtitulo titulo = "Tratamiento sugerido" />

          <Card style= { { marginLeft: '10px', marginBottom: '10px' } }>
            <CardContent>
              <Typography gutterBottom>Cantidad de consultas</Typography>
              <Divider style={{color: 'Black', marginTop: '10px', marginBottom: '10px'}}/>
              <Typography gutterBottom style = { { textAlign: 'center' } }>{values.consultas}</Typography>
              <Divider style={{color: 'Black', marginTop: '10px', marginBottom: '10px'}}/>
              <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" name = 'consultas' defaultValue={values.default} min = {1} max = {28} onChange = {handleSlider}/>
              <Divider style={{color: 'Black', marginTop: '10px', marginBottom: '10px'}}/>
              <Typography gutterBottom>Frecuencia</Typography>
              <Radio handleChange = { handleChange } name = { 'frecuencia' } value = {values.frecuencia} titulo = 'Frecuencia' datos = {[{name:'semanal', label: 'Semanal'},{name: 'quincenal', label: 'Qincenal'},{name: 'mensual', label: 'Mensual'}]}/>
              <Divider style={{color: 'Black', marginTop: '10px', marginBottom: '10px'}}/>
              <Typography gutterBottom>Duración de la sesión</Typography>
              <Radio handleChange = { handleChange } name = { 'duracion' } value = {values.duracion} titulo = 'Duración de la sesión' datos = {[{name:'30', label: '30 minutos'},{name: '60', label: '60 minutos'},{name: '90', label: '90 minutos'}]}/>
              <Divider style={{color: 'Black', marginTop: '10px', marginBottom: '10px'}}/>
              <Typography gutterBottom>Dispositivo</Typography>
              <Radio handleChange = { handleChange } name = { 'dispositivo' } value = {values.dispositivo} titulo = 'Dispositivo' datos = {[{name:'individual', label: 'Individual'},{name: 'grupal', label: 'Grupal'},{name: 'familiar', label: 'Familiar'},{name: 'vincular', label: 'Vincular'}]}/>
            </CardContent>
          </Card>

        <Subtitulo titulo = "Pruebas a administrar" />
          <Text handleChange = { handleChange } name = { 'pruebas' } value = {values.pruebas} titulo = 'Pruebas a administrar' error = {false} minRows = {12} maxRows = {12}/>

        <Subtitulo titulo = "Observaciones" />
          <Text handleChange = { handleChange } name = { 'observaciones' } value = {values.observaciones} titulo = 'Pruebas a administrar' error = {false} minRows = {12} maxRows = {12}/>


      </Grid>
    </Paper>
  )
}

export default Tratamiento