import React, { useEffect } from 'react';
import NavBar from './NavBar';
import UserView from './UserView';
import AdminView from './AdminView';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Main.module.css';
import { toastConfig } from '../toastConfig';
export default function Home({ user }) {
	useEffect(() => {
		toast.success(`Iniciaste sesión como: ${user.email}`, toastConfig);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (user.rol === 'admin') {
		return <AdminView />;
	}
	return (
		<div className={s.homeContainer}>
			<ToastContainer />
			<NavBar />
			<UserView />
		</div>
	);
}
