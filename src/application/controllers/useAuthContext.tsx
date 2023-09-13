import { useContext, useState, useEffect, createContext, useMemo, useReducer, ReactNode, Dispatch } from 'react';
import { AuthActionTypes, AuthContextTypes } from '../domain/entities/auth';
import authReducer from '../reducers/authReducer';
import { authModel } from '../domain/models/auth';

const AuthContext = createContext<AuthContextTypes<Dispatch<AuthActionTypes>>>({
	authState: authModel('', ''),
	authDispatch: () => {}
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [timeLeft, setTimeLeft] = useState(120);

	const [authState, authDispatch] = useReducer(authReducer, authModel('', ''));

	useEffect(() => {
		let timer: ReturnType<typeof setInterval>;

		if (timeLeft === 0) {
			authDispatch({ type: 'auth/logout' });
			setTimeLeft(120);
		} else {
			if (authState.email) {
				timer = setInterval(() => {
					setTimeLeft((prevTime) => prevTime - 1);
				}, 1000);
			}
		}

		return () => clearInterval(timer);
	}, [timeLeft, authDispatch, authState.email]);

	const authContextValues = useMemo(() => ({ authState, authDispatch }), [authState, authDispatch]);

	return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
};

export default function useAuthContext() {
	return useContext(AuthContext);
}
