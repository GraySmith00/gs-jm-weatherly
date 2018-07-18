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
import { key } from '../variables';

import Search from './Search';

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

  componentDidMount() {
    fetch(
      `http://api.wunderground.com/api/${key}/conditions/q/CA/San_Francisco.json`
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }

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
        <Search setCity={this.setCity} />
      </div>
    );
  }
}

export default App;
