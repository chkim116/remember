import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

function App() {
	return (
		<BrowserRouter>
			<AppProvider>
				<AppRoutes />
			</AppProvider>
		</BrowserRouter>
	);
}

export default App;
