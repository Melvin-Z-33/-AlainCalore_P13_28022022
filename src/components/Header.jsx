import React from 'react';
import logo from '../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../designs/css/main.css';

export default function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const showSignIn = useSelector((state) => state.showSignIn);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch({ type: 'IS_LOGOUT' });
		localStorage.removeItem('token');
		localStorage.removeItem('firstName');
		localStorage.removeItem('lastName');
		navigate('/');
	};

	return (
		<>
			<nav className="main-nav">
				<Link to="/">
					<div className="main-nav-logo">
						<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
						<h1 className="sr-only">Argent Bank</h1>
					</div>
				</Link>
				{showSignIn ? (
					<Link to="/login">
						<div className="main-nav-item">
							<i className="fa fa-user-circle"></i>
							Sign In
						</div>
					</Link>
				) : (
					<Link to="/" onClick={handleLogout}>
						<div className="main-nav-item">
							<i className="fa fa-sign-out"></i>
							Sign Out
						</div>
					</Link>
				)}
			</nav>
		</>
	);
}
