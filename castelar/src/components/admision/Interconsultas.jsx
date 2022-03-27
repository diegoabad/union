import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useDispatch } from 'react-redux';
import { getAdmision } from '../../redux/actions/index'

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
    },

    '& .MuiTextField-root':{
      width: '300px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '150ch',
    },
  },
}));

const Interconsultas = () => {

  const dispatch = useDispatch();

  const initialStateValues= {
    interconsultas: '',
  }
  
  const [values, setValues] = useState(initialStateValues)

  useEffect(() => {
    dispatch(getAdmision(values))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
    dispatch(getAdmision({[name]: value}))
  }


  const classes = useStyles();

  return (
    <Paper>
      <Grid container spacing = {1} style = {{marginLeft: 2, marginBottom: 5}}>
        <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = {{margin: "10px"}}>
              <Typography variant="h4" component="div" align="left"> Interconsultas </Typography>
        </Grid>
        <Grid item xs = {12} style = {{margin: "10px"}}>
          <TextField
            maxRows={5}
            minRows={4}
            className={classes.textField}
            label= {"Interconsultas"}
            value = {values.interconsultas}
            fullWidth
            name = "interconsultas"
            onChange = {handleChange}
          />
        </Grid>
      </Grid>
    </Paper>    
  ); 
};

export default Interconsultas;
