import { Card, Image, List } from 'antd';
import { CardProps } from 'antd/lib/card';
import VirtualList from 'rc-virtual-list';
import styled from 'styled-components';

const CardWrap = styled(Card)`
	min-width: 350px;
	.ant-card-head {
		padding: 0 6px;
	}

	.ant-card-body {
		padding: 0 6px;
	}
`;

const PlaceVirtualList = styled(VirtualList)`
	max-height: calc(100vh - 60px);
	overflow-y: scroll;
`;

interface Props extends Partial<CardProps> {
	// TODO: 바꿀것
	data: any;
	title: string;
}

export const PlaceList = ({ data, title, ...props }: Props) => {
	return (
		<CardWrap title={title} {...props}>
			<List>
				<PlaceVirtualList data={data} itemKey='id'>
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
				</PlaceVirtualList>
			</List>
		</CardWrap>
	);
};
