import React from 'react';

function CurrentWeather(props) {
  console.log(props.icon);
  return (
    <section className="current-weather">
      <h1>
        {props.city}, {props.state}
      </h1>
      <h3>{props.currentTemp}</h3>

      <img src={require(`../../public/images/${props.icon}.png`)} alt="" />

      {/* <h1>
        props.city}, {props.state}
      </h1>
      <p>{props.currentCondition}</p>
      <p>{props.currentTemp}</p>
      <p>{props.expHigh}</p>
      <p>{props.expLow}</p> */}
      {/* <p>{props.summary}</p> */}
    </section>
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
