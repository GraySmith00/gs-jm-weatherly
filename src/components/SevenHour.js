import React from 'react';
import HourCard from './HourCard'

function SevenHour(props) {

  return (
    <div className="SevenHourList">
      {props.sevenHourData.map(hour => {
        return <HourCard hour={hour.hour} temp={hour.projectedTemp}/> 
      })}
    </div>
  )
}

export default SevenHour;