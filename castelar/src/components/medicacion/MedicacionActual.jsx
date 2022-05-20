import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid, Paper } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Tabla from './componentes/Tabla.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    },

    '& .MuiTextField-root':{
      width: '300px',
    },
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
    },
    '& .MuiFormLabel-root': {
      fontSize: 'medium',
      backgroundColor: 'white',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiTypography-body1': {
      fontSize: '1.5rem',
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      backgroundColor: 'white',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiButton-root': {
      fontSize: '1.5rem',
      width: '70px',
      height: '30px',
    },
    '& .MuiFormControl-root': {
      width: '50vw',
    }
  },
}));

export default function MedicacionActual({medicacion, filiatorio}) {
  const classes = useStyles();
  const [rows, setRows] = React.useState([]);
  const date = medicacion[0].fechaCreacion.seconds ? new Date(medicacion[0].fechaCreacion.seconds * 1000).toLocaleString() : new Date(medicacion[0].fechaCreacion).toLocaleString()

  useEffect(() => {
    if (medicacion[0].medicacion){
      for (let i = 0; i < medicacion[0].medicacion.length; i++){
        let row = {
          medicacion: medicacion[0].medicacion[i],
          miligramos: medicacion[0].miligramos[i],
          siete: medicacion[0].siete[i],
          ocho: medicacion[0].ocho[i],
          doce: medicacion[0].doce[i],
          dieciseis: medicacion[0].dieciseis[i],
          veinte: medicacion[0].veinte[i],
        }
        setRows(rows => [...rows, row])
      }
    }
  },[]);

  return (
  <Paper className={classes.root} style = { {backgroundColor:'#1E90FF'} }>
    <Grid container spacing={3}>

    <Grid item xs={11} >
        <Subtitulo titulo = 'Última Medicación ingresada' /> 
    </Grid>
    <Grid item xs={11} >
    <Card style = {{width: '100%'}}>
      <CardContent>
        <Typography   gutterBottom style = {{textTransform: 'capitalize'}}>
          Paciente...: {filiatorio.nombre} {filiatorio.apellido}        
        </Typography>
        <Typography   gutterBottom>        
          Dirección...: {filiatorio.calle} {filiatorio.numero}       
        </Typography>
        <Typography   gutterBottom>      
          Localidad...: {filiatorio.localidad}
        </Typography>
        <Divider style={{color: 'Black', marginTop: '10px', marginBottom: '10px'}}/>
        <Typography variant="h5" component="h2">
          Carga de ficha ...: {date}
        </Typography>
        <Divider style={{color: 'Black', marginTop: '10px', marginBottom: '10px'}}/>
        <Typography style = {{textTransform: 'capitalize', marginBottom: '10px'}}>
          Profesional Actuante...: {medicacion[0].nombreCompletoProfesional}
        </Typography >
        <Typography style = {{textTransform: 'capitalize', marginBottom: '10px'}}>
          Observaciones...: {medicacion[0].observaciones}
        </Typography >
        {medicacion.length > 0 &&
          <Tabla  rows = {rows} deleteOnTable = {false}/>
        }
      </CardContent>
    </Card>
    </Grid>
  </Grid>
  </Paper>
  );
}