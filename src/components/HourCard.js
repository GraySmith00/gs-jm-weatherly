import React from 'react';
import '../css/HourCard.css';

function HourCard(props) {
  return (
    <div className="hour-card">
      <p>{props.hour}</p>
      <img src={require(`../images/${props.icon}.png`)} alt="" />
      <p>{props.temp}</p>
    </div>
  );
}

export default HourCard;
