import { BucketList, Layouts, ScheduleCalender } from '../components';

export const Home = () => {
	return (
		<Layouts>
			<BucketList />
			<ScheduleCalender />
		</Layouts>
	);
};
