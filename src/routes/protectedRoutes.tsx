import { Empty, Spin } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { PlaceRoutes } from '@/features/place';

const FallbackSpin = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

const App = () => {
	return (
		<Suspense
			fallback={
				<FallbackSpin>
					<Spin size='large' />
				</FallbackSpin>
			}
		>
			<Outlet />
		</Suspense>
	);
};

export const protectedRoutes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <PlaceRoutes />,
			},
			{
				path: '*',
				element: (
					<div>
						<Empty />
					</div>
				),
			},
		],
	},
];
