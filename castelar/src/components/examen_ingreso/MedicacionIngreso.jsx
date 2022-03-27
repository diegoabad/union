import React from 'react'

import  {Paper, Grid} from '@material-ui/core'

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import Lista from './componentes/Lista.jsx'

import Medicamentos from '../medicacion/componentes/Medicamentos.jsx'

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    }
  }
}))


const MedicacionIngreso = () => {

  const initialStateValues = {
    medicacion: [],
  }

  const [values, setValues] = React.useState(initialStateValues)

  const handleChange = (event) => {
    const {name, value} = event.target
    setValues({...values, [name]: value });
  }

  const handleAutocomple = (event, value) => {
    setValues({...values, medicacion:[...values.medicacion, value]})
  }

  const classes = styles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>

        <Subtitulo titulo = 'Medicación al ingreso' />
        <Opcion titulo = 'Medicación' />

        <Medicamentos handleAutocomple = {handleAutocomple} handleChange = {handleChange} estado = {values.medicacion} />

        {values.medicacion.length > 0 &&
        <Lista lista = {values.medicacion} />
        }

      </Grid>
    </Paper>
  )
}

export default MedicacionIngreso