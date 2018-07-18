import React, { Component } from 'react';
import '../css/App.css';
import CurrentWeather from './CurrentWeather';
import {
  city,
  currentCondition,
  currentDay,
  currentTempF,
  expHigh,
  expLow,
  summary
} from '../utils/helpers';

import Search from './Search';

console.log(city);

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      currentCondition: '',
      currentDay: '',
      currentTemp: null,
      expHigh: null,
      expLow: null,
      summary: ''
    };
  }

  setCity = () => {
    this.setState({
      city: 'Denver',
      currentCondition: 'Warmish',
      currentDay: 'Tuesday',
      currentTemp: currentTempF,
      expHigh,
      expLow,
      summary
    });
  };

  render() {
    let {
      city,
      currentCondition,
      currentDay,
      currentTemp,
      expHigh,
      expLow,
      summary
    } = this.state;
    return (
      <div className="App">
        <CurrentWeather
          city={city}
          currentCondition={currentCondition}
          currentTemp={currentTemp}
          expHigh={expHigh}
          expLow={expLow}
          summary={summary}
        />
        <Search  />
      </div>
    );
  }
}

export default App;
