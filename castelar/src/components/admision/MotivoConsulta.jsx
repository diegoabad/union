import React, { useEffect } from 'react'

import TextoMultiline from './componentes/TextoMultiline' 
import Opcion from '../admision1/componente/Opcion'
import Subtitulo from '../admision1/componente/Subtitulo'

import {Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { getAdmision } from '../../redux/actions/index'

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

const MotivoConsulta = () => {

  const initialStateValues = {
    motivo_consulta: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdmision(values))
  } , [values])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const classes = styles();
  return (
  <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
    <Grid container spacing={3}>

      <Subtitulo titulo = 'Motivo Consulta' />

        <Opcion titulo = 'Motivo consulta' />
        <TextoMultiline name = 'motivo_consulta' handleChange = {handleChange} value = {values.motivo_consulta} label = 'Motivo consulta' error = {false}/>

    </Grid>
  </Paper>
  )
}

export default MotivoConsulta