import React, { useEffect } from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';


const Header = () => {
  
  return (

      <AppBar position="static" style ={ {backgroundColor: 'rgb(32, 135, 252)', color: 'white', fontFamily: 'poppins'} }>
        <Toolbar>
          <Grid container style={{textAlign: 'center'}}>
            <Grid item xs = {12}>
              <h2>Admisión Psicología</h2>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )

}

export default Header