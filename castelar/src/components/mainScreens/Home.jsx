import React, { useEffect } from 'react';
import NavBar from './NavBar';
import UserView from './UserView';
import AdminView from './AdminView';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Main.module.css';
import { toastConfig } from '../toastConfig';
import { setUser } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
export default function Home({ user }) {
	const dispatch = useDispatch();
	useEffect(() => {
		const fullName = capitaliceFullName(user.name, user.lastName);
		toast.success(`Iniciaste sesión como: ${fullName}`, toastConfig);
		dispatch(setUser(user));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (user.rol === 'admin') {
		return <AdminView />;
	}

	function capitaliceFullName(name, lastName) {
		let name2 = name.charAt(0).toUpperCase() + name.slice(1);
		let lastName2 = lastName.charAt(0).toUpperCase() + lastName.slice(1);
		return `${name2} ${lastName2}`;
	}

	return (
		<div className={s.homeContainer}>
			<ToastContainer />
			<NavBar />
			<UserView />
		</div>
	);
}
