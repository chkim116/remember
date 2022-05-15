import { Card, Image, List } from 'antd';
import { CardProps } from 'antd/lib/card';
import VirtualList from 'rc-virtual-list';

interface Props extends Partial<CardProps> {
	// TODO: 바꿀것
	data: any;
	title: string;
}

export const PlaceList = ({ data, title, ...props }: Props) => {
	return (
		<Card title={title} {...props}>
			<List>
				<VirtualList data={data} height={400} itemKey='id'>
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
