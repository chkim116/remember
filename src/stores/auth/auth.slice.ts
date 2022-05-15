import { createSlice } from '@reduxjs/toolkit';

export const getAuthInitialState = () => {
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
	reducers: {},
	extraReducers: (builder) => builder.addCase(),
});
