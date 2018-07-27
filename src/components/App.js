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

  setLocation = location => {
    location = location.replace(' ', '_');
    this.handleApiCall(location);
  };

  fetchData = location => {
    const url = `http://api.wunderground.com/api/${key}/conditions/geolookup/hourly/forecast10day/q/${location}.json`;
    return fetch(url);
  };

  handleApiCall = location => {
    this.fetchData(location)
      .then(res => res.json())
      .then(data => {
        this.setLocationState(data, location);
        this.setLocalStorage(location);
      })
      .catch(error => {
        this.setState({
          notFoundError: true
        });
      });
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
    localStorage.setItem('location', location);
  };

  componentDidMount() {
    let location = localStorage.getItem('location');
    if (location) {
      this.setLocation(location);
    }
  }

  render() {
    let {
      currentWeather,
      sevenHour,
      tenDay,
      notFoundError,
      tenDayDisplay
    } = this.state;

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
                <h2 className="brand">Weatherly</h2>
                <Search
                  setLocation={this.setLocation}
                  notFoundError={notFoundError}
                />
              </div>
            </div>
            <div className="container">
              <main className="main-content">
                <CurrentWeather currentWeather={currentWeather} />
                <div className="toggle-display">
                  <p
                    onClick={this.showSevenHourDisplay}
                    style={tenDayDisplay ? null : { fontWeight: 400 }}
                  >
                    7-hour
                  </p>
                  <p>|</p>
                  <p
                    onClick={this.showTenDayDisplay}
                    style={tenDayDisplay ? { fontWeight: 400 } : null}
                    className="ten-day"
                  >
                    10-day
                  </p>
                </div>
              </main>
              {tenDayDisplay ? (
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
      <section className="welcome-container">
        <div className="welcome-overlay">
          <h1 className="welcome-title">Weatherly</h1>
          <div className="search-welcome-wrapper">
            <Search
              setLocation={this.setLocation}
              setLocalStorage={this.setLocalStorage}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
