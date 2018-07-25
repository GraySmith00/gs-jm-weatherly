import React from 'react';
import { shallow, mount } from 'enzyme';

import SevenHour from '../components/SevenHour';

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour sevenHourData={[]} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render seven HourCard components', () => { 

  })

})
