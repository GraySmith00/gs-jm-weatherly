import React from 'react';

function DayCard(props) {

  return (
    <div className="dayCard">
      <p>{props.day}</p>
      <p>{props.high}</p>
      <p>{props.low}</p>
    </div>
  )
}

export default DayCard;