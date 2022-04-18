import React from 'react'

import IngresoNros from './IngresoNros.jsx'

import { Grid } from '@material-ui/core'

const Contenedor = (props) => {
  
  const { datos, handleChange} = props;
  
  return (
    <Grid style = {{width: '15%'}}>
    {datos.map((item, index) => (
      <IngresoNros label = {item.label} name = {item.name} value = {item.value} handleChange = {handleChange} key = {index}/>  
    ))}
    </Grid>
  )
}

export default Contenedor