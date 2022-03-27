import React, { useEffect } from 'react'
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid,  Typography, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Paper } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { getAdmision } from '../../redux/actions/index'


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
  },
}));

const Ambito_sociofamiliar = () => {

  const admision = useSelector(state => state.admision)
  const dispatch = useDispatch();

  const initialStateValues= {
    convivencia: '',
    calidad_convivencia: 'Buena',
    detalle_calidad_convivencia: '',
    socio_ambiantales: '',
    familiares_antecedentes_psiquiatricos: 'NO',
    familiar_con_antecedente: '',
    patologia: '',
    familiares_antecedentes_suicidio: 'NO',
    familiar_con_antecedente_suicidio: '',
    familiares_antecedentes_adicciones: 'NO',
    familiar_con_antecedente_adicciones: '',
    familiares_antecedentes_somática: '',
    habitos_alimentacion: '',
    experiencias_ludicas: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    dispatch(getAdmision(values))
  }, [])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    dispatch(getAdmision({[event.target.name]: event.target.value}))
  }

  const classes = useStyles();

  return (
    <Paper>
        <Grid container spacing = {1} style = {{marginLeft: 2, marginBottom: 5}}>
          <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = {{margin: "10px"}}>
              <Typography variant="h4" component="div" align="left"> Ámbito socio familiar </Typography>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} error = { (values.convivencia === '') ? true : false} fullWidth variant="outlined"  label={"convive con"} name="convivencia" value={values.convivencia} onChange={handleChange}/>
          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {12} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

          <Grid item xs >
              <FormControl variant="outlined" label="Antecedentes">
                <FormLabel>Calidad de convivencia</FormLabel>
                  <RadioGroup
                    name="calidad_convivencia"
                    value={values.calidad_convivencia}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="Buena" control={<Radio />} label="Buena" />
                    <FormControlLabel value="Mala" control={<Radio />} label="Mala" /> 
                    <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                  </RadioGroup>
              </FormControl>
          </Grid>

          <Grid item xs >
            <TextField className={classes.textField} error = {(values.detalle_calidad_convivencia === '') ? true : false } fullWidth variant="outlined"  label={"detalle de calidad de convivencia"} name="detalle_calidad_convivencia" value={values.detalle_calidad_convivencia} onChange={handleChange}/>
          </Grid>

          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} error = { values.socio_ambiantales === '' ? true : false } fullWidth variant="outlined"  label={"Circunstancias socio-ambientales familiares"} name="socio_ambiantales" value={values.socio_ambiantales} onChange={handleChange}/>
          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {12} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

          <Grid item xs >
              <FormControl variant="outlined" label="familiares con antecedentes psiquiátricos">
                <FormLabel>Familiares con antecedentes psiquiátricos</FormLabel>
                  <RadioGroup
                    name="familiares_antecedentes_psiquiatricos"
                    value={values.familiares_antecedentes_psiquiatricos}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          {values.familiares_antecedentes_psiquiatricos === 'SI' &&
          <>
          <Grid item xs >
            <TextField className={classes.textField} error = {((values.familiares_antecedentes_psiquiatricos === 'SI') && (values.familiar_con_antecedente === '')) ? true : false } fullWidth variant="outlined"  label={"familiar con antecedente"} name="familiar_con_antecedente" value={values.familiar_con_antecedente} onChange={handleChange}/>
          </Grid>

          <Grid item xs >
            <TextField className={classes.textField} error = {((values.familiares_antecedentes_psiquiatricos === 'SI') && (values.patologia === '')) ? true : false} fullWidth variant="outlined"  label={"patología"} name="patologia" value={values.patologia} onChange={handleChange}/>
          </Grid>
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

          <Grid item xs >
              <FormControl variant="outlined" label="familiares con antecedentes psiquiátricos">
                <FormLabel>Familiares con antecedentes de suicidio</FormLabel>
                  <RadioGroup
                    name="familiares_antecedentes_suicidio"
                    value={values.familiares_antecedentes_suicidio}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          {values.familiares_antecedentes_suicidio === 'SI' &&

          <Grid item xs >
            <TextField className={classes.textField} error = { ((values.familiares_antecedentes_suicidio === 'SI') && (values.familiar_con_antecedente_suicidio === '')) ? true : false } fullWidth variant="outlined"  label={"familiar con antecedente de suicidio"} name="familiar_con_antecedente_suicidio" value={values.familiar_con_antecedente_suicidio} onChange={handleChange}/>
          </Grid>

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

            <Grid item xs >
              <FormControl variant="outlined" label="familiares con antecedentes adicciones">
                <FormLabel>Familiares con antecedentes de adicciones</FormLabel>
                  <RadioGroup
                    name="familiares_antecedentes_adicciones"
                    value={values.familiares_antecedentes_adicciones}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          {values.familiares_antecedentes_adicciones === 'SI' &&

          <Grid item xs >
            <TextField className={classes.textField} error = { ((values.familiares_antecedentes_adicciones === 'SI') && (values.familiar_con_antecedente_adicciones === '')) ? true : false } fullWidth variant="outlined"  label={"familiar con antecedente de adicciones"} name="familiar_con_antecedente_adicciones" value={values.familiar_con_antecedente_adicciones} onChange={handleChange}/>
          </Grid>

          }

          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"antecedesntes familiares de enfermedades somáticas"} name="familiares_antecedente_somática" value={values.familiares_antecedentes_somática} onChange={handleChange}/>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"hábitos de alimentación "} name="habitos_alimentacion" value={values.habitos_alimentacion} onChange={handleChange}/>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"Experiencias lúdicas, hobbies"} name="experiencias_ludicas" value={values.experiencias_ludicas} onChange={handleChange}/>
          </Grid>

        </Grid>
    </Paper>
  )
}

export default Ambito_sociofamiliar
