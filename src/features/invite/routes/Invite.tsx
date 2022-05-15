import { Button, Divider, Input, Typography } from 'antd';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '@/stores';
import { effInviteRequest } from '@/stores/auth/auth.effect';

const { Text } = Typography;

const Wrap = styled.div`
	max-width: 1000px;
	width: 100%;
	padding: 0 12px;
`;

const InviteCode = styled.pre`
	display: flex;
	justify-content: space-between;
	background-color: #f2f2f2;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	padding: 8px;
`;

const InviteCodeInputWrap = styled.div`
	display: flex;
	margin: 0 auto;
	max-width: 500px;
`;

const Invite = () => {
	const dispatch = useAppDispatch();

	const [inviteCode, setInviteCode] = useState('');

	const handleInviteCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInviteCode(e.target.value);
	};

	const handleInviteClick = () => {
		// TODO: 유효성 검사.. 초대 완료 시 리다이렉트
		// TODO: 공유 기능
		dispatch(effInviteRequest(inviteCode));
	};

	return (
		<Wrap>
			<Divider orientation='left'>
				<Text>초대 코드를 공유해 같이 일정을 공유해 보세요!</Text>
			</Divider>
			<InviteCode>
				<Text>촏코코도도</Text>
				<Text
					copyable={{ text: '초댘드드', tooltips: ['복사', '복사완료!'] }}
				></Text>
			</InviteCode>

			<br />
			<br />
			<br />

			<Divider orientation='left'>받은 초대 코드가 있으신가요?</Divider>

			<InviteCodeInputWrap>
				<Input placeholder='초대 코드 입력' onChange={handleInviteCodeChange} />
				<Button type='primary' onClick={handleInviteClick}>
					확인
				</Button>
			</InviteCodeInputWrap>
		</Wrap>
	);
};

export default Invite;
