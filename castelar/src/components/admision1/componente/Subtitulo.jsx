import React from 'react'
import { Typography, Grid} from '@material-ui/core';

const Subtitulo = (props) => {
  const titulo = props.titulo;
  return (
    <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = { {width: '95%'} }>
      <Typography variant="h3" component="div" align="left"  > {titulo} </Typography>
    </Grid>
  )
}

export default Subtitulo