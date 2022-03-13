const INITIAL_STATE_USER = {
	email: undefined,
	firstName: undefined,
	lastName: undefined,
};

export default function userReducer(state = INITIAL_STATE_USER, action) {
	switch (action.type) {
		case 'IS_LOGGED':
			if (state.showSignIn) {
				return {
					...state,

					isLogged: true,
					showSignIn: false,
					showSignUp: false,
				};
			} else {
				return {
					...state,
					showSignIn: true,
					showSignUp: false,
				};
			}
		case 'IS_LOGOUT': {
			return {
				...state,
				isLogged: false,
				showSignIn: true,
			};
		}

		default:
			return state;
	}
}
