import { Route, Routes } from 'react-router-dom';

import { Place } from './Place';

export const PlaceRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Place />} />
		</Routes>
	);
};
