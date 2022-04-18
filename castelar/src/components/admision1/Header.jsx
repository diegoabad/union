import React, { useEffect } from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiAppBar-colorPrimary': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   

    },
  }
}))

const Header = ({setSemiologica, semiologica, paciente}) => {

  const [fecha, setFecha] = React.useState('');
  const [values, setValues] = React.useState({fecha: new Date()});

  const classes = styles();

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

      <AppBar position="static" style ={ {backgroundColor: '#f3efe1', color: 'black'} }>
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