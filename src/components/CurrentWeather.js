import React from 'react';

const CurrentWeather = props => {
  return (
    <div>
      <h1>Current Weather in {props.city}</h1>
      <p>{props.currentCondition}</p>
      <p>{props.currentTemp}</p>
      <p>{props.expHigh}</p>
      <p>{props.expLow}</p>
      <p>{props.summary}</p>
    </div>
  );
};

export default CurrentWeather;

//        city={city}
//        currentCondition={currentCondition}
//        currentTemp={currentTemp}
//        expHigh={expHigh}
//        expLow={expLow}
//        summar={summary}
//
