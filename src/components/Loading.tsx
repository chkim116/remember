import { Spin } from 'antd';
import styled from 'styled-components';

const SpinWrap = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	z-index: 10;
	background-color: rgba(255, 255, 255, 0.3);
`;

const Loading = () => {
	return (
		<SpinWrap>
			<Spin size='large' />
		</SpinWrap>
	);
};

export default Loading;
