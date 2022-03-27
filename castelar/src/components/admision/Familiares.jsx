import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, FormControl, Select, MenuItem, InputLabel, FormGroup, Paper} from '@material-ui/core/';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion';
import IngresoNros from '../examen_ingreso/componentes/IngresoNros.jsx'
import TextoMultiline from './componentes/TextoMultiline.jsx';
import RadioButton from '../admision1/componente/RadioButton';

import { useDispatch, useSelector } from 'react-redux';
import { getAdmision } from '../../redux/actions/index'

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    },
    '& .MuiSelect-selectMenu': {
      fontSize: 'medium',
    },
    '& .MuiInputBase-root': {
      lineHeight: '3em',
    },
    '& .MuiMenuItem-root': {
      fontSize: 'smaller',
    },
    '& .MuiInputLabel-root': {
      fontSize: 'initial',
    },
    '& .MuiInputLabel-shrink': {
      transform: theme.spacing(1, 5), 
      transformOrigin: 'top left',
  }
  }
}))

const Familiares = () => {


  const dispatch = useDispatch();

  const initialStateValues= {
    situacion_actual: '',
    padre:'vivo',
    edad_padre: '', 
    madre: 'viva',
    edad_madre: '',
    hermano:'vivo',
    edad_hermano: '',
    hijo:'vivo',
    edad_hijo: '',
    familiares: 'vivo',
    edad_familiares: '',
    antecedentes_psiquiatricos: 'no',
    detalle_antecedentes_psiquiatricos: '',
    antecedentes_adicciones: 'no',
    detalle_antecedentes_adicciones: '',
    antecedentes_enfermedades_somaticas: 'no',
    detalle_antecedentes_enfermedades_somaticas: '',
    habitos_alimentacion: 'no',
    detalle_habitos_alimentacion: '',
    experiencias: 'no',
    detalle_experiencias: '',
  }
  const [values, setValues] = useState(initialStateValues)

  useEffect(() => {
    dispatch(getAdmision(values))
  },[values])
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }  

  const handleChangeEdad = (event) => {
    const parsValue = parseInt(event.target.value)
      
    if (((Number.isInteger(parsValue)) && (parsValue >= 0)) || (event.target.value === '')){
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  }
  

  const classes = styles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Información Familiar' /> 

        <Opcion titulo = 'Situación Actual' /> 
          <TextoMultiline error = { values.situacion_actual === '' ? true : false } label={"Situación actual"} name="situacion_actual" value={values.situacion_actual} handleChange = { handleChange } /> 

        <Opcion titulo = 'Ámbito sociofamiliar' /> 

          <Grid container item xs = {3} spacing = {2} justifyContent="flex-start"  alignItems="stretch" style = {{marginLeft: 4}}>



            <Grid item xs> 
            <FormControl className={classes.root} fullWidth>
              <InputLabel id="padre">Padre</InputLabel>
                <FormGroup className={classes.root}>
                <Select
                  labelId="padre"
                  id="padre"
                  name="padre"
                  value={values.padre}
                  onChange={handleChange}
                  >
                  <MenuItem value='vivo' className={classes.root}>vivo</MenuItem>
                  <MenuItem value='ignora' className={classes.root}>ignora</MenuItem>
                  <MenuItem value='sano' className={classes.root}>sano</MenuItem>
                  <MenuItem value='enfermo' className={classes.root}>enfermo</MenuItem>
                  <MenuItem value='fallecido' className={classes.root}>fallecido</MenuItem>
                </Select> 
                </FormGroup>
            </FormControl>
            </Grid>

            {values.padre !== 'ignora' && (
              <IngresoNros label = 'Edad' name = 'edad_padre' handleChange = {handleChangeEdad} value = {values.edad_padre} />
            )}
          </Grid>

          <Grid container item xs = {3} spacing = {2} justifyContent="flex-start"  alignItems="stretch" style = {{marginLeft: 4}}>
            <Grid item xs > 
            <FormControl className={classes.root} fullWidth>
              <InputLabel id="madre">Madre</InputLabel>
                <FormGroup className={classes.root}>
                <Select
                  labelId="madre"
                  id="madre"
                  name="madre"
                  value={values.madre}
                  onChange={handleChange}
                  >
                  <MenuItem value='viva'>viva</MenuItem>
                  <MenuItem value='ignora'>ignora</MenuItem>
                  <MenuItem value='sana'>sana</MenuItem>
                  <MenuItem value='enferma'>enferma</MenuItem>
                  <MenuItem value='fallecida'>fallecida</MenuItem>
                </Select> 
                </FormGroup>
            </FormControl>
            </Grid> 

            {values.madre !== 'ignora' && (
              <IngresoNros label = 'Edad' name = 'edad_madre' handleChange = {handleChangeEdad} value = {values.edad_madre} />
            )}
          </Grid>
          
          <Grid container item xs = {3} spacing = {2} justifyContent="flex-start"  alignItems="stretch" style = {{marginLeft: 4}}>

            <Grid item xs > 
            <FormControl className={classes.root} fullWidth>
              <InputLabel id="hermano">Hermano</InputLabel>
                <FormGroup className={classes.root}>
                <Select
                  labelId="hermano"
                  id="hermano"
                  name="hermano"
                  value={values.hermano}
                  onChange={handleChange}
                  >
                  <MenuItem value='vivo'>vivo</MenuItem>
                  <MenuItem value='ignora'>ignora</MenuItem>
                  <MenuItem value='sano'>sano</MenuItem>
                  <MenuItem value='enfermo'>enfermo</MenuItem>
                  <MenuItem value='fallecido'>fallecido</MenuItem>
                </Select> 
                </FormGroup>
            </FormControl>
            </Grid>

            {values.hermano !== 'ignora' && (
            <IngresoNros label = 'Edad' name = 'edad_hermano' handleChange = {handleChangeEdad} value = {values.edad_hermano} />
            )}
          </Grid>

          <Grid container item xs = {3} spacing = {2} justifyContent="flex-start"  alignItems="stretch" style = {{marginLeft: 4}}>

            <Grid item xs > 
            <FormControl className={classes.root} fullWidth>
              <InputLabel id="hermano">Hijo</InputLabel>
                <FormGroup>
                <Select
                  labelId="hijo"
                  id="hijo"
                  name="hijo"
                  value={values.hijo}
                  onChange={handleChange}
                  >
                  <MenuItem value='vivo'>vivo</MenuItem>
                  <MenuItem value='ignora'>ignora</MenuItem>
                  <MenuItem value='sano'>sano</MenuItem>
                  <MenuItem value='enfermo'>enfermo</MenuItem>
                  <MenuItem value='fallecido'>fallecido</MenuItem>
                </Select> 
                </FormGroup>
            </FormControl>
            </Grid>

            {values.hijo !== 'ignora' && (
            <IngresoNros label = 'Edad' name = 'edad_hijo' handleChange = {handleChangeEdad} value = {values.edad_hijo} />
            )}
          </Grid>

          <Grid container item xs = {3} spacing = {2} justifyContent="flex-start"  alignItems="stretch" style = {{marginLeft: 4}}>

            <Grid item xs > 
            <FormControl className={classes.root} fullWidth>
              <InputLabel id="familiares">Abuelos/Tíos/Primos</InputLabel>
                <FormGroup>
                <Select
                  labelId="familiares"
                  id="familiares"
                  name="familiares"
                  value={values.familiares}
                  onChange={handleChange}
                  >
                  <MenuItem value='vivo'>vivo</MenuItem>
                  <MenuItem value='ignora'>ignora</MenuItem>
                  <MenuItem value='sano'>sano</MenuItem>
                  <MenuItem value='enfermo'>enfermo</MenuItem>
                  <MenuItem value='fallecido'>fallecido</MenuItem>
                </Select> 
                </FormGroup>
            </FormControl>
            </Grid>

            {values.familiares !== 'ignora' && (
            <IngresoNros label = 'Edad' name = 'edad_familiares' handleChange = {handleChangeEdad} value = {values.edad_familiares} />
            )}
            </Grid> 

            <Opcion titulo = 'Familiares con antecedentes psiquiátricos' />
              <RadioButton name = 'antecedentes_psiquiatricos' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Antecedentes psiquiátricos' value = {values.antecedentes_psiquiatricos} />

              {values.antecedentes_psiquiatricos === 'si' && (
              <TextoMultiline error = { ((values.antecedentes_psiquiatricos === 'si') && (values.detalle_antecedentes_psiquiatricos === '')) ? true : false } label={"Antecedentes"} name="detalle_antecedentes_psiquiatricos" value={values.detalle_antecedentes_psiquiatricos} handleChange = { handleChange } />
              )}

            <Opcion titulo = 'Antecedentes familiares con adicciones' />
              <RadioButton name = 'antecedentes_adicciones' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Antecedentes familiares de adicciones' value = {values.antecedentes_adicciones} />

              {values.antecedentes_adicciones === 'si' && (
              <TextoMultiline error = { ((values.antecedentes_adicciones === 'si') && (values.detalle_antecedentes_adicciones === '')) ? true : false } label={"Antecedentes de adicciones"} name="detalle_antecedentes_adicciones" value={values.detalle_antecedentes_adicciones} handleChange = { handleChange } />
              )}

            <Opcion titulo = 'Antecedentes familiares de enfermedades somáticas' />
              <RadioButton name = 'antecedentes_enfermedades_somaticas' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Antecedentes de enfermedades somáticas' value = {values.antecedentes_enfermedades_somaticas} />

              {values.antecedentes_enfermedades_somaticas === 'si' && (
              <TextoMultiline error = { ((values.antecedentes_enfermedades_somaticas === 'si') && (values.detalle_antecedentes_enfermedades_somaticas === '')) ? true : false } label={"Antecedentes de adicciones"} name="detalle_antecedentes_enfermedades_somaticas" value={values.detalle_antecedentes_enfermedades_somaticas} handleChange = { handleChange } />
              )}

            <Opcion titulo = 'Hábitos de alimentación' />
              <RadioButton name = 'habitos_alimentacion' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Alimentación' value = {values.habitos_alimentacion} />

              {values.habitos_alimentacion === 'si' && (
              <TextoMultiline error = { ((values.habitos_alimentacion === 'si') && (values.detalle_habitos_alimentacion === '')) ? true : false } label={"Detalles de alimentación"} name="detalle_habitos_alimentacion" value={values.detalle_habitos_alimentacion} handleChange = { handleChange } />
              )}

            <Opcion titulo = 'Experiencias Lúdicas, Hobbies' />
              <RadioButton name = 'experiencias' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Alimentación' value = {values.experiencias} />

              {values.experiencias === 'si' && (
              <TextoMultiline error = { ((values.experiencias === 'si') && (values.detalle_experiencias === '')) ? true : false } label={"Detalles Experiencias lúdicas, hobbies"} name="detalle_experiencias" value={values.detalle_experiencias} handleChange = { handleChange } />
              )}

          </Grid>
    </Paper>
  )
}

export default Familiares
