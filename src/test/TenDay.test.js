import React from 'react';
import { shallow, mount } from 'enzyme';

import TenDay from '../components/TenDay';

describe('TenDayForecast', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<TenDay tenDayData={[]} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render ten DayCard components', () => {
		const tenDay = [
			{ day: 'Tuesday', expHigh: '98°', expLow: '45°', icon: 'foggy' },
			{ day: 'Wednesday', expHigh: '102°', expLow: '74°', icon: 'clear' }
		];

		wrapper = shallow(<TenDay tenDayData={tenDay} />);

		const firstCard = wrapper.find('DayCard').first();
		const lastCard = wrapper.find('DayCard').last();

		expect(wrapper.find('DayCard').length).toEqual(2);
		expect(firstCard.props().icon).toEqual('foggy');
		expect(firstCard.props().high).toEqual('98°');
		expect(lastCard.props().low).toEqual('74°');
		expect(lastCard.props().day).toEqual('Wednesday');
	});
});
