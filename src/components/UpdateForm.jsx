import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateForm(props) {
	const dispatch = useDispatch();
	const firstName = useSelector((state) => state.firstName);
	const lastName = useSelector((state) => state.lastName);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				Authorization: 'Bearer' + localStorage.getItem('token'),
			},
			body: JSON.stringify({
				firstName: document.getElementById('form-update_firstname').value,
				lastName: document.getElementById('form-update_lastname').value,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: 'UPDATE_NAME',
					payload: { firstName: data.body.firstName, lastName: data.body.lastName },
				});

				cancelForm();
			})
			.catch((error) => {
				alert('Erreur de saisie');
			});
	};

	const cancelForm = (e) => {
		document.getElementById('profile_form-edit').classList.replace('flex', 'none');
		document.querySelector('#button-edit').classList.remove('none');
		document.getElementById('form-update_firstname').value = '';
		document.getElementById('form-update_lastname').value = '';
	};

	return (
		<div id="profile_form-edit" className="none">
			<input type="text" placeholder={firstName} id="form-update_firstname"></input>
			<input type="text" placeholder={lastName} id="form-update_lastname"></input>
			<button onClick={handleSubmit}>save</button>
			<button onClick={cancelForm}>cancel</button>
		</div>
	);
}
