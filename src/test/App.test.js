import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../components/App';

describe('App', () => {
	let wrapper;
	const mockState = {
		location: 'Denver_CO',
		currentWeather: {
			city: 'Denver',
			currentCondition: 'Overcast',
			currentDay: 'Wednesday',
			currentTempF: 63,
			expHigh: 83,
			expLow: 60,
			icon: 'cloudy',
			state: 'CO',
			summary: 'Showers and thunderstorms early. Low 16C.'
		},
		sevenHour: [
			{ icon: 'clear', hour: '5pm', projectedTemp: '100° F', name: 'john' },
			{ icon: 'windy', hour: '6pm', projectedTemp: '78° F', name: 'john' }
		],
		tenDay: [
			{ day: 'Tuesday', expHigh: '98°', expLow: '45°', icon: 'foggy' },
			{ day: 'Wednesday', expHigh: '102°', expLow: '74°', icon: 'clear' }
		],
		tenDayDisplay: false,
		notFoundError: false
	};

	beforeEach(() => {
		localStorage.clear();
		localStorage.setItem('location', 'Denver');
		wrapper = shallow(<App />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have an initial state', () => {
		expect(wrapper.state()).toEqual({
			location: '',
			currentWeather: {},
			sevenHour: [],
			tenDay: [],
			tenDayDisplay: false,
			notFoundError: false
		});
	});

	it('should retrieve data from localStorage on mount', () => {
		// const location = localStorage.getItem('location');
		wrapper = mount(<App />);
		wrapper.setState({
			location: location
		});

		expect(wrapper.state().location).toEqual('Denver');

		// localStorage.setItem('location', 'Denver_CO');
		// wrapper = mount(<App />);
		// expect(wrapper.state().location).toEqual('Denver_CO');
	});

	it('should render seven CurrentWeather component', () => {
		wrapper.setState(mockState);

		expect(wrapper.find('CurrentWeather').length).toEqual(1);
	});

	it('should render a Search component', () => {
		expect(wrapper.find('Search').length).toEqual(1);
	});

	it('should render a SevenHour component', () => {
		wrapper.setState(mockState);

		expect(wrapper.find('SevenHour').length).toEqual(1);
	});

	it('should render a TenDay component', () => {
		wrapper.setState(mockState);

		wrapper.find('.ten-day').simulate('click');

		expect(wrapper.find('TenDay').length).toEqual(1);
	});

	it.skip('should set a location for weather data', () => {
		const location = 'Denver_CO';

		wrapper.instance().setLocation(location);

		console.log(wrapper.state());

		expect(wrapper.state().location).toEqual('Denver_CO');
	});

	it.skip('should render a welcome page if no location has been set', () => {});

	it.skip('should persist location in local storage', () => {});
});
