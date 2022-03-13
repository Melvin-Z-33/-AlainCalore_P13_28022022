import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
	const { showSignIn } = useSelector((state) => ({ ...state.LoginReducer }));
	//	const userLogin = useSelector((state) => state.showSignIn);
	console.log(showSignIn);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:3001/api/v1/user/login', {
				email: document.getElementById('username').value,
				password: document.getElementById('password').value,
			})
			.then((data) => {
				console.log(data.data.body.token);
				dispatch({ type: 'IS_LOGGED', payload: { token: data.data.body.token } });
				localStorage.setItem('token', data.data.body.token);
				navigate('/profile');
			})
			.catch((error) => {
				console.log(error.message);
				navigate('/login');
				alert('Erreur de saisie');
			});
	};

	return (
		<>
			{/* {userLogin.status === 200 && <Redirect to="/profile" />} */}
			<form onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				{/* PLACEHOLDER DUE TO STATIC SITE */}
				<button type="submit" className="sign-in-button">
					Sign In
				</button>

				{/* SHOULD BE THE BUTTON BELOW
<button className="sign-in-button">Sign In</button> */}
			</form>
		</>
	);
}
