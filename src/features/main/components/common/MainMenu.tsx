import {
	FileTextOutlined,
	HistoryOutlined,
	ScheduleOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainMenuItem = styled(Menu)`
	padding-top: 3em;
`;

const NAV_LINKS = [
	{
		key: 'schedule',
		label: '일정',
		icon: <ScheduleOutlined />,
	},
	{
		key: 'bucket-list',
		label: '버킷리스트',
		icon: <FileTextOutlined />,
	},
	{
		key: 'history',
		label: '이전기록',
		icon: <HistoryOutlined />,
	},
];

const menuItems = NAV_LINKS.map((item) => {
	return {
		key: item.key,
		label: item.label,
		icon: item.icon,
	};
});

const MainMenu = () => {
	const navigate = useNavigate();

	const handleMenuClick = ({ selectedKeys }: { selectedKeys: string[] }) => {
		navigate(selectedKeys[0]);
	};

	return (
		<MainMenuItem
			defaultSelectedKeys={['schedule']}
			onSelect={handleMenuClick}
			mode='inline'
			theme='dark'
			items={menuItems}
		/>
	);
};

export default MainMenu;
