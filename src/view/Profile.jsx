import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UpdateForm from '../components/UpdateForm';
import ButtonTransaction from '../components/buttonTransaction';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function Profile() {
	const dispatch = useDispatch();
	const firstName = useSelector((state) => state.firstName);
	const lastName = useSelector((state) => state.lastName);
	const token = useSelector((state) => state.token);
	console.log(token.token);

	axios({
		method: 'post',
		url: `http://localhost:3001/api/v1/user/profile`,
		headers: {
			Authorization: `Bearer ${token.token}`,
		},
	})
		.then((response) => {
			dispatch({
				type: 'IS_LOGGED_USER',
				payload: {
					firstName: response.data.body.firstName,
					lastName: response.data.body.lastName,
				},
			});
		})
		.catch((err) => console.log(err));

	const editForm = (e) => {
		document.querySelector('#button-edit').classList.add('none');
		document.getElementById('profile_form-edit').classList.replace('none', 'flex');
	};

	return (
		<>
			<Header />
			<main className="main bg-dark">
				<div className="header">
					<h1>
						Welcome back
						<br /> {firstName + ' ' + lastName}
					</h1>

					<UpdateForm />
					<button id="button-edit" className="edit-button" onClick={editForm}>
						Edit Name
					</button>
				</div>
				<h2 className="sr-only">Accounts</h2>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Checking (x8349)</h3>
						<p className="account-amount">$2,082.79</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<ButtonTransaction />
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Savings (x6712)</h3>
						<p className="account-amount">$10,928.42</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<ButtonTransaction />
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
						<p className="account-amount">$184.30</p>
						<p className="account-amount-description">Current Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<ButtonTransaction />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
