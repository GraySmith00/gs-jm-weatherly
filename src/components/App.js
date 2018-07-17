import React, { Component } from 'react';
import '../css/App.css';
import CurrentWeather from './CurrentWeather'

let fakeData = {
  city: 'Denver',
  state: 'CO',
  currentCondition: 'Sunny',
  currentDay: 'Tuesday',
  currentTemp: 90, 
  expHigh: 98,
  expLow: 68,
  summary: 'Windy with a chance of late night showers'
}


class App extends Component {
  constructor() {
    super();
    let { city, currentCondition, currentDay, currentTemp, expHigh, expLow, summary } = fakeData;
    this.state = {city, currentCondition, currentDay, currentTemp, expHigh, expLow, summary}
  }
  render() {
    let { city, currentCondition, currentDay, currentTemp, expHigh, expLow, summary } = this.state;
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
