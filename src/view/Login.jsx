import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SignInForm from '../components/SignInForm';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
	const showModal = useSelector((state) => state);
	return (
		<>
			<Header />
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<SignInForm />
				</section>
			</main>

			<Footer />
		</>
	);
}
