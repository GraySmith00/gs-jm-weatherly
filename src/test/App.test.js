import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from '../components/App';
import data from '../utils/mockData';

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
		wrapper = shallow(<App />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
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

	it('should save location to localStorage', () => {
		wrapper.instance().setLocalStorage('Denver_CO');

		expect(localStorage.getItem('location')).toEqual('Denver_CO');
	});

	it.skip('should retrieve data from local storage on mount', () => {
		expect(wrapper.state().location).toEqual('');

		wrapper.instance().setState({
			location: 'Denver_CO'
		});

		wrapper.instance().setLocalStorage();

		wrapper = shallow(<App />);

		expect(wrapper.state().location).toEqual('Denver_CO');
	});

	it('should render seven CurrentWeather component', () => {
		wrapper.setState(mockState);

		expect(wrapper.find('CurrentWeather').length).toEqual(1);
	});

	it('should render a App component', () => {
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

	it('should set a location for weather data', () => {
		let mockFn = jest.fn();

		wrapper.instance().handleApiCall = mockFn;

		wrapper.instance().setLocation(location);

		expect(wrapper.instance().handleApiCall).toHaveBeenCalled();
	});

	it('should set location state', () => {
		wrapper.instance().setLocationState(data, 'Denver_CO');

		expect(wrapper.state().location).toEqual('Denver_CO');
		expect(wrapper.state().currentWeather.currentCondition).toEqual(
			'Mostly Cloudy'
		);
	});

	it.skip('should render a welcome page if no location has been set', () => {});

	it.skip('should persist location in local storage', () => {});
});
