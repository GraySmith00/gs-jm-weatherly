import React from 'react';
import DayCard from './DayCard';

import '../css/TenDay.css';

function TenDay(props) {
  return (
    <div className="ten-day-list">
      {props.tenDayData.map((day, i) => {
        return (
          <DayCard
            key={`day${i}`}
            day={day.day}
            high={day.expHigh}
            low={day.expLow}
            icon={day.icon}
          />
        );
      })}
    </div>
  );
}

export default TenDay;
