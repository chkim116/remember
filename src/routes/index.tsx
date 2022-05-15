import { useRoutes } from 'react-router-dom';

import { invitedRoutes } from './invitedRoutes';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

export const AppRoutes = () => {
	// TODO: 유저 권한
	const auth = {
		login: true,
		invited: false,
	};

	let routes = auth.login
		? auth.invited
			? protectedRoutes
			: invitedRoutes
		: publicRoutes;

	const element = useRoutes(routes);

	return <>{element}</>;
};
