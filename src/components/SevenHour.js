import React from 'react';
import HourCard from './HourCard';

import '../css/SevenHour.css';

function SevenHour(props) {
  return (
    <div className="seven-hour-list">
      {props.sevenHourData.map((hour, i) => {
        return (
          <HourCard
            key={`hour${i}`}
            hour={hour.hour}
            temp={hour.projectedTemp}
            icon={hour.icon}
          />
        );
      })}
    </div>
  );
}

export default SevenHour;
