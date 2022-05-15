import { emailRegExp } from '@/lib/regExp';
import { Button, Divider, Form, Input } from 'antd';
import styled from 'styled-components';

const Wrap = styled.div`
	max-width: 340px;
`;
const FindForm = styled(Form)`
	display: flex;
`;
const FindInput = styled(Input)`
	width: 280px;
`;

const Find = () => {
	const handleFinish = (values: any) => {
		const { email } = values;

		if (email) {
			// TODO: 비밀번호 찾는 곳으로 리다이렉트 메일
			alert('메일이 전송되었습니다. 확인해 주세요.');
		}
	};

	return (
		<Wrap>
			<Divider>가입한 이메일로 PW 찾기</Divider>
			<FindForm onFinish={handleFinish}>
				<Form.Item
					name='email'
					rules={[
						{
							pattern: emailRegExp,
							required: true,
							message: '이메일 형식으로 입력해 주세요.',
						},
					]}
				>
					<FindInput type='email' placeholder='Email' />
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						확인
					</Button>
				</Form.Item>
			</FindForm>
		</Wrap>
	);
};

export default Find;
