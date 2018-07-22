import React, { Component } from 'react';
import '../css/App.css';
import CurrentWeather from './CurrentWeather';
import { cleanData, cleanSevenHourData, cleanTenDayData } from '../utils/helpers';
import { key } from '../variables';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

import Search from './Search';

class App extends Component {
  constructor() {
    super();

    this.state = {
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
    fetch(
      `http://api.wunderground.com/api/${key}/conditions/geolookup/hourly/forecast10day/q/${location}.json`
    )
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
          summary
        } = cleanDataObj;

        this.setState({
          city,
          state,
          currentCondition,
          currentDay,
          currentTemp: currentTempF,
          expHigh,
          expLow,
          summary,
          sevenHour: cleanSevenHourData(data),
          tenDay: cleanTenDayData(data)
        });
      });
  };

  render() {
    let {
      city,
      state,
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
          state={state}
          currentCondition={currentCondition}
          currentTemp={currentTemp}
          expHigh={expHigh}
          expLow={expLow}
          summary={summary}
        />
        <Search setLocation={this.setLocation} />
        <SevenHour sevenHourData={this.state.sevenHour}/>
        <TenDay tenDayData={this.state.tenDay}/>
      </div>
    );
  }
}

export default App;
