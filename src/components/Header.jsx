import React from 'react';
import logo from '../assets/img/argentBankLogo.png';
import user from '../assets/img/user.png';
import { Link } from 'react-router-dom';
import '../designs/css/main.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function Header() {
	const dispatch = useDispatch();

	return (
		<>
			<nav className="main-nav">
				<Link to="/">
					<div className="main-nav-logo">
						<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
						<h1 className="sr-only">Argent Bank</h1>
					</div>
				</Link>
				<Link to="/login">
					<div className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						Sign In
					</div>
				</Link>
			</nav>
		</>
	);
}
