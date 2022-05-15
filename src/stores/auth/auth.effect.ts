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
		rejectWithValue(err);
	}
});

export const effLogout = createAsyncThunk(
	'auth/effLogout',
	(_, { rejectWithValue }) => {
		try {
			// TODO: 로그아웃
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
			return getAuthInitialState().userData;
		} catch (err) {
			rejectWithValue(err);
		}
	}
);

export const effAuth = createAsyncThunk<UserData | undefined, void>(
	'auth/effAuth',
	(_, { rejectWithValue }) => {
		try {
			// TODO: 권한 획득
			const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

			if (token) {
				return userData;
			}

			return getAuthInitialState().userData;
		} catch (err) {
			rejectWithValue(err);
		}
	}
);

export const effInviteRequest = createAsyncThunk(
	'auth/effInviteRequest',
	(inviteCode: string, { rejectWithValue }) => {
		try {
			// TODO: 초대 성공
			console.log(inviteCode);
		} catch (err) {
			rejectWithValue(err);
		}
	}
);
