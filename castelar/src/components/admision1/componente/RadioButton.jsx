import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Radio, RadioGroup } from '@material-ui/core/';



const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root:{
    '& .MuiTypography-body1':{
      fontSize: '1.5rem'
    }
  }
}))

const RadioButton = (props) => {

  const { name, handleChange, datos, titulo, value } = props;
  const classes = useStyles();

  return (
  <Grid item style = {{margin: "10px"}}>
    <FormGroup row>
      <RadioGroup aria-label= { titulo } name = { name } value = { value } onChange = { handleChange } row>
      {datos.map((item, index) => {
        return (

          <FormControlLabel
            className = { classes.root }
            value = { item.name }
            control = {
              <GreenRadio 

              />
            }
            label={item.label}
            key={index}
          />
        )
      })}
      </RadioGroup>

    </FormGroup>
  </Grid>
  )
}

export default RadioButton
