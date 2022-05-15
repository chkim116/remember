import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

export const AppRoutes = () => {
	// TODO: 유저 권한
	const auth = true;
	const routes = auth ? protectedRoutes : publicRoutes;
	const element = useRoutes(routes);

	return <>{element}</>;
};
