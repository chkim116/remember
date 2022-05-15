import { Layouts, PlaceList, ScheduleCalender } from '../components';

export const Place = () => {
	const mock = Array.from({ length: 20 }).map((_, i) => {
		return {
			id: i,
			title: '오마카세' + i,
			description: 'dsfdsfs',
		};
	});

	return (
		<Layouts>
			<PlaceList
				data={mock}
				title='To be continue..'
				extra='우리가 곧 할 목록들 :)'
			/>
			<ScheduleCalender />
			<PlaceList data={mock} title='버킷리스트' extra='우리 꼭 하자 :)' />
		</Layouts>
	);
};
