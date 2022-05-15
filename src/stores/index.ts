import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

import { auth } from './auth';

const reducer = combineReducers({
	auth: auth.reducer,
});

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV === 'production',
	middleware: (getDefaultMiddleware) => {
		return process.env.NODE_ENV === 'production'
			? getDefaultMiddleware()
			: getDefaultMiddleware().concat(logger);
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
