import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core';

const Headers = ({titulo}) => {

  return (
    <AppBar position="static" style ={ {backgroundColor: '#f3efe1', color: 'black'} }>
      <Toolbar>
        <Grid container style={{textAlign: 'center'}}>
          <Grid item xs = {12}>
            <h1>{titulo} </h1>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Headers
