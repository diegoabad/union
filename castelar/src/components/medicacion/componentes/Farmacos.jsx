import React from 'react'
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
    }
  },
}));

const Medicamentos = (props) => {

  const { handleAutocomple, estado, handleChange } = props;

  const [values, setValues] = React.useState('');

  const [vademecum, setVademecum] = React.useState(data);

  const handleChangeInput = (event) => {
    setValues(event.target.value);
  }

  const classes = useStyles();
  return (
    <Grid item xs
      >
      <Autocomplete
        className={classes.root}
        fullWidth
        options={vademecum.map((option, index) => index + ' ' + option.Descripcion + ' ' + option.Forma + ' ' + option.Unidades + ' ' + option.Presentacion)}
        onChange={handleAutocomple}
        renderInput={(params) => (
          <TextField
            className={classes.root}
            {...params}
            label='Medicamento'
            fullWidth
            margin="normal"
            variant="outlined"
            name="medicamento"
            value={values}
            onChange={handleChangeInput}
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </Grid>
  )
}

export default Medicamentos