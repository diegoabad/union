import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const ComboBox = (props) => {

  const { handleChange, name, label, indice } = props;
;

  return (
    <FormGroup row>

      {name.map((item, index) => (
        
        <FormControlLabel
          control={<GreenCheckbox checked={[item]} onChange={(e) => handleChange(e, item, indice)} name = {item}/>}
          label= {label[index] } key= {index}
        />
      ))}
    </FormGroup>
  );
}

export default ComboBox