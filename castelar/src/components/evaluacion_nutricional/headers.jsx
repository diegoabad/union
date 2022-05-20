import React, { useEffect} from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core';


const Headers = ({nutricional, setNutricional}) => {

  useEffect(() => {
    setNutricional({ ...nutricional, fecha: new Date()})
  }, []);

  return (
    <AppBar position="static" style ={ {backgroundColor: 'rgb(32, 135, 252)', color: 'white', fontFamily: 'poppins'} }>
      <Toolbar>
        <Grid container style={{textAlign: 'center'}}>
          <Grid item xs = {12}>
            <h1>EVALUACION NUTRICIONAL </h1>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Headers