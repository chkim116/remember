import { add } from '../utils/sample';

describe('샘플 함수 테스트', () => {
	it('a + b 값', () => {
		expect(add(3, 3)).toBe(6);
	});
});
