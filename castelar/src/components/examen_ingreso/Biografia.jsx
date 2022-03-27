import React from 'react'

import Subtitulo from '../admision1/componente/Subtitulo.jsx'

import {Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

const Biografia = () => {

  const classes = styles()
  return (
    <Paper className={classes.root} style = { {backgroundColor:'#d7dbca'} }>
      <Grid container spacing={3}>

      <Subtitulo titulo = 'Biografía' />

      </Grid>
    </Paper>
  )
}

export default Biografia