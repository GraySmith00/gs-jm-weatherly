import React from 'react';

function HourCard(props) {

  return (
    <div className="hourCard"> 
      <p>{props.hour}</p>
      <p>{props.temp}</p>
    </div>
  )
}

export default HourCard;