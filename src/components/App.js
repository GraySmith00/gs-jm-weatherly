import React, { Component } from 'react';
import '../css/App.css';
import CurrentWeather from './CurrentWeather';
import {
  currentWeatherData,
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
      currentWeather: {},
      sevenHour: [],
      tenDay: [],
      tenDayDisplay: false,
      notFoundError: false
    };
  }

  apiCall = (location) => {
    const url = `http://api.wunderground.com/api/${key}/conditions/geolookup/hourly/forecast10day/q/${location}.json`;
    return fetch(url)
      .then(res => res.json())
      .then(data => {    
        this.setLocationState(data, location)
        this.setLocalStorage(location);
      })
      .catch(error => {
        this.setState({
          notFoundError: true
        });
      });

  };

  setLocation = location => {
    location = location.replace(' ', '_');
    this.apiCall(location)
  };

  setLocationState = (data, location) => {
    const currentWeather = currentWeatherData(data);
    this.setState({
      location,
      currentWeather,
      sevenHour: cleanSevenHourData(data),
      tenDay: cleanTenDayData(data),
      notFoundError: false
    });
  }

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
    let location = JSON.parse(localStorage.getItem('location') || null);
    if (location) {
      this.setLocation(location);
    }
  }

  render() {
    let { currentWeather, sevenHour, tenDay, notFoundError } = this.state;

    if (this.state.location) {
      return (
        <div
          className="app"
          style={{
            backgroundImage:
              'url(' +
              require(`../images/background/${currentWeather.icon}.jpeg`) +
              ')'
          }}
        >
          <div className="overlay">
            <div className="header">
              <div className="header-container">
                <Search
                  setLocation={this.setLocation}
                  notFoundError={notFoundError}
                />
              </div>
            </div>
            <div className="container">
              <CurrentWeather currentWeather={currentWeather} />
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
