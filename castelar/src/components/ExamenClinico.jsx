import React from 'react'

import { Paper, Grid } from '@material-ui/core'

import SignosVitales from './examen_ingreso/SignosVitales.jsx'
import PielyMucosas from './examen_ingreso/PielyMucosas.jsx'
import Cardiologico from './examen_ingreso/Cardiologico.jsx'
import Respiratorio from './examen_ingreso/Respiratorio.jsx'
import Abdominal from './examen_ingreso/Abdominal.jsx'
import HabitosDomesticos from './examen_ingreso/HabitosDomesticos.jsx'
import SistemaNervioso from './examen_ingreso/SistemaNervioso.jsx'
import MedicacionIngreso from './examen_ingreso/MedicacionIngreso.jsx'
import Biografia from './examen_ingreso/Biografia.jsx'
import Headers from './examen_ingreso/Headers.jsx'

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

const ExamenClinico = () => {

  const classes = useStyles();

  return (
  <>  
    <Headers />
    <Paper className={classes.pagecontent} spacing = {2}>

      <Grid container spacing = {2} >

        <Grid item xs = {12} >
          <SignosVitales />
        </Grid>

        <Grid item xs = {12} >
          <Biografia />
        </Grid>

        <Grid item xs = {12} >
          <PielyMucosas />
        </Grid>

        <Grid item xs = {12} >
          <Cardiologico />
        </Grid>

        <Grid item xs = {12} >
          <Respiratorio />
        </Grid>

        <Grid item xs = {12} >
          <Abdominal />
        </Grid>

        <Grid item xs = {12} >
          <HabitosDomesticos />
        </Grid>

        <Grid item xs = {12} >
          <SistemaNervioso />
        </Grid>

        <Grid item xs = {12} >
          <MedicacionIngreso />
        </Grid>

      </Grid>
    </Paper>
  </>
  )
}

export default ExamenClinico