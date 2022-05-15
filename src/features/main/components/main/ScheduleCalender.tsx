import { Badge, Calendar, Col, Radio, Row, Select } from 'antd';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

moment.locale('ko');

const CalendarWrap = styled(Calendar)`
	margin: 24px 0;
`;
const CalendarHeader = styled.div`
	margin-top: 12px;
	padding: 12px;
`;
const CalendarEvent = styled.ul`
	margin: 0;
	list-style: none;
`;
const CalendarEventItem = styled.li`
	margin: 0;
`;

export const ScheduleCalender = () => {
	return (
		<CalendarWrap
			dateCellRender={() => {
				return (
					<CalendarEvent>
						<CalendarEventItem>
							<Badge status='default' text='asd' />
						</CalendarEventItem>
					</CalendarEvent>
				);
			}}
			headerRender={({ value, type, onChange, onTypeChange }) => {
				const start = 0;
				const end = 12;
				const monthOptions = [];

				const months = [];
				for (let i = 1; i <= 12; i++) {
					months.push(`${i}월`);
				}

				for (let index = start; index < end; index++) {
					monthOptions.push(
						<Select.Option key={`${index}`}>{months[index]}</Select.Option>
					);
				}
				const month = value.month();

				const year = value.year();
				const options = [];
				for (let i = year - 10; i < year + 10; i += 1) {
					options.push(
						<Select.Option key={i} value={i}>
							{i}
						</Select.Option>
					);
				}
				return (
					<CalendarHeader>
						<Row gutter={8}>
							<Col>
								<Select
									dropdownMatchSelectWidth={false}
									onChange={(newYear) => {
										const now = value.clone().year(Number(newYear));
										onChange(now);
									}}
									value={String(year)}
								>
									{options}
								</Select>
							</Col>
							<Col>
								<Select
									dropdownMatchSelectWidth={false}
									value={String(month)}
									onChange={(selectedMonth) => {
										const newValue = value.clone();
										newValue.month(parseInt(selectedMonth, 10));
										onChange(newValue);
									}}
								>
									{monthOptions}
								</Select>
							</Col>

							<Col>
								<Radio.Group
									onChange={(e) => onTypeChange(e.target.value)}
									value={type}
								>
									<Radio.Button value='month'>Month</Radio.Button>
									<Radio.Button value='year'>Year</Radio.Button>
								</Radio.Group>
							</Col>
						</Row>
					</CalendarHeader>
				);
			}}
		/>
	);
};
