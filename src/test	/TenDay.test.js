import React from 'react';
import { shallow, mount } from 'enzyme';

import TenDay from '../components/TenDay';

describe('TenDayForecast', () => {
  let wrapper;

  let mockData = [{}]

  beforeEach(() => {
    wrapper = shallow(<TenDay tenDayData={[]} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render ten DayCard components', () => {
    wrapper = mount(<TenDay tenDayData={[]} />)
    console.log(wrapper.find('DayCard').length)
    expect(wrapper.props().children.length).toEqual(10)

    // expect(wrapper.find('DayCard').length).toEqual(10);
  })
})