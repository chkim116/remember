import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { emailRegExp } from '@/lib/regExp';

const { Title } = Typography;
const { useForm } = Form;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 90vh;
`;

const LoginForm = styled(Form)`
	max-width: 340px;
	width: 100%;
`;

const LoginFormButtonWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 8px;
`;

const MoveToLoginButton = styled(Button)`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const RegisterButtonWrap = styled.div`
	display: flex;
	flex-direction: column;

	button + button {
		margin-top: 8px;
	}
`;

const Login = () => {
	const [form] = useForm();
	const [loginType, setLoginType] = useState<'login' | 'register'>('login');
	const isLoginForm = loginType === 'login';

	const onFinish = () => {};

	const handleRegisterChange = () => {
		setLoginType((prev) => (prev === 'login' ? 'register' : 'login'));
	};

	useEffect(() => {
		// TODO: 서버 API 호출 후 에러 메시지 보내도록 하기.
		form.setFields([
			{
				name: 'email',
				errors: ['이메일이 정확하지 않습니다.'],
			},
		]);
	}, []);

	return (
		<Wrap>
			<Form.Item>
				<Title>Remember</Title>
			</Form.Item>
			<LoginForm form={form} onFinish={onFinish}>
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
					<Input prefix={<UserOutlined />} placeholder='Email' />
				</Form.Item>
				<Form.Item
					name='password'
					rules={[
						{
							min: 1,
							required: true,
							message: '비밀번호를 입력해 주세요.',
						},
					]}
				>
					<Input
						prefix={<LockOutlined />}
						type='password'
						placeholder='Password'
					/>
				</Form.Item>

				{!isLoginForm && (
					<Form.Item
						name='password2'
						rules={[
							{
								min: 1,
								required: true,
								message: '비밀번호를 다시 입력해 주세요.',
							},
						]}
					>
						<Input
							prefix={<LockOutlined />}
							type='password'
							placeholder='Password2'
						/>
					</Form.Item>
				)}

				<LoginFormButtonWrap>
					<Form.Item>
						{isLoginForm && <Link to='/find'>PW 찾기</Link>}
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							{isLoginForm ? '로그인' : '회원가입'}
						</Button>
					</Form.Item>
				</LoginFormButtonWrap>

				{isLoginForm ? (
					<MoveToLoginButton type='primary' onClick={handleRegisterChange}>
						일반 회원가입
					</MoveToLoginButton>
				) : (
					<MoveToLoginButton type='primary' onClick={handleRegisterChange}>
						로그인 화면으로
					</MoveToLoginButton>
				)}

				<Divider>간편가입</Divider>

				<RegisterButtonWrap>
					{/* TODO: 소셜 로그인 버튼 추가하기 */}
					<Button>카카오 가입</Button>
					<Button>구글 가입</Button>
				</RegisterButtonWrap>
			</LoginForm>
		</Wrap>
	);
};

export default Login;
