import React from 'react'

import Headers from './evaluacion_nutricional/headers'
import Diagnostico from './evaluacion_nutricional/Diagnostico';
import ValoracionAntropometrica from './evaluacion_nutricional/ValoracionAntropometrica';

import {Paper, Grid} from '@material-ui/core'
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
    },
  },
  pagecontent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    width: '90%',
    alignItems: 'strech',
    justifyContent: 'space-between',
    backgroundColor: '#F0FFFF',
  },

}))

const EvaluacionNutricional = () => {

  const classes = useStyles();
  return (
  <>
    <Headers />
    <Paper className={classes.pagecontent} spacing = {2}>

      <Grid container spacing = {2} >

        <Grid item xs = {12} >
          <Diagnostico />
        </Grid>

        <Grid item xs = {12} >
          <ValoracionAntropometrica />
        </Grid>

      </Grid>
    </Paper>
  </>
  )
}

export default EvaluacionNutricional