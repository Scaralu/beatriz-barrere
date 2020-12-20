import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
	token: string;
	user: object;
}

interface SignInCredentials {
	email: string;
	password: string;
}

interface AuthContextDTO {
	user: object;
	signIn(credentials: SignInCredentials): Promise<void>;
	signOut(): void;
}

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({ children }) => {
	
	const [data, setData] = useState<AuthState>(() => {
		const token = localStorage.getItem('@BeatrizBarrere:token');
		const user = localStorage.getItem('@BeatrizBarrere:user');

		if (token && user) {
			return { token, user: JSON.parse(user) };
		}

		return {} as AuthState;
	});

	const signIn = useCallback(async ({email, password}) => {
		const response = await api.post('/sessions', {
			email,
			password
		});

		const { token, user } = response.data;

		localStorage.setItem('@BeatrizBarrere:token', token);
		localStorage.setItem('@BeatrizBarrere:user', JSON.stringify(user));

		setData({token, user})
	}, [])

	const signOut = useCallback(() => {
		localStorage.removeItem('@BeatrizBarrere:token');
		localStorage.removeItem('@BeatrizBarrere:user');
	}, [])

	return (
		<AuthContext.Provider value={{user: data.user, signIn, signOut}}>
			{children}
		</AuthContext.Provider>
	)
};

export function useAuth(): AuthContextDTO {
	const context = useContext(AuthContext);

	if (!context){
		throw new Error ('useAuth must be used within an AuthProvider');
	}

	return context;
}


