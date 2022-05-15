import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import store from '@/stores';

interface Props {
	children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
	return <Provider store={store}>{children}</Provider>;
};
