import React from 'react';
import DayCard from './DayCard';

function TenDay(props) {
  return (
    <div className="TenDayList">
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
