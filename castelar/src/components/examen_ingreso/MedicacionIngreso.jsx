import React, { useEffect }from 'react'

import  {Paper, Grid} from '@material-ui/core'

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import Lista from './componentes/Lista.jsx'

import Medicamentos from '../medicacion/componentes/Farmacos.jsx'

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


const MedicacionIngreso = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    medicacion: [],
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if(paciente){
      setValues({...values,
        medicacion: paciente.medicacion
      })
    }
  },[])

  useEffect(() => {
    setIngreso({...ingreso,...values})
  },[values])

  const handleChange = (event) => {
    const {name, value} = event.target
    setValues({...values, [name]: value });
  }

  const handleAutocomple = (event, value) => {
    if (value !== null) {
      setValues({...values, medicacion:[...values.medicacion, value]})
    }
  }

  const handleDelete = (evt, item) => {
    setValues({...values, medicacion: values.medicacion.filter(i => i !== item)})
  }

  const classes = styles();

  console.log(values.medicacion)

  return (
    <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>

        <Subtitulo titulo = 'Medicación al ingreso' />
        <Opcion titulo = 'Medicación' />

        <Medicamentos handleAutocomple = {handleAutocomple} handleChange = {handleChange} estado = {values.medicacion} filtrar = {false}/>

        {values.medicacion.length > 0 &&
        <Lista lista = {values.medicacion} handleDelete = {handleDelete}/>
        }

      </Grid>
    </Paper>
  )
}

export default MedicacionIngreso