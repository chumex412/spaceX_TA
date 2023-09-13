export type AuthContextTypes<S> = {
	authState: AuthTypes;
	authDispatch: S;
};

export type AuthTypes = {
	email: string;
	password: string;
};

type LoginActionType = {
	type: 'auth/login';
	payload: AuthTypes;
};

type LogoutActionType = {
	type: 'auth/logout';
};

type ExpiredActionType = {
	type: 'auth/expired';
};

export type AuthActionTypes = LoginActionType | LogoutActionType | ExpiredActionType;
