import React from 'react';
import '../css/CurrentWeather.css';

function CurrentWeather(props) {
  return (
    <div className="current-weather">
      <h1>
        {props.city}, {props.state}
      </h1>
      <div className="current-info">
        <h3>{props.currentTemp}</h3>
        <img
          className="weather-icon"
          src={require(`../images/${props.icon}.png`)}
          alt="weather icon"
        />
        <div className="exp-high">
          <img
            className="arrow"
            src={require('../images/long-arrow-alt-up-solid.svg')}
            alt="arrow up"
          />
          <p className="high-temp">{props.expHigh}</p>
        </div>
        <div className="exp-low">
          <img
            className="arrow"
            src={require('../images/long-arrow-alt-down-solid.svg')}
            alt="arrow down"
          />
          <p className="low-temp">{props.expLow}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;

//        city={city}
//        currentCondition={currentCondition}
//        currentTemp={currentTemp}
//        expHigh={expHigh}
//        expLow={expLow}
//        summar={summary}
//
