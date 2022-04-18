import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Lista from '../examen_ingreso/componentes/Lista.jsx'
import TextoMultiline from './componentes/TextoMultiline.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'

import { useDispatch, useSelector} from 'react-redux';
import { getCode } from '../../redux/actions/index'

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
      width: '90%',
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
    '& MuiAutocomplete-root': {
      width: '80%',
    }
  },
}));

const DiagnosticoActual = (props) => {

  const{setEnfermedades, estado, setEstado, paciente} = props;
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const codigo = useSelector(state => state.codigo);

  const initialStateValues= {
    diagnostico_actual: [],
    observaciones: '',
  }

  const [values, setValues] = useState(initialStateValues)
  const [code, setCode] = useState({diagnostico_actual: ''})

  useEffect(() => {
    if (paciente) {
      setValues({...values, 
        diagnostico_actual: paciente.diagnostico_actual,
        observaciones: paciente.observaciones,
      })
    }
  },[]);

  useEffect(() => {
    setEstado({...estado, ...values})
  }, [values])

  useEffect(() => {
    setEnfermedades(codigo)
  },[codigo])


  const handleClick = async (event) => {
    event.preventDefault();
    dispatch(getCode(code[props.nombre], token))
  }

  const handleChangeTexto = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleChange = (event) => {
    setCode({...code, [event.target.name]: event.target.value})
    props.setNombre(event.target.name)
  }

  const handleSelect = (event, value) => {
    if (value !== null) { 
      setCode({...code, diagnostico_actual: value} )
      setValues({...values, diagnostico_actual: [...values.diagnostico_actual, value]})
      setEnfermedades(props.data)
    }
  }

  const handleDelete = (event, value) => {
    const filtrado = values.diagnostico_actual.filter(item => item !== value)
    setValues({...values, diagnostico_actual: filtrado})
  }

  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Diagnóstico actual ó presuntivo' />
          
          <Autocomplete
            style = {{width: '80%'}}
            id="diagnostico_actual"
            defaultValue=''
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('diagnostico_actual')}
            name="diagnostico_actual"
            renderInput={(params) => (

            <Grid container item xs > 
              <TextField
                className={classes.root}
                {...params}
                label={"Diagnóstico actual o presuntivo"}
                margin="normal"
                variant="outlined"
                name="diagnostico_actual"
                value={values.diagnostico_actual}
                onChange={handleChange}
                InputProps={{ ...params.InputProps, type: 'search' }}
              />  

              <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </Grid>

            )}
          />

              {values.diagnostico_actual.length > 0 && 
                <Lista lista = {values.diagnostico_actual} handleDelete = {handleDelete} />
              }

            <Opcion titulo = 'Observaciones' />
              <TextoMultiline error = {false} label = 'Observaciones' name = 'observaciones' value = {values.observaciones} handleChange = { handleChangeTexto }/>

      </Grid>
  </Paper>
  )
};

export default DiagnosticoActual;
