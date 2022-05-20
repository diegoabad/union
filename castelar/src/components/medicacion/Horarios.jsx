import React, { useEffect } from 'react'


import Medicamentos from './componentes/Medicamentos.jsx'
import MedLista from './componentes/MedLista.jsx'
import Tabla from './componentes/Tabla.jsx'
import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import TextoMultiline from '../admision/componentes/TextoMultiline';
import Numeros from '../examen_ingreso/componentes/IngresoNros';


import {Grid, Paper, Button, FormControlLabel} from '@material-ui/core'
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import QueueIcon from '@material-ui/icons/Queue';
import { green } from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';

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
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
    },
    '& .MuiFormLabel-root': {
      fontSize: 'medium',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiTypography-body1': {
      fontSize: '1.5rem',
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiButton-root': {
      fontSize: '1.5rem',
      width: '70px',
      height: '30px',
    },
    '& .MuiFormControl-root': {
      width: '50vw',
    }
  },
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#1E90FF',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});



const Horarios = ({medicacion, setMedicacion, paciente}) => {


  const initialStateValues = {
    medicacion: '',
    miligramos: '',
    siete: '',
    ocho: '',
    doce: '',
    dieciseis: '',
    veinte: '',
  }

  const [estado , setEstado] = React.useState(initialStateValues);
  const [values, setValues] = React.useState({medicacion:[], miligramos:[], siete:[], ocho:[], doce:[], dieciseis:[], veinte:[],observaciones: ''});
  const [rows, setRows] = React.useState([]);
  const [state, setState] = React.useState({switch: true});
  const [borrar, setBorrar] = React.useState(false);

  useEffect(() => {
    setMedicacion({...medicacion, ...values})
  },[values])


  useEffect(() => {
    if (paciente) {
      setValues({...values, ...paciente})
      for (let i = 0; i < paciente.medicacion.length; i++){
        let row = {
          medicacion: paciente.medicacion[i],
          miligramos: paciente.miligramos[i],
          siete: paciente.siete[i],
          ocho: paciente.ocho[i],
          doce: paciente.doce[i],
          dieciseis: paciente.dieciseis[i],
          veinte: paciente.veinte[i],
        }
        setRows(rows => [...rows, row])
      }
    }
  },[]);


  const handleAutocomple = (event, value) => {
    if(value !== null){
      setEstado({...estado, medicacion: value});
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    value.length > estado[name].length ? setBorrar(false) : setBorrar(true)
    setEstado({...estado, [name]: value });
  }

  const handleObservaciones = (event) => {
    const {name, value} = event.target
    setValues({...values, [name]: value });
  }


  const handleClick = () => {
  if ((!values.medicacion.includes(estado.medicacion))){
    setValues({...values, medicacion: values.medicacion.concat(estado.medicacion), siete: values.siete.concat(estado.siete), ocho: values.ocho.concat(estado.ocho), doce: values.doce.concat(estado.doce), dieciseis: values.dieciseis.concat(estado.dieciseis), veinte: values.veinte.concat(estado.veinte), miligramos: values.miligramos.concat(estado.miligramos)});
    setRows(rows.concat(estado))
    setEstado({medicacion: '', miligramos: '', siete: '', ocho: '', doce: '', dieciseis: '', veinte: ''});
  }
  }


  const handleDeleteMedicacion = (evt, name) => {
    setEstado({...estado, [name]: '' });
  }

  const handleChecked = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  const handleDeleteTable = (event, index) => {
    rows.splice(index, 1)
    setRows(rows)
    values.medicacion.splice(index, 1)
    values.miligramos.splice(index, 1)
    values.siete.splice(index, 1)
    values.ocho.splice(index, 1)
    values.doce.splice(index, 1)
    values.dieciseis.splice(index, 1)
    values.veinte.splice(index, 1)
    setValues({...values})
  }


  const classes = useStyles();

  return (
  <Paper className={classes.root} style = { {backgroundColor:'#1E90FF'} }>
    <Grid container spacing={3}>
  
      <Grid item xs={11} style ={{display:'flex', flexDirection:'column'}}>
        <Subtitulo titulo = 'Esquema-Frecuencia' /> 
        <Divider style={{color: 'Black'}}/>

        <FormControlLabel
        control={<IOSSwitch checked={state.switch} onChange={handleChecked} name="switch" />}
        label={state.switch ? 'Buscar por droga' : 'Buscar por nombre de medicacion'}
      />
        <Medicamentos handleAutocomple={handleAutocomple} handleChange={handleChange} estado = {estado.medicacion} filtrar={state.switch} borrar={borrar}/>

        <Numeros name="miligramos" label='Miligramos' value={estado.miligramos} handleChange = { handleChange }/>
        
        </Grid>

        <Grid item xs = {11}>

          <Numeros name='siete' label = ' 7:00' value={estado.siete} handleChange = { handleChange }/>

          <Numeros name='ocho' label = ' 8:00' value={estado.ocho} handleChange = { handleChange }/>

          <Numeros name='doce' label = ' 12:00' value={estado.doce} handleChange = { handleChange }/>

          <Numeros name='dieciseis' label = ' 16:00' value={estado.dieciseis} handleChange = { handleChange }/>

          <Numeros name='veinte' label = ' 20:00' value={estado.veinte} handleChange = { handleChange }/>

        </Grid>

        <Grid item xs = {11}>

        {estado.medicacion !== '' && <MedLista lista = {estado.medicacion} handleDelete = {handleDeleteMedicacion} name = 'medicacion'/>}

        {estado.miligramos !== '' && <MedLista lista = {estado.miligramos + 'miligramos'} handleDelete = {handleDeleteMedicacion} name = 'miligramos'/>}

        {estado.siete !== '' && <MedLista lista = {`7:00 cantidad: ${estado.siete}`} handleDelete = {handleDeleteMedicacion} name = 'siete'/>}

        {estado.ocho !== '' && <MedLista lista = {`8:00 cantidad: ${estado.ocho}`} handleDelete = {handleDeleteMedicacion} name = 'ocho'/>}

        {estado.doce !== '' && <MedLista lista = {`12:00 cantidad: ${estado.doce}`} handleDelete = {handleDeleteMedicacion} name = 'doce'/>}

        {estado.dieciseis !== '' && <MedLista lista = {`16:00 cantidad: ${estado.dieciseis}`} handleDelete = {handleDeleteMedicacion} name = 'dieciseis'/>}

        {estado.veinte !== '' && <MedLista lista = {`20:00 cantidad: ${estado.veinte}`} handleDelete = {handleDeleteMedicacion} name = 'veinte'/>}
        

        {estado.medicacion !== '' && estado.miligramos !== '' && (estado.siete !== '' || estado.ocho !=='' || estado.doce !== '' || estado.dieciseis !== '' || estado.veinte !== '') &&
        <Button className={classes.root} onClick={handleClick} color= 'primary'>
          <QueueIcon style={{fontSize: 30, color: green[500]}}/>Agregar
        </Button>
        }

        </Grid>
      
      {rows.length > 0 &&
      <Tabla  rows = {rows} handleDeleteTable = {handleDeleteTable} deleteOnTable = {true}/>
      }

      <Opcion titulo = 'Observaciones' />
      <TextoMultiline error = { false } label='Observaciones' name='observaciones' value={values.observaciones} handleChange = { handleObservaciones } minRows = {4} maxRows = {4}/>
      
      
    </Grid>
  </Paper>
  )
}

export default Horarios