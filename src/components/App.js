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
      tenDay: [],
      tenDayDisplay: false
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

  showTenDayDisplay = () => {
    this.setState({
      tenDayDisplay: true
    });
  };

  showSevenHourDisplay = () => {
    this.setState({
      tenDayDisplay: false
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
        <div
          className="app"
          style={{
            backgroundImage:
              'url(' +
              require(`../images/background/${this.state.icon}.jpeg`) +
              ')'
          }}
        >
          <div className="container">
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
            <div className="toggle-display">
              <p onClick={this.showSevenHourDisplay}>7-hour</p>
              <p>|</p>
              <p onClick={this.showTenDayDisplay}>10-day</p>
            </div>
            {this.state.tenDayDisplay ? (
              <TenDay tenDayData={tenDay} />
            ) : (
              <SevenHour sevenHourData={sevenHour} />
            )}
          </div>
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
