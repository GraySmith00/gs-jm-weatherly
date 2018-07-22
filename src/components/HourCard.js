import React from 'react';

function HourCard(props) {
  return (
    <div className="hourCard">
      <p>{props.hour}</p>
      <p>{props.temp}</p>
      <img src={require(`../../public/images/${props.icon}.png`)} alt="" />
    </div>
  );
}

export default HourCard;
