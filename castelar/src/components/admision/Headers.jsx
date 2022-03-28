import React, {useEffect} from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core';

const Headers = ({estado, setEstado}) => {

  useEffect(() =>{setEstado({...estado, fecha: new Date()})}, [])

  return (
    <AppBar position="static" style ={ {backgroundColor: '#f3efe1', color: 'black'} }>
      <Toolbar>
        <Grid container>
          <Grid item xs = {12}>
            <h1>ADMISIÓN - EVALUACIÓN PSIQUIÁTRICA </h1>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Headers
