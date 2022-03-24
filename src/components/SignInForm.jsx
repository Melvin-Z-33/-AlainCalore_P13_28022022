import { React } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
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
				dispatch({ type: 'IS_LOGGED', payload: { token: data.data.body.token } });

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

				<button type="submit" className="sign-in-button">
					Sign In
				</button>
			</form>
		</>
	);
}
