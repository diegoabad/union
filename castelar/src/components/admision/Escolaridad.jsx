import React, { useEffect } from 'react'
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

const Escolaridad = () => {

  const admision = useSelector(state => state.admision)
  const dispatch = useDispatch();

  const initialStateValues= {
    primario: 'Incompleto',
    secundario: 'Incompleto',
    terciario: 'Incompleto',
    universitario: 'Incompleto',
    actividad_laboral: '',
    trabajo: '',
    socializacion: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    dispatch(getAdmision(values))
  },[])

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
      
      <Grid container spacing = {1} style={{marginLeft: 2, marginBottom: 5}}>
          <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = {{margin: "10px"}}>
              <Typography variant="h4" component="div" align="left"> Escolaridad</Typography>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
              <FormControl variant="outlined" label="Primario">
                <FormLabel>Primario</FormLabel>
                  <RadioGroup
                    name="primario"
                    value={values.primario}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="Completo" control={<Radio />} label="Completo" />
                    <FormControlLabel value="Incompleto" control={<Radio />} label="Incompleto" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
              <FormControl variant="outlined" label="Secundario">
                <FormLabel>Secundario</FormLabel>
                  <RadioGroup
                    name="secundario"
                    value={values.secundario}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="Completo" control={<Radio />} label="Completo" />
                    <FormControlLabel value="Incompleto" control={<Radio />} label="Incompleto" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
              <FormControl variant="outlined" label="Terciario">
                <FormLabel>Terciario</FormLabel>
                  <RadioGroup
                    name="terciario"
                    value={values.terciario}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="Completo" control={<Radio />} label="Completo" />
                    <FormControlLabel value="Incompleto" control={<Radio />} label="Incompleto" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
              <FormControl variant="outlined" label="Universitario">
                <FormLabel>Universitario</FormLabel>
                  <RadioGroup
                    name="universitario"
                    value={values.universitario}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="Completo" control={<Radio />} label="Completo" />
                    <FormControlLabel value="Incompleto" control={<Radio />} label="Incompleto" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"Actividad laboral"} name="actividad_laboral" value={values.actividad_laboral} onChange={handleChange}/>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"Trabajo"} name="trabajo" value={values.trabajo} onChange={handleChange}/>
          </Grid>

          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="outlined"  label={"Socialización"} name="socializacion" value={values.socializacion} onChange={handleChange}/>
          </Grid>

     </Grid> 
    </Paper>
  )
}

export default Escolaridad
