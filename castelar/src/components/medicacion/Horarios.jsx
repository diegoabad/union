import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'

import { setMedicacion } from '../../redux/actions/index.js'

import Medicamentos from './componentes/Medicamentos.jsx'
import Selector from './componentes/Selector.jsx'
import Lista from '../examen_ingreso/componentes/Lista.jsx'
import MedLista from './componentes/MedLista.jsx'
import Tabla from './componentes/Tabla.jsx'
import Subtitulo from '../admision1/componente/Subtitulo.jsx'


import {Grid, Paper, Button, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';
import { green } from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    },

    '& .MuiTextField-root':{
      width: '300px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '150ch',
    },
    '& .MuiTextField-root':{
      width: '300px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textField: {

      width: '150ch',
    },
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
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
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      backgroundColor: 'white',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiButton-root': {
      fontSize: '1.5rem',
      width: '70px',
      height: '30px',
    }
  },
}));



const Horarios = () => {

  const dispatch = useDispatch();

  const label = [{value: '0:00', label:'0:00'}, {value: '1:00', label:'1:00'}, {value: '2:00', label:'2:00'}, {value: '3:00', label:'3:00'}, {value:'4:00' ,label:'4:00'}, {value: '5:00',label:'5:00'}, {value: '6:00',label:'6:00'}, {value: '7:00',label:'7:00'}, {value: '8:00',label:'8:00'}, {value: '9:00',label:'9:00'}, {value: '10:00',label:'10:00'}, {value: '11:00',label:'11:00'}, {value: '12:00',label:'12:00'}, {value: '13:00',label:'13:00'}, {value: '14:00',label:'14:00'}, {value: '15:00',label:'15:00'}, {value: '16:00',label:'16:00'}, {value: '17:00',label:'17:00'}, {value: '18:00',label:'18:00'}, {value: '19:00',label:'19:00'}, {value: '20:00',label:'20:00'}, {value: '21:00',label:'21:00'}, {value: '22:00',label:'22:00'}, {value: '23:00',label:'23:00'}]

  const [estado , setEstado] = React.useState({medicacion: '' , horarios: [], periodicidad: ''});
  const [values, setValues] = React.useState({medicacion: [], horarios: [], periodicidad: ''});
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    dispatch(setMedicacion(values));
  },[values])

  const handleAutocomple = (event, value) => {
    if(value !== null){
      setEstado({...estado, medicacion: value});
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setEstado({...estado, [name]: value });
  }

  const handleChangeHorarios = (event) => {
    const {value} = event.target
    setEstado({...estado, horarios: estado.horarios.concat(value) });
  }

  const handleChangePeriodicidad = (event) => {
    const {value} = event.target
    setEstado({...estado, periodicidad: value });
  }

  const handleClick = () => {
  if ((estado.horarios.length > 0 && estado.medicacion !== '') && (!values.medicacion.includes(estado.medicacion))){
    setValues({...values, medicacion: values.medicacion.concat(estado.medicacion), horarios: values.horarios.concat([estado.horarios]), periodicidad: values.periodicidad.concat(estado.periodicidad)});
    let id = estado.medicacion.split(' ')[0] * 1
    setRows(rows.concat({index: id, horarios: estado.horarios, periodicidad: estado.periodicidad}))
    setEstado({medicacion: '', horarios: [], periodicidad: ''});
  }
  }

  const handleDelete = (event, value) => {
    setEstado({...estado, horarios: estado.horarios.filter(item => item !== value) });
  }

  const handleDeleteMedicacion = () => {
    setEstado({...estado, medicacion: '' });
  }

  console.log(values)
  const classes = useStyles();

  return (
  <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
    <Grid container spacing={3}>

      <Subtitulo titulo = 'Esquema-Frecuencia' />
      <Grid item xs={12}>
        <Medicamentos handleAutocomple={handleAutocomple} handleChange={handleChange} estado = {estado.medicacion}/>
        <Selector handleChange={handleChangeHorarios} name='horarios' value={estado.horarios} options={label} titulo='Horarios'/>

        <Grid item xs={12}>
          <FormControl className={classes.root}>
            <InputLabel id="demo-simple-select-label">Periodicidad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={estado.periodicidad}
                onChange={handleChangePeriodicidad}
              >
              <MenuItem value={'2 semanas'}>2 Semanas</MenuItem>
              <MenuItem value={'1 mes'}>1 Mes</MenuItem>
              <MenuItem value={'3 meses'}>3 Meses</MenuItem>
              <MenuItem value={'permanente'}>Permanente</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {estado.medicacion !== '' && <MedLista lista = {estado.medicacion} handleDelete = {handleDeleteMedicacion} />}
        <Lista lista = {estado.horarios} handleDelete={handleDelete} />

        {estado.medicacion !== '' && estado.horarios.length > 0 && estado.periodicidad !== '' && 
        <Button className={classes.root} onClick={handleClick} color= 'primary'>
          <QueueIcon style={{fontSize: 30, color: green[500]}}/>
        </Button>
        }
 
      </Grid >

      {rows.length > 0 &&
      <Tabla  rows = {rows}/>
      }

    </Grid>
  </Paper>
  )
}

export default Horarios