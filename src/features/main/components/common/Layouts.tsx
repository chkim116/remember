import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutSection = styled.section`
	background-color: #f9f9f9;
	min-height: 100vh;
	height: 100%;
	margin-top: 50px;
`;
const Wrap = styled.div`
	width: 100%;
	max-width: 1024px;
	padding: 8px;
	margin: 0 auto;
`;

interface Props {
	children: ReactNode;
}

export const Layouts = ({ children }: Props) => {
	return (
		<LayoutSection>
			<Header />
			<Wrap>{children}</Wrap>
		</LayoutSection>
	);
};
