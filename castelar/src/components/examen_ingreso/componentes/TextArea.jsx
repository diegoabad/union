import React from 'react';
import { TextareaAutosize, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
    },
  },
  textarea: {
    fontSize: 'medium',
    borerRadius: '5px',
  }
}));

export default function TextArea(props) {

  const { name, value, handleChange, placeholder } = props;

  const classes = useStyles();
  return (
  <Grid item xs={12} >
    <TextareaAutosize
      className={classes.textarea}
      minRows={4}
      maxRows={4}
      placeholder={placeholder}
      style = {{width: '95%'}}
      onChange = {(e) => handleChange(e, name)}
      value = {value}
    />
  </Grid>
  );
}