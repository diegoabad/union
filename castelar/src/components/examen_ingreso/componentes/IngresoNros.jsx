import React from 'react'

import { Grid, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
    },

    '& .MuiTextField-root':{
      width: '20px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },

    '& .MuiInputBase-input': {
      fontSize: 'medium',
    },
    '& .MuiFormLabel-root': {
      fontSize: 'medium',
      backgroundColor: 'white',
      paddingLeft: '1px',
      paddingRight: '1px',
    },
    '& .MuiTypography-body1': {
      fontSize: 'medium',
    },
    '& .MuiInputLabel-outlined': {
      fontSize: 'medium',
      backgroundColor: 'white',
      paddingLeft: '1px',
      paddingRight: '1px',
    },
  },
}));

const IngresoNros = (props) => {
  const {label, name, value, handleChange} = props;
  const classes = useStyles();

  return (
    <Grid item  xs={4}>
      <TextField className={classes.root} type = 'number' variant="outlined"  label={label} name= {name} value={value}  onChange={handleChange} style = { { width: '90px'} }/>
    </Grid>
  )
}

export default IngresoNros