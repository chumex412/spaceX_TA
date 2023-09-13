import { useContext, createContext, useMemo, useReducer, ReactNode, Dispatch } from 'react';
import { AuthActionTypes, AuthContextTypes } from '../domain/entities/auth';
import authReducer from '../reducers/authReducer';

const AuthContext = createContext<AuthContextTypes<Dispatch<AuthActionTypes>>>({
	authState: { email: '', password: '' },
	authDispatch: () => {}
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [authState, authDispatch] = useReducer(authReducer, { email: '', password: '' });

	const authContextValues = useMemo(() => ({ authState, authDispatch }), [authState, authDispatch]);

	return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
};

export default function useAuthContext() {
	return useContext(AuthContext);
}
