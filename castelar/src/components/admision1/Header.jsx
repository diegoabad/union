import React, { useEffect } from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';


const Header = ({setSemiologica, semiologica, paciente}) => {

  const [fecha, setFecha] = React.useState('');
  const [values, setValues] = React.useState({fecha: new Date()});

  useEffect(() => {
    if (!paciente){
      let date = new Date();
      let setDate = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
      setFecha(setDate);
      setValues({fecha: date});
    } else  {
      let date = paciente.fecha. seconds ? new Date(paciente.fecha.seconds * 1000) : new Date(paciente.fecha);
      let setDate = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
      setFecha(setDate);
      setValues({fecha: date});
    }
  }, [])

  useEffect(() => {setSemiologica({...semiologica, ...values })}, [values])
  
  return (

      <AppBar position="static" style ={ {backgroundColor: 'rgb(32, 135, 252)', color: 'white', fontFamily: 'poppins'} }>
        <Toolbar>
          <Grid container style={{textAlign: 'center'}}>
            <Grid item xs = {12} sm = {8} md={6}>
              <h2>Evaluación Semiológica: Aspecto y Funciones mentales</h2>
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

export default Header