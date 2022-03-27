import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import TextoMultiline from './componentes/TextoMultiline.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import RadioButton from '../admision1/componente/RadioButton.jsx';
import Selector from './componentes/Selector.jsx'

import { useDispatch } from 'react-redux'
import { getAdmision } from '../../redux/actions/index'

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

const Perentoreidad = () => {

  const dispatch = useDispatch();

  const initialStateValues= {
    indicadores_riesgo: 'no',
    detalle_indicadores_riesgo: '',
    necesidad_internacion: 'no',
    voluntaria: '',
    detalle_internacion: '',
    tratamiento_indicado: 'no',
    detalle_tratamiento_indicado: '',
    modalidad_atencion: '',
  }

  const [values, setValues] = useState(initialStateValues)

  useEffect(() => {
    dispatch(getAdmision(values))
  }, [values])

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value)

    setValues({ ...values, [name]: value });
  }

  const handleSelect = (event, name) => {
    const { value } = event.target;

    console.log(value, name)

    setValues({ ...values, [name]: value });
  }
  
  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Perentoriedad urgencia' />
          <Opcion titulo = 'Indicadores de riesgo cierto e inminente para sí o para terceros' />
            <RadioButton name = 'indicadores_riesgo' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Indicadores de riesgo' value = {values.indicadores_riesgo} /> 

            {values.indicadores_riesgo === 'si' &&
              <TextoMultiline error = { values.indicadores_riesgo === 'si' && values.detalle_indicadores_riesgo === "" ? true : false } label={"Indicadores"} name="detalle_indicadores_riesgo" value={values.detalle_indicadores_riesgo} handleChange = { handleChange } />
            }

          <Opcion titulo = 'Necesidad de internación' />
            <RadioButton name = 'necesidad_internacion' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Necesidad de internación' value = {values.necesidad_internacion} /> 

            {values.necesidad_internacion === 'si' &&
            <>
              <RadioButton name = 'voluntaria' handleChange = {handleChange} datos = {[{name: 'voluntaria', label: 'Voluntaria'}, {name: 'involuntaria', label: 'Involuntaria'}]} titulo = 'Internación' value = {values.voluntaria} /> 

              <TextoMultiline error = { values.necesidad_internacion === 'si' && values.detalle_internacion === "" ? true : false } label={"Descripción"} name="detalle_internacion" value={values.detalle_internacion} handleChange = { handleChange } />
            </>
            }

          <Opcion titulo = 'Tratamiento indicado' />
            <RadioButton name = 'tratamiento_indicado' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Tratamiendo indicado' value = {values.tratamiento_indicado} />

            {values.tratamiento_indicado === 'si' &&
              <TextoMultiline error = { values.tratamiento_indicado === 'si' && values.detalle_tratamiento_indicado === "" ? true : false } label={"Descripción"} name="detalle_tratamiento_indicado" value={values.detalle_tratamiento_indicado} handleChange = { handleChange } />
            } 

          <Opcion titulo = 'Modalidad de atención' />
            <Selector value = {values.modalidad_atencion} handleChange = {handleSelect} name = 'modalidad_atencion' options = {[{value: 'ambulatorio', label: 'Ambulatorio'}, {value: 'hospitalizacion', label: 'Hospitalización'}]} titulo = 'Modalidad de atención' />


      </Grid>

  </Paper>);
};

export default Perentoreidad;
