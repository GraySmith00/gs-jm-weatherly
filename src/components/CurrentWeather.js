import React from 'react';

function CurrentWeather(props) {
  console.log(props.icon);
  return (
    <div>
      <h1>
        {props.city}, {props.state}
      </h1>
      <h3>{props.currentTemp}</h3>
      <img
        src={require(`../../public/images/${props.icon}.png`)}
        alt="weather icon"
      />
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
