import { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutSection = styled.section`
	background-color: #f0f0f0;
	padding: 8px;
	min-height: 100vh;
	height: 100%;
`;
const Wrap = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
`;

interface Props {
	children: ReactNode;
}

export const Layouts = ({ children }: Props) => {
	return (
		<LayoutSection>
			<Wrap>{children}</Wrap>
		</LayoutSection>
	);
};
