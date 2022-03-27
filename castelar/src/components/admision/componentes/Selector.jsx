import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '80%',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Selector = (props) => {

  const {handleChange, name, value, options, titulo} = props;

  const classes = useStyles();
  return (
  <Grid item xs={12} >
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">{titulo}</InputLabel>
        <Select
          native
          value={value}
          onChange={(e) => handleChange(e, name)}
          inputProps={{
          id: 'select',
        }}  
        >
        {options.map((item, index) => (
          <option key={index} value={item.value}>{item.label}</option>
        ))
        }
        </Select>
  </FormControl>
</Grid>
);
}

export default Selector