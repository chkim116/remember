import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_TOKEN_KEY } from '@/configs';
import { userData } from '@/_fixtures/auth/user';
import { getAuthInitialState } from './auth.slice';
import { UserData, UserLoginDto } from './types';

export const effLoginUser = createAsyncThunk<
	UserData | undefined,
	UserLoginDto
>('auth/effLoginUser', (loginData: UserLoginDto, { rejectWithValue }) => {
	const { email, password } = loginData;
	try {
		// TODO: 로그인
		console.log(email, password);
		localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, 'token');
		return userData;
	} catch (err) {
		console.log(err);
		rejectWithValue('error');
	}
});

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
