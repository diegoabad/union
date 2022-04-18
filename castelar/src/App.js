import React, { useState } from 'react';
import Login from './components/auth/Login';
import Home from './components/mainScreens/Home';
import { auth, db } from './firebase/credentials';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function App() {
	const [user, setUser] = useState(null);

	async function getUserInfoFirestore(uid) {
		const docRef = doc(db, `users/${uid}`);
		const info = await getDoc(docRef);
		return info.data();
	}

	function setUserWithFirebaseAndInfo(userFirebase) {
		getUserInfoFirestore(userFirebase.uid).then((data) => {
			const {
				rol,
				calendar,
				createdUser,
				name,
				lastName,
				schedule,
				title,
				specialty,
			} = data;
			const userData = {
				uid: userFirebase.uid,
				email: userFirebase.email,
				rol,
				calendar,
				createdUser,
				name,
				lastName,
				schedule,
				title,
				specialty,
			};
			setUser(userData);
		});
	}

	onAuthStateChanged(auth, (userFirebase) => {
		if (userFirebase) {
			if (!user) {
				setUserWithFirebaseAndInfo(userFirebase);
			}
		} else {
			setUser(null);
		}
	});

	return <div>{user ? <Home user={user} /> : <Login />}</div>;
}

export default App;
