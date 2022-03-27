import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Grid} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    backgroundColor: '#F8F8FF',
  },
}));

const MedLista = (props) => {
  const {lista, handleDelete} = props;

  const classes = useStyles();
  return (
  <Grid container item xs={12} >
    <List component="nav" className={classes.root} aria-label="mailbox folders">
 
      <ListItem button onClick = {handleDelete}>
        <ListItemText primary= {lista} />
        <DeleteIcon color = 'error' fontSize='large'/>
      </ListItem>

    </List>
  </Grid>
  )
}

export default MedLista