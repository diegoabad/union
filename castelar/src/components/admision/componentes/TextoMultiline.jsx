import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import { TextField, Grid } from '@material-ui/core';

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
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textField: {

      width: '150ch',
    },
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
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
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      backgroundColor: 'white',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
}));

const TextoMultiline = (props) => {
  const {handleChange, name, value, label, error, minRows, maxRows} = props;

  const classes = useStyles();
  return (
    <Grid item xs={12} >
    <TextField
      fullWidth
      className={classes.root}
      minRows={minRows ? minRows : 4}
      maxRows={maxRows ? maxRows : 4}
      multiline={true}
      style = {{width: '95%'}}
      onChange = {handleChange}
      name = { name}
      value = {value}
      label = {label}
      variant = 'outlined'
      error = {error}
    />
  </Grid>
  )
}

export default TextoMultiline