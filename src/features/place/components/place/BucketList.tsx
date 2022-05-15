import { Card, Image, List } from 'antd';
import VirtualList from 'rc-virtual-list';

export const BucketList = () => {
	const mock = Array.from({ length: 20 }).map((_, i) => {
		return {
			id: i,
			title: '오마카세' + i,
			description: 'dsfdsfs',
		};
	});

	return (
		<Card title='Bucket List' size='small'>
			<List>
				<VirtualList data={mock} height={400} itemKey='id'>
					{(item: any) => (
						<List.Item key={item.id}>
							<List.Item.Meta
								avatar={
									<Image src='https://via.placeholder.com/100' width={100} />
								}
								title={item.title}
								description={
									<>
										<p>{item.description}</p>
									</>
								}
							/>
						</List.Item>
					)}
				</VirtualList>
			</List>
		</Card>
	);
};
