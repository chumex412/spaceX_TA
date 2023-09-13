import { AuthActionTypes, AuthTypes } from '../domain/entities/auth';

const reducer = (state: AuthTypes, action: AuthActionTypes) => {
	if (action.type === 'auth/login') {
		return { ...state, ...action.payload };
	}

	if (action.type === 'auth/logout') {
		return { email: '', password: '' };
	}

	if (action.type === 'auth/expired') {
		return { email: '', password: '' };
	}
	return state;
};

export default reducer;
