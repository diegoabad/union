import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '80%',
    minWidth: 120,

  '& .MuiSelect-select.MuiSelect-select': {
    backgroundColor: 'rgba(32, 135, 252, 0.1)',  },
  '& .MuiMenuItem:hover': {
    backgroundColor: 'rgba(32, 135, 252, 0.1)',  }
  
  },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
 
  select: {
    fontSize: 'medium',

  },
  option: {
    fontSize: '1.5rem',
  }
}));


const Selector = (props) => {

  const {handleChange, name, value, options, titulo} = props;

  const classes = useStyles();
  return (
  <Grid item xs={12} >
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">{titulo}</InputLabel>
        <Select
          className={classes.select}
          // native
          value={value}
          onChange={(e) => handleChange(e, name)}
          inputProps={{
          id: 'select',
        }}  
        >
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value} >{item.label}</MenuItem>
        ))
        }
        </Select>
  </FormControl>
</Grid>
);
}

export default Selector