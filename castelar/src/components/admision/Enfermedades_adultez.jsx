import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid,  Typography,  Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TabContext from '@material-ui/lab/TabContext';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from '@material-ui/lab'; 
import { AppBar } from '@material-ui/core';
import TabList from '@material-ui/lab/TabList';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useDispatch, useSelector } from 'react-redux';
import { getAdmision, getCode } from '../../redux/actions/index'

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
    TabPanel: {
      padding: "24px",
      width: "100%",
    }
  },
}));

const Enfermedades_adultez = (props) => {

  const admision = useSelector(state => state.admision)
  const codigo = useSelector(state =>state.codigo);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const initialStateValues= {
    hta:'',
    dbt: '',
    dislipemias: '',
    transmision_sexual: '',
    tiroidea: '',
    anticonceptivo: '',
    embarazos_previos: '',
    alergias: '',
    cirugias: '',
  }

  const [values, setValues] = React.useState(initialStateValues);
  const [code, setCode] = React.useState(initialStateValues);
  const [tab, setTab] = React.useState('0');


  useEffect(() => {
    dispatch(getAdmision(values))
  },[])

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getCode(values[props.nombre], token))
  }

  const handleSelect = (event, value) => {
    setCode({...code, [props.nombre]: value})
    setValues({...values, [props.nombre]: value})
    dispatch(getAdmision({[props.nombre]: value}))
  }

  const handleTab = (event, newValue) => {
    event.preventDefault();
    setTab(newValue);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    props.setNombre(event.target.name)
    dispatch(getAdmision({[event.target.name]: event.target.value}))
  }

  const classes = useStyles();

  return (
    <Paper>
        <Grid container spacing = {1} style = {{marginLeft: 2, marginBottom: 5}}>
          <Grid container item xs = {12} direction="row"  justifyContent="flex-start" style = {{margin: "10px"}}>
              <Typography variant="h4" component="div" align="left"> Enfermedades comunes de la adultez</Typography>
          </Grid>
          
        <TabContext value = {tab} >
          <Grid container item xs = {12} justifyContent="center">
          <AppBar position="static" color="default" style={{width: '95%'}}>
            <TabList
              value={tab}
              onChange={handleTab}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Hta"  value={'0'}/>
              <Tab label="Dbt"  value={'1'}/>
              <Tab label="Dislipemias"  value={'2'}/>
              <Tab label="Transmisión Sexual"  value={'3'}/>
              <Tab label="Tiroidea"  value={'4'}/>
              <Tab label="Método anticonceptivo"  value={'5'}/>
              <Tab label="Embarazos previos"  value={'6'}/>
              <Tab label="Alergias"  value={'7'}/>
              <Tab label="Cirugías"  value={'8'}/>
            </TabList>
          </AppBar>
          </Grid>

          <TabPanel style={{width: '100%'}} value={'0'}>
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

          
          <Grid item >
          
          <Autocomplete
            freeSolo
            id="hta"
            disableClearable
            autoSelect={true}
            defaultValue={values.hta}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('hta')}
            name="hta"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Hta"}
              margin="normal"
              variant="outlined"
              name="hta"
              value={values.hta}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
          </Grid>
          </Grid>
          </TabPanel>

          <TabPanel style={{width: '100%'}} value={'1'}>
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >

          
          <Grid item >
          
          <Autocomplete
            freeSolo
            id="hta"
            disableClearable
            defaultValue={values.dbt}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('dbt')}
            name="dbt"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Dbt"}
              margin="normal"
              variant="outlined"
              name="dbt"
              value={values.dbt}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
          </Grid>
          </Grid>
          </TabPanel>

          <TabPanel style={{width: '100%'}} value={'2'}> 
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
             
            <Grid item >
          
          <Autocomplete
            freeSolo
            id="dislipemias"
            disableClearable
            defaultValue={values.dislipemias}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('dislipemias')}
            name="dislipemias"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Dislipemias"}
              margin="normal"
              variant="outlined"
              name="dislipemias"
              value={values.dislipemias}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
          </Grid>
          </Grid>
          </TabPanel>
          
          <TabPanel style={{width: '100%'}} value={'3'}>
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
            
              <Grid item >
          
          <Autocomplete
            freeSolo
            id="tramsmision_sexual"
            disableClearable
            defaultValue={values.transmision_sexual}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('transmision_sexual')}
            name="transmision_sexual"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Transmision sexual"}
              margin="normal"
              variant="outlined"
              name="transmision_sexual"
              value={values.transmision_sexual}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
              </Grid>
            
          </Grid>
          </TabPanel>

          <TabPanel style={{width: '100%'}} value={'4'}>
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
            
              <Grid item >
          
          <Autocomplete
            freeSolo
            id="tiroidea"
            disableClearable
            defaultValue={values.tiroidea}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('tiroidea')}
            name="tiroidea"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Tiroidea"}
              margin="normal"
              variant="outlined"
              name="tiroidea"
              value={values.tiroidea}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
              </Grid>
            
          </Grid>
          </TabPanel>
          
          <TabPanel style={{width: '100%'}} value={'5'}>
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
            
              <Grid item >
          
          <Autocomplete
            freeSolo
            id="anticonceptivo"
            disableClearable
            defaultValue={values.anticonceptivo}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('anticonceptivo')}
            name="anticonceptivo"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Método anticonceptivo"}
              margin="normal"
              variant="outlined"
              name="anticonceptivo"
              value={values.anticonceptivo}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
              </Grid>
            
          </Grid>
          </TabPanel>

          <TabPanel style={{width: '100%'}} value={'6'}>
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
            
              <Grid item >
          
          <Autocomplete
            freeSolo
            id="embarazos_previos"
            disableClearable
            defaultValue={values.embarazos_previos}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('embarazos_previos')}
            name="embaraños_previos"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Embarazos previos"}
              margin="normal"
              variant="outlined"
              name="embarazos_previos"
              value={values.embarazos_previos}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
              </Grid>
            
          </Grid>
          </TabPanel>

          <TabPanel style={{width: '100%'}} value={'7'}>
          <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
            
              <Grid item >
          
          <Autocomplete
            freeSolo
            id="alergias"
            disableClearable
            defaultValue={values.alergias}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('alergias')}
            name="alergias"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Alergias"}
              margin="normal"
              variant="outlined"
              name="alergias"
              value={values.alergias}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
              </Grid>
            
          </Grid>
          </TabPanel>

          <TabPanel style={{width: '100%'}} value={'8'}>

            <Grid 
            spacing = {2}
            container
            item xs = {11} 
            direction="column"
            justifyContent="flex-start"
            style = {{borderStyle: 'ridge', margin: '10px'}}
            >
            
              <Grid item xs>
          
          <Autocomplete
            freeSolo
            id="cirugias"
            disableClearable
            defaultValue={values.cirugias}
            forcePopupIcon={true}
            options={props.enfermedades.destinationEntities ? props.enfermedades.destinationEntities.map((item) => item.theCode + ' ' +item.title) : []}
            onChange={handleSelect}
            onOpen={() => props.setNombre('cirugias')}
            name="cirugias"
            renderInput={(params) => (
            <Grid
            container
            item
            xs
            direction="row"
            justifyContent="flex-start"
            >
            <Grid container item xs = {10} > 
            <TextField
              {...params}
              label={"Cirugias"}
              margin="normal"
              variant="outlined"
              name="cirugias"
              value={values.cirugias}
              onChange={handleChange}
              InputProps={{ ...params.InputProps, type: 'search' }}
            />  

            </Grid>

            <Grid container item xs justifyContent="flex-start" alignItems="center">          
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            </Grid>

            </Grid>
            )}
          />
              </Grid>
            
            </Grid>
  
          </TabPanel>
        </TabContext>
        </Grid>
      
    </Paper>
  )
}

export default Enfermedades_adultez
