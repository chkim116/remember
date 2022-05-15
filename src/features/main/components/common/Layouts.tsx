import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
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
	height: 100%;
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
					<Button type='primary' onClick={handleToggleClick}>
						{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					</Button>
					<MainMenu />
				</SiderInner>
			</Sider>

			{children}
		</LayoutSection>
	);
};
