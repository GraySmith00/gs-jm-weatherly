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
      city,
      currentCondition,
      currentDay,
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
      </div>
    );
  }
}

export default App;
