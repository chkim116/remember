import { Layouts, PlaceList, ScheduleCalender } from '../components';

const headStyle = {
	padding: '0 1em',
	fontSize: '18px',
	color: '#afafaf',
};

export const Main = () => {
	const mock = Array.from({ length: 20 }).map((_, i) => {
		return {
			id: i,
			title: '오마카세' + i,
			description: 'dsfdsfs',
		};
	});

	return (
		<Layouts>
			<PlaceList data={mock} title='Place List' headStyle={headStyle} />
			<ScheduleCalender />
		</Layouts>
	);
};
