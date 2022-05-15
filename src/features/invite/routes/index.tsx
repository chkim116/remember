import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Invite from './Invite';

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 90vh;
`;

export const InviteRoutes = () => {
	return (
		<Wrap>
			<Routes>
				<Route path='/' element={<Invite />} />
			</Routes>
		</Wrap>
	);
};
