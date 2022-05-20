import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles/';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {  Grid, TextField } from '@material-ui/core';

import data from '../../datos/vademecum.json'

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
    },

    '& .MuiTextField-root':{
      width: '90%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },

    borde: {
      borderStyle: 'inset'
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
    '& .MuiChip-label': {
      fontSize: '1rem',
    },
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
    },
    '& .MuiInputLabel-formControl' :{
      top: '-8px',
    },
  },
}));

const Medicamentos = (props) => {

  const { handleAutocomple, estado, handleChange, filtrar, borrar } = props;

  const [values, setValues] = React.useState('');

  const [vademecum, setVademecum] = React.useState(data);

  const [total, setTotal] = React.useState()

  const handleChangeInput = (event) => {
    setValues(event.target.value);
  }

  useEffect(() => {
    let mySet = new Set()
    let array =[]
    for (let element of data) {
      if (!mySet.has(element.Descripcion)){
        mySet.add(element.Descripcion)
        array.push(element)
      }
    }
    setVademecum(array);
    setTotal(array)
  },[])

  useEffect(() => {
    if (filtrar) {
      if (borrar) {
        const filtrardata = total.filter(element => element.Monodrogas.toLowerCase().includes(estado.toLowerCase()))
        let mySet = new Set()
        let array =[]
        for (let element of filtrardata) {
          if (!mySet.has(element.Descripcion)){
            mySet.add(element.Descripcion)
            array.push(element)
          }
        }
        setVademecum(array)
      }else{
        const filtrardata = vademecum.filter(element => element.Monodrogas.toLowerCase().includes(estado.toLowerCase()))
        let mySet = new Set()
        let array =[]
        for (let element of filtrardata) {
          if (!mySet.has(element.Descripcion)){
            mySet.add(element.Descripcion)
            array.push(element)
          }
        }
        setVademecum(array)
      }

    } else {
      if (borrar) {
        const filtrardata = total.filter(element => element.Descripcion.toLowerCase().includes(estado.toLowerCase()))
        let mySet = new Set()
        let array =[]
        for (let element of filtrardata) {
          if (!mySet.has(element.Descripcion)){
            mySet.add(element.Descripcion)
            array.push(element)
          }
        }
        setVademecum(array)
      }else{
        const filtrardata = vademecum.filter(element => element.Descripcion.toLowerCase().includes(estado.toLowerCase()))
        let mySet = new Set()
        let array =[]
        for (let element of filtrardata) {
          if (!mySet.has(element.Descripcion)){
            mySet.add(element.Descripcion)
            array.push(element)
          }
        }
        setVademecum(array)
      }
    }
  },[estado])

  const classes = useStyles();
  return (
    <>
    <Grid item xs = {11}>
    <TextField
            className={classes.root}
            label={filtrar ? 'Droga' : 'Medicamento'}
            fullWidth
            margin="normal"
            variant="standard"
            name="medicacion"
            value={estado}
            onChange={handleChange}
          />
    </Grid>
    <Grid item xs = {11}>
      <Autocomplete
        className={classes.root}
        options={vademecum.map((option, index) =>  option.Descripcion)}
        onChange={handleAutocomple}
        renderInput={(params) => (
          <TextField
            className={classes.root}
            {...params}
            label='Medicamento'
            fullWidth
            margin="normal"
            variant="standard"
            name="medicamento"
            value={values}
            onChange={handleChangeInput}
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </Grid>

    </>
  )
}

export default Medicamentos