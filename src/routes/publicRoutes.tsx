import { AuthRoutes } from '@/features/auth/routes';

export const publicRoutes = [
	{
		path: '/',
		element: <AuthRoutes />,
	},
	{
		path: '*',
		element: <h1>로그인 하세요.</h1>,
	},
];
