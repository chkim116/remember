import { Layouts, ScheduleCalender } from '../components';

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
			<ScheduleCalender />
		</Layouts>
	);
};
