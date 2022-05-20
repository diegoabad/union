import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core';


const Headers = () => {

  return (
    <AppBar position="static" style ={ {backgroundColor: 'rgb(32, 135, 252)', color: 'white', fontFamily: 'poppins'} }>
      <Toolbar>
        <Grid container>
          <Grid item xs = {12}>
            <h1>MEDICACIÓN</h1>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Headers