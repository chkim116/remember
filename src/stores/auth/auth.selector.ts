import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selAuth = (state: RootState) => state.auth;

export const useAuthSelector = createSelector(selAuth, (auth) => auth.userData);
