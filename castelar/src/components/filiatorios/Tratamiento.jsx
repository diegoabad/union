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
	Paper,
} from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { getFormulario } from '../../redux/actions/index';

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
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '150ch',
		},
		'& .MuiTextField-root': {
			width: '300px',
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
		},
		textField: {
			width: '150ch',
		},
		'& .MuiInputBase-input': {
			fontSize: '1.5rem',
		},
		'& .MuiFormLabel-root': {
			fontSize: 'medium',
			backgroundColor: 'white',
			paddingLeft: '10px',
			paddingRight: '10px',
		},
		'& .MuiTypography-body1': {
			fontSize: '1.5rem',
		},
		'& .MuiInputLabel-outlined': {
			fontSize: '1.5rem',
			backgroundColor: 'white',
			paddingLeft: '10px',
			paddingRight: '10px',
		},
	},
}));

const Tratamiento = (props) => {
	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);

	const initialStateValues = {
		tratamiento: 'NO',
		profesionales: '',
		calle_prof: '',
		numero_prof: '',
		localidad_prof: '',
		cod_post_prof: '',
		provincia_prof: '',
		tel_prof: '',
		email_prof: '',
	};

	const [values, setValues] = React.useState(initialStateValues);

	useEffect(() => {
		if (editarFiliatorio) {
			setValues({
				tratamiento: paciente.tratamiento,
				profesionales: paciente.profesionales,
				calle_prof: paciente.calle_prof,
				numero_prof: paciente.numero_prof,
				localidad_prof: paciente.localidad_prof,
				cod_post_prof: paciente.cod_post_prof,
				provincia_prof: paciente.provincia_prof,
				tel_prof: paciente.tel_prof,
				email_prof: paciente.email_prof,
			});
		}
	}, []);

	useEffect(() => {
		dispatch(getFormulario(values));
	}, [values]);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setValues({ ...values, [name]: value });
	};

	const classes = useStyles();

	return (
		<Paper className={classes.root} style={{ backgroundColor: '#d7dbca' }}>
			<Grid container spacing={3}>
				<Subtitulo titulo='Tratamiento Actual' />
				<Grid item xs={12} style={{ margin: '10px' }}>
					<FormControl variant='outlined' label='Actualmente en tratamiento'>
						<FormLabel>Actualmente en tratamiento</FormLabel>
						<RadioGroup
							name='tratamiento'
							value={values.tratamiento}
							onChange={handleChange}
						>
							<FormControlLabel value='SI' control={<Radio />} label='SI' />
							<FormControlLabel value='NO' control={<Radio />} label='NO' />
						</RadioGroup>
					</FormControl>
				</Grid>
				{values.tratamiento === 'SI' && (
					<>
						<Grid item xs={12} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								variant='outlined'
								error={values.profesionales === '' ? true : false}
								required={true}
								label={
									values.profesionales === ''
										? 'profesional requerido'
										: 'profesionales'
								}
								name='profesionales'
								value={values.profesionales}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								variant='outlined'
								error={values.calle_prof === '' ? true : false}
								required={true}
								label={values.calle_prof === '' ? 'calle requerida' : 'calle'}
								name='calle_prof'
								value={values.calle_prof}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								variant='outlined'
								label={'número'}
								name='numero_prof'
								value={values.numero_prof}
								type='number'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								required={true}
								variant='outlined'
								error={values.localidad_prof === '' ? true : false}
								label={
									values.localidad_prof === ''
										? 'localidad requerida'
										: 'localidad'
								}
								name='localidad_prof'
								value={values.localidad_prof}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								required={true}
								error={values.cod_post_prof === '' ? true : false}
								variant='outlined'
								label={values.cod_post_prof === '' ? 'C.P requerido' : 'C.P.'}
								name='cod_post_prof'
								value={values.cod_post_prof}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								error={values.provincia_prof === '' ? true : false}
								variant='outlined'
								label={
									values.provincia_prof === ''
										? 'provincia requerida'
										: 'provincia'
								}
								name='provincia_prof'
								value={values.provincia_prof}
								required={true}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								variant='outlined'
								label='telefono'
								name='tel_prof'
								value={values.tel_prof}
								onChange={handleChange}
							/>
						</Grid>

						<Grid item xs={12} sm={8} md={2} style={{ margin: '10px' }}>
							<TextField
								className={classes.textField}
								fullWidth
								variant='outlined'
								label='email'
								name='email_prof'
								value={values.email_prof}
								onChange={handleChange}
							/>
						</Grid>
					</>
				)}
			</Grid>
		</Paper>
	);
};

export default Tratamiento;
