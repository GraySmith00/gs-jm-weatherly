import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    // expect(wrapper).toBeDefined();
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
    const location = 'Denver_CO';

    localStorage.setItem('location', JSON.stringify(location));

    wrapper = mount(<App />);

    expect(wrapper.state().location).toEqual('Denver_CO');
  });

  it.skip('should render CurrentWeather component', () => {
    expect(wrapper).find('CurrentWeather');
  });

  it.skip('should render a Search component', () => {});

  it.skip('should render a SevenDay component', () => {});

  it.skip('should render a TenDay component', () => {});

  it.skip('should set a location for weather data', () => {});

  it.skip('should render a welcome page if no location has been set', () => {});

  it.skip('should persist location in local storage', () => {});
});
