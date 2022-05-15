import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { AppRoutes } from './routes';

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 90vh;
`;

function App() {
	return (
		<BrowserRouter>
			<Wrap>
				<AppRoutes />
			</Wrap>
		</BrowserRouter>
	);
}

export default App;
