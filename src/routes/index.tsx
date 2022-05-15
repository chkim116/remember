import { selUserData } from '@/stores/auth/auth.selector';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import { invitedRoutes } from './invitedRoutes';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

export const AppRoutes = () => {
	const user = useSelector(selUserData);

	const routes = user.id
		? user.isInvited
			? protectedRoutes
			: invitedRoutes
		: publicRoutes;

	const element = useRoutes(routes);

	return element;
};
