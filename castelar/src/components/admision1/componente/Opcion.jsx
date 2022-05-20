import React from 'react'
import {Grid, Typography} from '@material-ui/core';

const Opcion = (props) => {

  const titulo = props.titulo;
  return (
    <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = {{margin: "10px", backgroundColor: "rgb(32, 135, 252)", color: "white"}}>
      <Typography variant="h5" component="div" align="left"> {titulo} </Typography>
    </Grid>
  )
}

export default Opcion