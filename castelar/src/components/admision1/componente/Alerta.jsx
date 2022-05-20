import React from 'react'
import {Grid, Button, Paper} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
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

const StyledButton = withStyles({
  root: {
    background: 'rgb(32, 135, 252)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    fontSize: '1.5rem',
    width: 80,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(32, 135, 252, .3)',  
    '&:hover': {
      backgroundColor: 'rgb(2, 154, 255)',
    }
  },
  label: {
    textTransform: 'capitalize',
  },

})(Button);

const alerta = (props) => {

  const {error, handleClick} = props;

  const classes = useStyles();

  return (
    <Grid item xs={12} style={{ alignItems: 'center', textAlign: 'center' }}>
      {error !== '' && <Grid item xs={12}><Paper><Alert severity="error"  className={classes.root}>{error}</Alert></Paper></Grid>}

      <StyledButton 
        onClick={handleClick}>
          Guardar
      </StyledButton>
  </Grid>
  )
}

export default alerta