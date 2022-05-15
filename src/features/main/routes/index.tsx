import { Route, Routes } from 'react-router-dom';

import { Main } from './Main';

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
		</Routes>
	);
};
