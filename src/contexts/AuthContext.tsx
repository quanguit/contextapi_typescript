import React, { createContext, useContext, useReducer } from 'react';
import { authReducer, AuthState } from '../reducers/AuthReducer';
import { AuthActionType } from '../reducers/types';

interface Auth {
	authInfo: AuthState;
	toggleAuth: (username: string) => void;
}

const authDefault = {
	isAuthenticated: false,
	username: '',
};

// phải trùng với cái value trong Provider
export const AuthContext = createContext<Auth>({
	authInfo: authDefault,
	toggleAuth: () => {},
});

const AuthContextProvider: React.FC = ({ children }) => {
	const [authInfo, dispatch] = useReducer(authReducer, authDefault);

	const toggleAuth = (username: string) =>
		dispatch({ type: AuthActionType.TOGGLE_AUTH, payload: username });

	return (
		<AuthContext.Provider value={{ authInfo, toggleAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export default AuthContextProvider;
