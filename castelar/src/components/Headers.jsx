import React, { useEffect } from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getFormulario } from '../redux/actions/index'


const Headers = (props) => {

  const dispatch = useDispatch();
  
  let date
  if (props.editar === true) date = new Date(props.fecha);
  else date = new Date();
  
  const initialStateValues= {
    fecha: date
  }

  const [values, setValues] = React.useState(initialStateValues);

  let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

  useEffect(() => {
    dispatch(getFormulario(values ))
  }, [])

  return (
    <AppBar position="static" style ={ {backgroundColor: '#f3efe1', color: 'black'} }>
      <Toolbar>
        <Grid container style ={{textAlign: 'center'}}>
          <Grid item xs = {12} sm = {8} md={6}>
            <h1>Datos Filiatorios</h1>
          </Grid>
          <Grid item xs = {12} sm = {8} md={6}>
            <h2>Fecha</h2>
            <h3>{fecha}</h3>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Headers
