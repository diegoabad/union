import React from 'react'

import Horarios from './medicacion/Horarios.jsx'
import Headers from './medicacion/Headers.jsx'


import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core'

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
    }
    
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

const Medicacion = () => {
  
  const classes = useStyles();
  return (
  <>
    <Headers />
    <Paper className={classes.pagecontent} spacing={2}>
      <Grid container spacing={2}>

      <Grid item xs={12}>
        <Horarios/>
      </Grid>  
      </Grid>
    </Paper>
  </>
  )
}

export default Medicacion