import React from 'react';
import '../css/DayCard.css';

function DayCard(props) {
	return (
		<div className="day-card">
			<div className="card-container">
				<p>{props.day}</p>
				<img src={require(`../images/${props.icon}.png`)} alt="weather icon" />
				<div className="expected-temp">
					<p className="temp-high">{props.high}</p>
					<p className="temp-low">{props.low}</p>
				</div>
			</div>
		</div>
	);
}

export default DayCard;
