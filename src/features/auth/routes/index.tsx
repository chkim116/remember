import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Find from './Find';
import Login from './Login';

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 90vh;
`;

export const AuthRoutes = () => {
	return (
		<Wrap>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/find' element={<Find />} />
			</Routes>
		</Wrap>
	);
};
