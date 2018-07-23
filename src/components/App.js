import React, { Component } from 'react';
import '../css/App.css';
import CurrentWeather from './CurrentWeather';
import {
  cleanData,
  cleanSevenHourData,
  cleanTenDayData
} from '../utils/helpers';
import { key } from '../variables';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

import Search from './Search';

class App extends Component {
  constructor() {
    super();

    this.state = {
      location: '',
      city: '',
      state: '',
      currentCondition: '',
      currentDay: '',
      currentTemp: null,
      expHigh: null,
      expLow: null,
      summary: '',
      sevenHour: [],
      tenDay: []
    };
  }

  setLocation = location => {
    const url = `http://api.wunderground.com/api/${key}/conditions/geolookup/hourly/forecast10day/q/${location}.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const cleanDataObj = cleanData(data);
        const {
          city,
          state,
          currentCondition,
          currentDay,
          currentTempF,
          expHigh,
          expLow,
          summary,
          icon
        } = cleanDataObj;

        this.setState({
          location,
          city,
          state,
          currentCondition,
          currentDay,
          currentTemp: currentTempF,
          expHigh,
          expLow,
          summary,
          icon,
          sevenHour: cleanSevenHourData(data),
          tenDay: cleanTenDayData(data)
        });
      });
  };

  setLocalStorage = location => {
    localStorage.setItem('location', JSON.stringify(location));
  };

  componentDidMount() {
    let location = JSON.parse(localStorage.getItem('location')) || null;
    if (location) {
      this.setLocation(location);
    }
  }

  render() {
    let {
      city,
      state,
      currentCondition,
      currentDay,
      currentTemp,
      expHigh,
      expLow,
      summary,
      sevenHour,
      tenDay,
      icon
    } = this.state;

    if (this.state.location) {
      return (
        <div className="App">
          <Search
            setLocation={this.setLocation}
            setLocalStorage={this.setLocalStorage}
          />
          <CurrentWeather
            city={city}
            state={state}
            currentCondition={currentCondition}
            currentTemp={currentTemp}
            expHigh={expHigh}
            expLow={expLow}
            summary={summary}
            icon={icon}
          />
          <SevenHour sevenHourData={sevenHour} />
          <TenDay tenDayData={tenDay} />
        </div>
      );
    }

    return (
      <Search
        setLocation={this.setLocation}
        setLocalStorage={this.setLocalStorage}
      />
    );
  }
}

export default App;
