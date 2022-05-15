import { LOCAL_STORAGE_TOKEN_KEY } from '@/configs';
import { userData } from '@/_fixtures/auth/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthInitialState } from './auth.slice';

interface LoginData {
	username: string;
	email: string;
	password: string;
}

export const effLoginUser = createAsyncThunk(
	'auth/effLoginUser',
	async (loginData: LoginData) => {
		const { username, email, password } = loginData;
		try {
			// TODO: 로그인
			console.log(username, email, password);
			localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, 'token');
			return userData;
		} catch (err) {
			console.log(err);
		}
	}
);

export const effLogout = createAsyncThunk('auth/effLogout', () => {
	try {
		// TODO: 로그아웃
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
	} catch (err) {
		console.error(err);
	}
});

export const effAuth = createAsyncThunk('auth/effAuth', () => {
	try {
		// TODO: 권한 획득
		const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

		if (token) {
			return userData;
		}

		return getAuthInitialState().userData;
	} catch (err) {
		console.log(err);
	}
});
