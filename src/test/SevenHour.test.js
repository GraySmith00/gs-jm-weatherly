import React from 'react';
import { shallow, mount } from 'enzyme';

import SevenHour from '../components/SevenHour';

describe('SevenHour', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SevenHour sevenHourData={[]} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render seven HourCard components', () => {
		const sevenHour = [
			{ icon: 'clear', hour: '5pm', projectedTemp: '100° F', name: 'john' },
			{ icon: 'windy', hour: '6pm', projectedTemp: '78° F', name: 'john' }
		];

		wrapper = shallow(<SevenHour sevenHourData={sevenHour} />);

		const firstCard = wrapper.find('HourCard').first();
		const lastCard = wrapper.find('HourCard').last();

		expect(wrapper.find('HourCard').length).toEqual(2);
		expect(firstCard.props().icon).toEqual('clear');
		expect(firstCard.props().hour).toEqual('5pm');
		expect(lastCard.props().icon).toEqual('windy');
		expect(lastCard.props().temp).toEqual('78° F');
	});
});
