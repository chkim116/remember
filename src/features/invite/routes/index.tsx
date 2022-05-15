import Loading from '@/components/Loading';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { selUserLoading } from '@/stores/auth/auth.selector';
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
	const isUserLoading = useSelector(selUserLoading);

	return (
		<Wrap>
			{isUserLoading && <Loading />}
			<Routes>
				<Route path='*' element={<Invite />} />
			</Routes>
		</Wrap>
	);
};
