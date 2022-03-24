export const INITIAL_STATE = {
	showSignIn: true,
	token: '',
	firstName: '',
	lastName: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'IS_LOGGED_USER': {
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
			};
		}
		case 'UPDATE_NAME': {
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
			};
		}

		case 'IS_LOGGED': {
			return {
				...state,

				showSignIn: false,
				token: action.payload,
			};
		}
		case 'IS_LOGOUT': {
			return {
				...state,
				showSignIn: true,
			};
		}

		default:
			return state;
	}
}
