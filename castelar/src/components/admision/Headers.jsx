import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core';

const Headers = () => {


  return (
    <AppBar position="static" style ={ {backgroundColor: 'rgb(32, 135, 252)', color: 'white', fontFamily: 'poppins'} }>
      <Toolbar>
        <Grid container style={{textAlign: 'center'}}>
          <Grid item xs = {12}>
            <h1>ADMISIÓN - EVALUACIÓN PSIQUIÁTRICA </h1>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Headers
