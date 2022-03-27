import React from 'react';
import { useState } from 'react';
import s from './Login.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*Autenticacion*/
import { auth, db } from '../../firebase/credentials';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
/*Base de datos*/
import { doc, setDoc } from 'firebase/firestore';
import { toastConfig } from '../toastConfig';
/*Contantes de firebase*/

const Login = () => {
	const [register, setRegister] = useState(false);

	function handlerCreate(e) {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		const rol = e.target.elements.rol.value;
		registerUser(email, password, rol);
	}

	function handlerLogin(e) {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				'bien';
			})
			.catch(() => toast.error('Email o Contraseña incorrectos', toastConfig));
	}

	async function registerUser(email, password, rol) {
		const userInfo = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const docRef = doc(db, `users/${userInfo.user.uid}`);
		setDoc(docRef, { email, rol });
	}

	if (!register) {
		return (
			<div className={s.loginContainer}>
				<ToastContainer />
				<div className={s.loginIinfoContainer}>
					<h1 className={s.title}>Sign In</h1>
					<form className={s.inputsContainer} onSubmit={handlerLogin}>
						<input
							className={s.input}
							type='email'
							placeholder='Ingrese su Email'
							id='email'
						/>
						<input
							className={s.input}
							type='password'
							placeholder='Ingrese su Password'
							id='password'
						/>
						<p className={s.p}>
							¿Olvidaste tu contraseña?{' '}
							<span className={s.span}>Clic aquí</span>
						</p>
						<input className={s.btn} type='submit' value='Iniciar Sesión' />
					</form>
					<p className={s.cambio} onClick={() => setRegister(!register)}>
						Crear usuario
					</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className={s.loginContainer}>
				<div className={s.loginIinfoContainer}>
					<h1 className={s.title}>Sign Up</h1>
					<form className={s.inputsContainer} onSubmit={handlerCreate}>
						<input
							className={s.input}
							type='email'
							placeholder='Ingrese su Email'
							id='email'
						/>
						<input
							className={s.input}
							type='password'
							placeholder='Ingrese su Password'
							id='password'
						/>
						<select className={s.select} id='rol'>
							<option value='admin'>Admin</option>
							<option value='pro'>Profesional</option>
							<option value='rec'>Recepcionista</option>
						</select>

						<input className={s.btn} value='Crear Usuario' type='submit' />
					</form>
					<p className={s.cambio} onClick={() => setRegister(!register)}>
						Ir al login
					</p>
				</div>
			</div>
		);
	}
};

export default Login;
