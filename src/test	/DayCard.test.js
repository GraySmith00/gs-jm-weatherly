import React from 'react';
import { shallow, mount } from 'enzyme';

import DayCard from '../components/DayCard';

describe('DayCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DayCard key='day1' day='Monday' high='90°' icon='clear' low='73°' />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render with the correct HTML', () => {
    const dayCard = wrapper.find('.day-card');
    const dayCardDay = wrapper.find('.day-card > p');
    const dayCardImg = wrapper.find('img');
    const dayCardHigh = wrapper.find('.temp-high');
    const dayCardLow = wrapper.find('.temp-low');


    expect(dayCard).toBeDefined();
    expect(dayCardDay).toBeDefined();
    expect(dayCardDay.text()).toEqual('Monday');
    expect(dayCardImg).toBeDefined();
    expect(dayCardHigh.text()).toEqual('90°');
    expect(dayCardLow.text()).toEqual('73°');

  })
})