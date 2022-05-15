import Login from '@/features/login/routes/Login';

export const publicRoutes = [
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '*',
		element: <h1>로그인 하세요.</h1>,
	},
];
