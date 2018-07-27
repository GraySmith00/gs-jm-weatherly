import React from 'react';
import '../css/CurrentWeather.css';

function CurrentWeather(props) {
	const {
		city,
		state,
		currentTempF,
		icon,
		expHigh,
		expLow,
		summary
	} = props.currentWeather;

	return (
		<div className="current-weather">
			<h1>
				{city}, {state}
			</h1>
			<div className="current-info">
				<h3>{currentTempF}</h3>
				<img
					className="weather-icon"
					src={require(`../images/${icon}.png`)}
					alt="weather icon"
				/>
				<div className="exp-high">
					<img
						className="arrow"
						src={require('../images/long-arrow-alt-up-solid.svg')}
						alt="arrow up"
					/>
					<p className="high-temp">{expHigh}</p>
				</div>
				<div className="exp-low">
					<img
						className="arrow"
						src={require('../images/long-arrow-alt-down-solid.svg')}
						alt="arrow down"
					/>
					<p className="low-temp">{expLow}</p>
				</div>
			</div>
			<p className="summary">{summary}</p>
		</div>
	);
}

export default CurrentWeather;
