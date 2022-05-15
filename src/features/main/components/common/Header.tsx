import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Title } = Typography;

const HeaderWrap = styled.div`
	background-color: #fff;
	position: fixed;
	display: flex;
	top: 0;
	z-index: 10;
	height: 50px;
	width: 100%;
`;
const HeaderHead = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 1024px;
	width: 100%;
	padding: 0 8px;
`;
const HeaderNav = styled.nav`
	display: flex;
`;
const HeaderNavUl = styled.ul`
	list-style: none;
	display: flex;
	margin: 0;
`;
const HeaderNavUlItem = styled(Link)`
	margin: 0;
	& + & {
		margin-left: 12px;
	}
`;

const Header = () => {
	const NAV_LINKS = [
		{
			name: 'Schedule',
			to: '/schedule',
		},
		{
			name: 'BucketList',
			to: '/bucket-list',
		},
		{
			name: 'History',
			to: '/history',
		},
		{ name: 'Profile', to: '/profile' },
	];
	return (
		<HeaderWrap>
			<HeaderHead>
				<Title level={4}>Remember</Title>
				<HeaderNav>
					<HeaderNavUl>
						{NAV_LINKS.map((link) => (
							<HeaderNavUlItem key={link.name} to={link.to}>
								{link.name}
							</HeaderNavUlItem>
						))}
					</HeaderNavUl>
				</HeaderNav>
			</HeaderHead>
		</HeaderWrap>
	);
};

export default Header;
