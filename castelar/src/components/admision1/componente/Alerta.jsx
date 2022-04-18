import React from 'react'
import {Grid, Button, Paper} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
      width: '80%',
      minWidth: '250px',
    },
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiAlert-message': {
      fontSize: '1.5rem'
    } 
  },
}))

const alerta = (props) => {

  const {error, handleClick} = props;

  const classes = useStyles();

  return (
    <Grid item xs={12} style={{ alignItems: 'center', textAlign: 'center' }}>
      {error !== '' && <Grid item xs={12}><Paper><Alert severity="error"  className={classes.root}>{error}</Alert></Paper></Grid>}

      <Button size="large" color = "primary" variant="contained" onClick={handleClick}>Guardar</Button>
  </Grid>
  )
}

export default alerta