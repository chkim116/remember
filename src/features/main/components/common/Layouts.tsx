import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout } from 'antd';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

import MainMenu from './MainMenu';

const { Sider } = Layout;

const LayoutSection = styled(Layout)`
	min-height: 100vh;
	height: 100%;
`;

const SiderInner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding-bottom: 2em;
`;
const SiderInnerMenu = styled.div`
	width: 100%;
`;
const SiderInnerButton = styled(Button)`
	width: 100%;
`;
const SiderUser = styled(Avatar)`
	margin: 0 auto;
	cursor: pointer;
`;

interface Props {
	children: ReactNode;
}

export const Layouts = ({ children }: Props) => {
	const [collapsed, setCollapsed] = useState(true);

	const handleToggleClick = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<LayoutSection>
			<Sider breakpoint='lg' collapsed={collapsed}>
				<SiderInner>
					<SiderInnerMenu>
						<SiderInnerButton type='primary' onClick={handleToggleClick}>
							{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						</SiderInnerButton>
						<MainMenu />
					</SiderInnerMenu>
					<SiderUser size={40} icon={<UserOutlined />} />
				</SiderInner>
			</Sider>
			{children}
		</LayoutSection>
	);
};
