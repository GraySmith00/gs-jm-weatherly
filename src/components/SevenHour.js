import React from 'react';
import HourCard from './HourCard'

function SevenHour(props) {

  return (
    <div className="SevenHourList">
      {props.sevenHourData.map((hour, i) => {
        return <HourCard key={`hour${i}`} hour={hour.hour} temp={hour.projectedTemp}/> 
      })}
    </div>
  )
}

export default SevenHour;