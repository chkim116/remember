import { ReactNode, useLayoutEffect } from 'react';
import { Provider, useSelector } from 'react-redux';

import store, { useAppDispatch } from '@/stores';
import { effAuth } from '@/stores/auth/auth.effect';
import { selUserData } from '@/stores/auth/auth.selector';

interface Props {
	children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
	const user = useSelector(selUserData);
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		if (user.id) {
			return;
		}

		dispatch(effAuth());
	}, [dispatch, user.id]);

	return <>{children}</>;
};

export const AppProvider = ({ children }: Props) => {
	return (
		<Provider store={store}>
			<AuthProvider>{children}</AuthProvider>
		</Provider>
	);
};
