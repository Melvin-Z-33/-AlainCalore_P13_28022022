const INITIAL_STATE_LOGIN = {
	showSignIn: true,
	showSignUp: false,
	isLogged: false,
	token: '',
	isEdit: false,
};

export default function LoginReducer(state = INITIAL_STATE_LOGIN, action) {
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
