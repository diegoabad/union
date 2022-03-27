import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Grid} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    backgroundColor: '#F8F8FF',
  },
}));

const Lista = (props) => {

  const {lista, handleDelete} = props;

  const classes = useStyles();
  return (
  <Grid container item xs={12} >
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {lista.map((item, index) => 
      <div key={index}>
        <ListItem button onClick = {(e) => handleDelete(e, item)}>
          <ListItemText primary= {item} />
          <DeleteIcon color = 'error' fontSize='large'/>
        </ListItem>
        <Divider element = 'hr' /> 
      </div> 
      )}
    </List>
  </Grid>
  )
}

export default Lista