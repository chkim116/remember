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
	};
};

export const auth = createSlice({
	name: 'auth',
	initialState: getAuthInitialState(),
	reducers: {
		reset: (state: State) => {
			state.userData = getAuthInitialState().userData;
		},
		fakeInvited: (state: State) => {
			state.userData.isInvited = true;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(effLoginUser.pending, (state) => state)
			.addCase(effLoginUser.fulfilled, (state, { payload }) => {
				if (payload) {
					state.userData = payload;
				}
			})
			.addCase(effLoginUser.rejected, (state) => state)

			.addCase(effLogout.pending, (state) => state)
			.addCase(effLogout.fulfilled, (state, { payload }) => {
				if (payload) {
					state.userData = payload;
				}
			})
			.addCase(effLogout.rejected, (state) => state)

			.addCase(effAuth.pending, (state) => state)
			.addCase(effAuth.fulfilled, (state, { payload }) => {
				if (payload) {
					state.userData = payload;
				}
			})
			.addCase(effAuth.rejected, (state) => state)

			.addCase(effInviteRequest.pending, (state) => state)
			.addCase(effInviteRequest.fulfilled, (state) => {
				state.userData.isInvited = true;
			})
			.addCase(effInviteRequest.rejected, (state) => state),
});

export const { fakeInvited, reset } = auth.actions;
