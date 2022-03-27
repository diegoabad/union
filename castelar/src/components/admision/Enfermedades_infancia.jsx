import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid,  Typography, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useDispatch, useSelector } from 'react-redux';
import { getAdmision, getCode } from '../../redux/actions/index'



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

const Enfermedades_infancia = (props) => {

  const admision = useSelector(state => state.admision)
  const codigo = useSelector(state => state.codigo)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch();

  const initialStateValues= {
    enfermedad: '',
    edad: '',
    enfermedad1: '',
    edad1: '',
    enfermedad2: '',
    edad2: '',
    traumatismo: 'NO',
    detalle_traumatismo: '',
    convulsiones: 'NO',
    detalle_convulsiones: '',
  }

  const [values, setValues] = React.useState(initialStateValues);
  const [code, setCode] = React.useState({
    enfermedad: '',
    enfermedad1: '',
    enfermedad2: '',
  })

  useEffect(async () => {
    dispatch(getAdmision(values))
  },[])

  useEffect(async () => {
    if (props.enfermedades.destinationEntities && codigo.destinationEntities && codigo.destinationEntities.length > 0) {
      const array = [...props.enfermedades.destinationEntities, ...codigo.destinationEntities]
      props.setEnfermedades({...props.enfermedades, destinationEntities: array})
    }
  },[codigo])


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    props.setNombre(event.target.name)
    dispatch(getAdmision({[event.target.name]: event.target.value}))
    
  }

  const handleAutocomple = (event, value) => {
    setCode({...code, [props.nombre]: value})
    setValues({...values, [props.nombre]: value})
    dispatch(getAdmision({[props.nombre]: value}))
  }


  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getCode(values[props.nombre], token))
  }

  const handleChangeEdad = (event) => {
    const parsValue = parseInt(event.target.value)
      
    if (((Number.isInteger(parsValue)) && (parsValue >= 0)) || (event.target.value === '')){
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      dispatch(getAdmision({[event.target.name]: event.target.value}))
    }
  }

  const classes = useStyles();

  return (
    <Paper>
        <Grid container spacing = {1} style = {{marginLeft: 2, marginBottom: 5}}>
          <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = {{margin: "10px"}}>
              <Typography variant="h4" component="div" align="left"> Enfermedades comunes de la infancia</Typography>
          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

          <Grid item >
          
          <Autocomplete
            freeSolo
            id="enfermedad"
            disableClearable
            defaultValue=''
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleAutocomple}
            onOpen={() => props.setNombre('enfermedad')}
            name="enfermedad"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Enfermedad"}
              margin="normal"
              variant="outlined"
              name="enfermedad"
              value={values.enfermedad}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
          </Grid>

          <Grid item  >
            <TextField className={classes.textField} error = { ((values.enfermedad !== '') && (values.edad === '')) ? true : false} fullWidth type='number' variant="outlined"  label={"Edad"} name="edad" value={values.edad} onChange={handleChangeEdad}/>
          </Grid>

          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

          <Grid item >  

          <Autocomplete
            freeSolo
            id="enfermedad"
            disableClearable
            defaultValue=''
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleAutocomple}
            onOpen={() => props.setNombre('enfermedad1')}
            name="enfermedad"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Enfermedad"}
              margin="normal"
              variant="outlined"
              name="enfermedad1"
              value={values.enfermedad1}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
          </Grid>

          <Grid item >
            <TextField className={classes.textField} error = { ((values.enfermedad1 !== '') && (values.edad1 === '')) ? true : false} fullWidth type='number' variant="outlined"  label={"Edad"} name="edad1" value={values.edad1} onChange={handleChangeEdad}/>
          </Grid>

          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {11}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

           <Grid item >  

            <Autocomplete
              freeSolo
              id="enfermedad"
              disableClearable
              defaultValue=''
              forcePopupIcon={true}
              options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
              onChange={handleAutocomple}
              onOpen={() => props.setNombre('enfermedad2')}
              name="enfermedad2"
              renderInput={(params) => (
              <Grid
                container
                item
                xs
                direction="row"
                justifyContent="flex-start"
              >
                <Grid container item xs = {10} > 
                    <TextField
                    {...params}
                    label={"Enfermedad"}
                    margin="normal"
                    variant="outlined"
                    name="enfermedad2"
                    value={values.enfermedad2}
                    onChange={handleChange}
                    InputProps={{ ...params.InputProps, type: 'search' }}
                    />  

                </Grid>

                <Grid container item xs justifyContent="flex-start" alignItems="center">          
                  <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
                    <SearchIcon />
                  </IconButton>
                </Grid>

            </Grid>
            )}
            />
          </Grid>

          <Grid item >
            <TextField className={classes.textField} error = { ((values.enfermedad2 !== '') && (values.edad2 === '')) ? true : false} fullWidth type='number' variant="outlined"  label={"Edad"} name="edad2" value={values.edad2} onChange={handleChangeEdad}/>
          </Grid>

          </Grid>


          <Grid 
            spacing = {2}
            container
            item xs = {11} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
          <Grid item >
              <FormControl variant="outlined" label="Traumatismo">
                <FormLabel>Traumatismo</FormLabel>
                  <RadioGroup
                    name="traumatismo"
                    value={values.traumatismo}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          {values.traumatismo === 'SI' &&
            <Grid item >
              <TextField className={classes.textField} error = {((values.traumatismo === 'SI') && (values.detalle_traumatismo === '')) ? true : false } fullWidth variant="outlined"  label={"Traumatismo"} name="detalle_traumatismo" value={values.detalle_traumatismo} onChange={handleChange}/>
            </Grid>
          }

          </Grid>

          <Grid 
            spacing = {2}
            container
            item xs = {11} sm = {8} md={2}
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

          <Grid item >
              <FormControl variant="outlined" label="Convulsiones">
                <FormLabel>Convulsiones</FormLabel>
                  <RadioGroup
                    name="convulsiones"
                    value={values.convulsiones}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
          </Grid>

          {values.convulsiones === 'SI' &&
            <Grid item >
              <TextField className={classes.textField} error = {((values.convulsiones === 'SI') && (values.detalle_convulsiones === '')) ? true : false } fullWidth variant="outlined"  label={"Convulsiones"} name="detalle_convulsiones" value={values.detalle_convulsiones} onChange={handleChange}/>
            </Grid>
          }
          </Grid>

        </Grid>
    </Paper>
  )
}

export default Enfermedades_infancia
