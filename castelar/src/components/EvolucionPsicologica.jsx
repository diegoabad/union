import React from 'react'

import Headers from './evolucionpsicologica/Headers'
import Interconsultas from './evolucionpsicologica/Interconsultas'
import Evolucion from './evolucionpsicologica/Evolucion'
import Problematica from './evolucionpsicologica/Problematica' 

import { Paper, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
  pagecontent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    width: '90%',
    alignItems: 'strech',
    justifyContent: 'space-between',
    backgroundColor: '#F0FFFF',
  }
}))

const EvolucionPsicologica = () => {

  const classes = useStyles()
  return (
  <>
    <Headers />
    <Paper className={classes.pagecontent} spacing={2}>
      <Grid container spacing={2}>

      <Grid item xs={12}>
          <Problematica />
        </Grid>

        <Grid item xs={12}>
          <Evolucion />
        </Grid>

        <Grid item xs={12}>
          <Interconsultas />
        </Grid>

      </Grid>
    </Paper>
  </>   
  )
}

export default EvolucionPsicologica