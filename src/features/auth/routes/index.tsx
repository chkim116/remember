import { Route, Routes } from 'react-router-dom';
import Find from './Find';

import Login from './Login';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/find' element={<Find />} />
		</Routes>
	);
};
