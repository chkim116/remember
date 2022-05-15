import { createSlice } from '@reduxjs/toolkit';

import {
	effAuth,
	effInviteRequest,
	effLoginUser,
	effLogout,
} from './auth.effect';
import { InitialState } from './types';

type State = ReturnType<typeof getAuthInitialState>;

export const getAuthInitialState = (): InitialState => {
	return {
		userData: {
			id: '',
			username: '',
			email: '',
			isInvited: false,
		},
		isLoading: false,
	};
};

export const auth = createSlice({
	name: 'auth',
	initialState: getAuthInitialState(),
	reducers: {
		reset: (state: State) => {
			state.userData = getAuthInitialState().userData;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(effLoginUser.fulfilled, (state, { payload }) => {
				if (payload) {
					state.userData = payload;
				}
			})

			.addCase(effLogout.fulfilled, (state, { payload }) => {
				if (payload) {
					state.userData = payload;
				}
			})

			.addCase(effAuth.fulfilled, (state, { payload }) => {
				if (payload) {
					state.userData = payload;
				}
			})

			.addCase(effInviteRequest.fulfilled, (state) => {
				state.userData.isInvited = true;
			})

			.addMatcher(
				(action) => {
					return action.type.includes('pending');
				},
				(state) => {
					state.isLoading = true;
				}
			)
			.addMatcher(
				(action) => {
					return (
						action.type.includes('fulfilled') ||
						action.type.includes('rejected')
					);
				},
				(state) => {
					state.isLoading = false;
				}
			),
});

export const { fakeInvited, reset } = auth.actions;
