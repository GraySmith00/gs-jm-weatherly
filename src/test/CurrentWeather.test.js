import React from 'react';
import { shallow, mount } from 'enzyme';

import CurrentWeather from '../components/CurrentWeather';

describe('CurrentWeather', () => {
	let wrapper;

	const currentWeatherData = {
		city: 'Denver',
		currentCondition: 'Clear',
		currentDay: 'Wednesday',
		currentTempF: '97',
		expHigh: '104',
		expLow: '79',
		icon: 'clear',
		state: 'CO',
		summary: 'Clear, Low 79C'
	};

	beforeEach(() => {
		wrapper = shallow(<CurrentWeather currentWeather={currentWeatherData} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render with the correct HTML', () => {
		const location = wrapper.find('.current-weather > h1');
		const currentTemp = wrapper.find('.current-info > h3');
		const currentHigh = wrapper.find('.high-temp');
		const currentLow = wrapper.find('.low-temp');
		const currentImg = wrapper.find('.current-info > img');

		expect(location).toBeDefined();
		expect(location.text()).toEqual('Denver, CO');
		expect(currentTemp.text()).toEqual('97');
		expect(currentHigh.text()).toEqual('104');
		expect(currentLow.text()).toEqual('79');
		expect(currentImg).toBeDefined();
	});
});
