import React, { useEffect } from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
	Grid,
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	FormControlLabel,
	Select,
	MenuItem,
	InputLabel,
	Paper,
} from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Alert from '@material-ui/lab/Alert';

import Subtitulo from '../admision1/componente/Subtitulo.jsx';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { getFormulario } from '../../redux/actions/index';

import { db } from '../../firebase/credentials'
import {  getDoc, doc } from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiGrid-root': {
			display: 'flex',
			margin: theme.spacing(1),
			marginLeft: theme.spacing(2),
			width: '100%',
			backgroundColor: '#FAFAFA',
		},
		'& .MuiTextField-root': {
			width: '300px',
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
		},
		'& .MuiInputBase-input': {
			fontSize: '1.5rem',
		},
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgba(32, 135, 252, 0.1)',
    },
		'& .MuiFormLabel-root': {
			fontSize: 'medium',
			// backgroundColor: 'white',
			paddingLeft: '10px',
			paddingRight: '10px',
		},
		'& .MuiTypography-body1': {
			fontSize: '1.5rem',
		},
		'& .MuiInputLabel-outlined': {
			fontSize: '1.5rem',
			// backgroundColor: 'white',
			paddingLeft: '10px',
			paddingRight: '10px',
		},
		'& .MuiAlert-message': {
      fontSize: '1.5rem',
  }
	},
}));

const controlDni = async (dni, setDatos) => {
  const referencia = doc(db, "pacientes", dni);

  const querySnapshot = await getDoc(referencia);

  if (querySnapshot.exists()) {
    setDatos(querySnapshot.data())
    return querySnapshot.data()
  }
  return false
}

const Filiatorios = (props) => {
	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);
	let años = '';

	const initialStateValues = {
		nombre: '',
		apellido: '',
		fechaNacimiento: new Date(),
		historia_clinica: props.historial,
		sexo: 'femenino',
		genero: '',
		dni: '',
		nacionalidad: '',
		estado_civil: 'soltero',
	};

	const [values, setValues] = React.useState(initialStateValues);
	const [age, setAge] = React.useState('');
	const [controles, setControles] = React.useState(false)
	const [datos, setDatos] = React.useState('')

	useEffect(() => { 
		if (editarFiliatorio) {
			setValues({
				nombre: paciente.nombre,
				apellido: paciente.apellido,
				fechaNacimiento: new Date(paciente.fechaNacimiento.seconds * 1000),
				historia_clinica: paciente.historia_clinica,
				sexo: paciente.sexo,
				genero: paciente.genero,
				dni: paciente.dni,
				nacionalidad: paciente.nacionalidad,
				estado_civil: paciente.estado_civil,
			});
			setAge('');
		}
	}, []);

	useEffect(() => {
    if (!editarFiliatorio) {
		setValues({
			...values,
			historia_clinica: props.historial
		});
  }
	}, [props.historial]);

	useEffect(() => {
		dispatch(getFormulario( values ));
	}, [values]);

	const handleChange = async (event) => {

		const { name, value } = event.target;

		if (name !== 'dni') {
			setValues({ ...values, [name]: value });
			if (values.dni > 999999 && controles === true ){
        const result = await controlDni(values.dni, setDatos)
        if (result) setValues({...values, dni: ''})
        setControles(false)
    }

		} else {
			setControles(true) 
			const parsValue = parseInt(value);

			if (Number.isInteger(parsValue) && parsValue >= 0) {
				setValues({ ...values, [name]: value });
			}
		}
	};

	const handleDateChange = (date) => {
    console.log(date)
		if (date !== null && date !== 'Invalid Date' && date !== undefined) {
			
      let today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

      const result = Math.trunc((today - date) / (1000 * 60 * 60 * 24 * 365))
			if (!day || !month || !year) años = 'error';
			if ( result >= 0 && result <= 200) {
        años = result;
      }else{
        años = 'error';
      }


			if (años !== 'error') {
				setAge(`${años} años`);
				setValues({ ...values, fechaNacimiento: date });
			} else setAge('error');
		} else {
			setAge('error');
		}
	};

	const classes = useStyles();

	return (
		<Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
			<Grid container spacing={3}>
				<Subtitulo titulo='Paciente' />

				<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
					<TextField
						className={classes.textField}
						fullWidth
						variant='filled'
						error={values.nombre === '' ? true : false}
						label={values.nombre === '' ? 'Nombre es requerido' : 'Nombre'}
						name='nombre'
						value={values.nombre}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
					<TextField
						className={classes.textField}
						fullWidth
						variant='filled'
						error={values.apellido === '' ? true : false}
						label={
							values.apellido === '' ? 'Apellido es requerido' : 'Apellido'
						}
						name='apellido'
						value={values.apellido}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={8} md={4} style={{ margin: '10px' }}>
					<FormControl variant='outlined' label='Género de Nacimiento'>
						<FormLabel>Sexo de nacimiento</FormLabel>
						<RadioGroup name='sexo' value={values.sexo} onChange={handleChange}>
							<FormControlLabel
								value='femenino'
								control={<Radio />}
								label='femenino'
							/>
							<FormControlLabel
								value='masculino'
								control={<Radio />}
								label='masculino'
							/>
						</RadioGroup>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
					<TextField
						className={classes.textField}
						fullWidth
						variant='filled'
						label='Sexo autopercibido'
						name='genero'
						value={values.genero}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
					<TextField
						className={classes.textField}
						fullWidth
						variant='filled'
						error={values.dni === 0 || values.dni < 1000000 ? true : false}
						label={
							values.dni === 0 || values.dni < 1000000
								? 'ingrese un dni válido'
								: 'DNI'
						}
						name='dni'
						value={values.dni}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
					<TextField
						className={classes.textField}
						fullWidth
						variant='filled'
						error={values.nacionalidad === '' ? true : false}
						label={
							values.nacionalidad === ''
								? 'Nacionalidad es requerida'
								: 'Nacionalidad'
						}
						name='nacionalidad'
						value={values.nacionalidad}
						onChange={handleChange}
					/>
				</Grid>

				<Grid container className='container' justifyContent='flex-start'>
					<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								variant='inline'
								format='dd/MM/yyyy'
								margin='normal'
								id='date-picker-dialog'
								label='Fecha de nacimiento'
								name='fechaNacimiento'
								value={values.fechaNacimiento}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>
					</Grid>
					<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
						<TextField
							className={classes.textField}
							fullWidth
							error={age === 'error' ? true : false}
							disabled={true}
							value={
								age === '' ? handleDateChange(values.fechaNacimiento) : age
							}
							variant='filled'
							label={age === 'error' ? 'fecha incorrecta' : 'edad'}
						/>
					</Grid>
					<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
						<FormControl className={classes.formControl } style = {{ width: '100%' }}>
							<InputLabel id='estado-civil'>Estado Civil</InputLabel>
							<Select
								labelId='estado-civil'
								id='estado-civil'
								name='estado_civil'
								value={values.estado_civil}
								onChange={handleChange}

							>
								<MenuItem value='casado'>casado/a</MenuItem>
								<MenuItem value='soltero'>soltero/a</MenuItem>
								<MenuItem value='viudo'>viudo/a</MenuItem>
								<MenuItem value='divorciado'>divorciado/a</MenuItem>
								<MenuItem value='otro'>otro/a</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
						<TextField
							className={classes.textField}
							disabled={true}
							name='historia_clinica'
							value={values.historia_clinica}
							fullWidth
							variant='filled'
							label='Historia Clínica Nº'
						/>
					</Grid>
				</Grid>
				{datos.filiatorios &&  						
        <Grid item xs={12}>
					<Paper>
						<Alert severity='error'>{`el documento ingresado pertenece a ${datos.filiatorios.nombre} ${datos.filiatorios.apellido}`}</Alert>
					</Paper>
					</Grid> } 
			</Grid>
		</Paper>
	);
};

export default Filiatorios;
