import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


const GreenCheckbox = withStyles({
  root: {
    color: 'rgb(32, 135, 252)',
    '&$checked': {
      color: 'rgb(35, 140, 255)',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const CheckBox = (props) => {

  const { handleChange, datos } = props;
;

  return (
  <Grid item xs={12} >
    <FormGroup row>

      {datos.map((item, index) => (
        
        <FormControlLabel
          control={<GreenCheckbox checked={item.checked} onChange={handleChange} name = {item.name}/>}
          label= {item.label} key= {index}
        />
      ))}
    </FormGroup>
  </Grid >
  );
}

export default CheckBox