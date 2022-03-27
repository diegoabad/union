import React, { useEffect } from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid,  Typography, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, FormGroup, Checkbox,  Paper } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useDispatch, useSelector } from 'react-redux';
import { getAdmision } from '../../redux/actions/index'

import data from '../datos/vademecum.json'

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
    },

    '& .MuiTextField-root':{
      width: '300px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '150ch',
    },
    borde: {
      borderStyle: 'inset'
    }
  },
}));

const Antecedentes_psico = () => {

  const admision = useSelector(state => state.admision)
  const dispatch = useDispatch();

  const initialStateValues= {
    psico_previo: 'NO',
    antecedentes_psico: "",
    fechaInicio: new Date('16 oct 1900'),
    internaciones_previas: 'NO',
    medicacion_previa: 'NO',
    psicofarmacos: [],
    adherente_tratamiento: 'NO',
    intentos_suicidio: 'NO',
    modalidad_intento_suicidio: '',
    antecedente_conducta_violenta: "NO",
    conducta_violenta: "",
    autoagresividad: "NO",
    detalle_autoagresividad: "",
    heteroagresividad: "NO",
    detalle_heteroagresividad: "",
    habito_adicciones: "NO",
    tabaquismo: "NO",
    detalle_tabaquismo: "",
    alcoholismo: "NO",
    detalle_alcoholismo: "",
    drogas: "NO",
    detalle_drogas: "",
    psiquiatrico: false,
    sistemico: false,
    tcc: false,
    psicodinamicas: false,
    desconoce: false,
    otro: false,
    detalle_tratamiento: "",
  }
  

  const [values, setValues] = React.useState(initialStateValues);
  const [inicio, setInicio] = React.useState('')
  const [error, setError] = React.useState(true)
  const [vademecum, setVademecum] = React.useState([])

  useEffect(async () => {
    dispatch(getAdmision(values))
    setVademecum(data)
  } , [])


  const handleChange = (event) => {
    if((values.calle !== '') && (values.localidad !== '') && (values.cod_post !== '') && (values.provincia !== '') && (values.nacionalidad !== '')){
      setError(false)
    }
    const {name, value} = event.target
    setValues({...values, [name]: value });
    dispatch(getAdmision({[name]: value}))
  }

  const handleAutocomple = (event, value) => {
    setValues({...values, psicofarmacos: value})
    dispatch(getAdmision({psicofarmacos: value}))
  }

  const handleChecked = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
    dispatch(getAdmision({[event.target.name]: event.target.checked}))
  };

  const handleDateChange = (date) => {

    let años = ''

    if((date !== null) && (date !== 'Invalid Date')) {
      let today = new Date();
      let day = today.getDate() - date.getDate() 
      let month = (today.getMonth() + 1) - (date.getMonth() + 1)
      let year = today.getFullYear() - date.getFullYear();
      if ((!day) || (!month) || (!year)) años = 'error'
      if ((year < 0) || (year === 0 && month < 0) || (year === 0 && month === 0 && day < 0)) años = 'error'

      if(años !== 'error'){
        setValues({ ...values, fechaInicio: date})
        dispatch(getAdmision({fechaInicio: date}))
      }else 
        setInicio('error');
    }else{
      setInicio('error')
    }
    
  };

  const classes = useStyles();

  return (
    <Paper>
        <Grid container spacing = {1} style = {{marginLeft: 2, marginBottom: 5}}>
          <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = {{margin: "10px"}}>
              <Typography variant="h4" component="div" align="left"> Otros antecedentes psicopatológicos </Typography>
          </Grid>

          <Grid container item xs = {12} spacing = {2} justifyContent="flex-start"  style = {{marginLeft: 4}}>

            <Grid 
            spacing = {2}
            container
            item xs = {12} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

            <Grid item >
              <FormControl variant="outlined" label="Antecedentes">
                <FormLabel>Tratamiento psicológico/psicopatológico previo</FormLabel>
                  <RadioGroup
                    name="psico_previo"
                    value={values.psico_previo}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          { values.psico_previo === 'SI' &&
          <>
          <Grid item >
            <TextField className={classes.textField} error = {((values.psico_previo === 'SI') && (values.antecedentes_psico === '')) ? true : false} fullWidth variant="outlined"  label={"Antecedentes psicológicos"} name="antecedentes_psico" value={values.antecedentes_psico} onChange={handleChange}/>
          </Grid>

          <Grid item >
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardDatePicker
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-dialog"
                label="Fecha de inicio"
                name="fechaInicio"
                value={values.fechaInicio}
                onChange={handleDateChange}
                KeyboardButtonProps={{
              'aria-label': 'change date',
              }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Tratamientos </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={values.psiquiatrico} onChange={handleChecked} name="psiquiatrico" />}
                  label="Psiquiátrico"
                />
                <FormControlLabel
                  control={<Checkbox checked={values.sistemico} onChange={handleChecked} name="sistemico" />}
                  label="T. sistémico"
                />
                <FormControlLabel
                  control={<Checkbox checked={values.tcc} onChange={handleChecked} name="tcc" />}
                  label="TCC"
                />
                <FormControlLabel
                  control={<Checkbox checked={values.psicodinamicas} onChange={handleChecked} name="psicodinamicas" />}
                  label="T. Psicodinámicas"
                />
                <FormControlLabel
                  control={<Checkbox checked={values.desconoce} onChange={handleChecked} name="desconoce" />}
                  label="Desconoce"
                />
                <FormControlLabel
                  control={<Checkbox checked={values.otro} onChange={handleChecked} name="otro" />}
                  label="Otro"
                />
              </FormGroup>
          </FormControl>
          
              { values.otro === true &&
                <Grid item xs >
                <TextField className={classes.textField} fullWidth variant="outlined" error={((values.otro === true) && (values.detalle_tratamiento === '')) ? true : false} label={"Tratamiento"} name="detalle_tratamiento" value={values.detalle_tratamiento} onChange={handleChange}/>
              </Grid>
              }

          </>
          }

          </Grid >

            <Grid item xs = {12} sm = {8} md={2} style = {{borderStyle: 'ridge', margin: '10px'}}>
              <FormControl variant="outlined" label="Antecedentes">
                <FormLabel>Internaciones previas</FormLabel>
                  <RadioGroup
                    name="internaciones_previas"
                    value={values.internaciones_previas}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {12} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            // alignItems="stretch">
          >

          <Grid item >
              <FormControl variant="outlined" label="Antecedentes">
                <FormLabel>Medicación psiquiátrica previa</FormLabel>
                  <RadioGroup
                    name="medicacion_previa"
                    value={values.medicacion_previa}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          { values.medicacion_previa === 'SI' &&
          <>
          {/* <Grid item >
            <TextField className={classes.textField} fullWidth variant="outlined" error = {((values.medicacion_previa === 'SI') && (values.psicofarmacos === '')) ? true : false} label={"Psicofarmacos"} name="psicofarmacos" value={values.psicofarmacos} onChange={handleChange}/>
          </Grid> */}
      <Grid item xs
      >
      <Autocomplete
        multiple
        id="free-solo-2-demo"
        disableClearable
        options={vademecum.map((option) => option.Descripcion)}
        onChange={handleAutocomple}
        renderInput={(params) => (
          <TextField
            {...params}
            error = {((values.medicacion_previa === 'SI') && (values.psicofarmacos === [])) ? true : false}
            label={"Psicofarmacos"}
            margin="normal"
            variant="outlined"
            name="psicofarmacos"
            value={values.psicofarmacos}
            onChange={handleChange}
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      </Grid>
      </>} 
      {/* <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      /> */}

          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {12} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
          >

          <Grid item >
              <FormControl variant="outlined" label="Antecedentes">
                <FormLabel>Paciente adherente al tratamiento</FormLabel>
                  <RadioGroup
                    name="adherente_tratamiento"
                    value={values.adherente_tratamiento}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>
          

          { values.adherente_tratamiento === 'SI' &&
            <>
            <Grid item >
              <FormControl variant="outlined" label="Antecedentes">
                <FormLabel>Intento de suicidio</FormLabel>
                  <RadioGroup
                    name="intentos_suicidio"
                    value={values.intentos_suicidio}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

            {values.intentos_suicidio === 'SI' &&
              <Grid item >
                <TextField className={classes.textField} fullWidth variant="outlined" error = {((values.intentos_suicidio === 'SI') && (values.modalidad_intento_suicidio === '')) ? true : false} label={"Modalidad de intento de suicidio"} name="modalidad_intento_suicidio" value={values.modalidad_intento_suicidio} onChange={handleChange}/>
              </Grid>
            }
            </>
          }

          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {12} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
          >

            <Grid item >
              <FormControl variant="outlined" label="Antecedentes">
                <FormLabel>Antecedente conducta violenta</FormLabel>
                  <RadioGroup
                    name="antecedente_conducta_violenta"
                    value={values.antecedente_conducta_violenta}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
            </Grid>
              {values.antecedente_conducta_violenta === 'SI' &&
              <>
              <Grid item >
                <TextField className={classes.textField} error = { ((values.antecedente_conducta_violenta ==='SI') && (values.conducta_violenta === '')) ? true : false } fullWidth variant="outlined"  label={"conducta violenta"} name="conducta_violenta" value={values.conducta_violenta} onChange={handleChange}/>
              </Grid> 

              <Grid item >
              <FormControl variant="outlined" label="Autoagresividad">
                <FormLabel>Autoagresividad</FormLabel>
                  <RadioGroup
                    name="autoagresividad"
                    value={values.autoagresividad}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          { values.autoagresividad === 'SI' &&
            <Grid item >
              <TextField className={classes.textField} error = {((values.autoagresividad === 'SI') && (values.detalle_autoagresividad === '')) ? true : false} fullWidth variant="outlined"  label={"conducta de autoagresividad"} name="detalle_autoagresividad" value={values.detalle_autoagresividad} onChange={handleChange}/>
            </Grid> 
          }

          <Grid item >
              <FormControl variant="outlined" label="Heteroagresividad">
                <FormLabel>Autoagresividad</FormLabel>
                  <RadioGroup
                    name="heteroagresividad"
                    value={values.heteroagresividad}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          { values.heteroagresividad === 'SI' &&
            <Grid item >
              <TextField className={classes.textField} error = { ((values.heteroagresividad === 'SI') && (values.detalle_heteroagresividad === '')) ? true : false } fullWidth variant="outlined"  label={"conducta de heteroagresividad"} name="detalle_heteroagresividad" value={values.detalle_heteroagresividad} onChange={handleChange}/>
            </Grid> 
          }
              </>
              }

            </Grid>

            <Grid 
            spacing = {2}
            container
            item xs = {12} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

            <Grid item >
              <FormControl variant="outlined" label="hábitos y adicciones">
                <FormLabel>hábitos y adicciones</FormLabel>
                  <RadioGroup
                    name="habito_adicciones"
                    value={values.habito_adicciones}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>
              {values.habito_adicciones === 'SI' &&
              <>

              <Grid item >
              <FormControl variant="outlined" label="Tabaquismo">
                <FormLabel>Tabaquismo</FormLabel>
                  <RadioGroup
                    name="tabaquismo"
                    value={values.tabaquismo}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          { values.tabaquismo === 'SI' &&
            <Grid item >
              <TextField className={classes.textField} error = { ((values.tabaquismo === 'SI') && (values.detalle_tabaquismo === '')) ? true : false} fullWidth variant="outlined"  label={"conducta de tabaquismo"} name="detalle_tabaquismo" value={values.detalle_tabaquismo} onChange={handleChange}/>
            </Grid> 
          }

          <Grid item >
              <FormControl variant="outlined" label="Alcoholismo">
                <FormLabel>Alcoholismo</FormLabel>
                  <RadioGroup
                    name="alcoholismo"
                    value={values.alcoholismo}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          { values.alcoholismo === 'SI' &&
            <Grid item >
              <TextField className={classes.textField} error = { ((values.alcoholismo === 'SI') && (values.detalle_alcoholismo === '')) ? true : false} fullWidth variant="outlined"  label={"conducta de alcoholismo"} name="detalle_alcoholismo" value={values.detalle_alcoholismo} onChange={handleChange}/>
            </Grid> 
          }

          <Grid item >
              <FormControl variant="outlined" label="Drogas: lícitas/ilícitas">
                <FormLabel>Drogas: lícitas/ilícitas</FormLabel>
                  <RadioGroup
                    name="drogas"
                    value={values.drogas}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          { values.drogas === 'SI' &&
            <Grid item >
              <TextField className={classes.textField} error = { ((values.drogas === 'SI') && (values.detalle_drogas === '')) ? true : false} fullWidth variant="outlined"  label={"conducta de drogas"} name="detalle_drogas" value={values.detalle_drogas} onChange={handleChange}/>
            </Grid> 
          }
              </>
              }
              </Grid>

            </Grid>

          </Grid>

    </Paper>
  )
}

export default Antecedentes_psico
