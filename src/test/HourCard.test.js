import React from 'react';
import { shallow, mount } from 'enzyme';

import HourCard from '../components/HourCard';

describe('HourCard', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<HourCard hour="5pm" icon="clear" temp="90°" />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render with the correct HTML', () => {
		const hourCard = wrapper.find('.hour-card');
		const hourCardHour = wrapper.find('.hour-day');
		const hourCardImg = wrapper.find('img');
		const hourCardTemp = wrapper.find('.hour-temp');

		expect(hourCard).toBeDefined();
		expect(hourCardHour).toBeDefined();
		expect(hourCardHour.text()).toEqual('5pm');
		expect(hourCardImg).toBeDefined();
		expect(hourCardTemp).toBeDefined();
		expect(hourCardTemp.text()).toEqual('90°');
	});
});
