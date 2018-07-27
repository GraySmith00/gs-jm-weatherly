import React from 'react';
import '../css/HourCard.css';

function HourCard(props) {
	return (
		<div className="hour-card">
			<div className="card-container">
				<p className="hour-day">{props.hour}</p>
				<img src={require(`../images/${props.icon}.png`)} alt="" />
				<p className="hour-temp">{props.temp}</p>
			</div>
		</div>
	);
}

export default HourCard;
