import React from 'react';

function DayCard(props) {
  return (
    <div className="dayCard">
      <p>{props.day}</p>
      <p>{props.high}</p>
      <p>{props.low}</p>
      <img src={require(`../../public/images/${props.icon}.png`)} alt="" />
    </div>
  );
}

export default DayCard;
