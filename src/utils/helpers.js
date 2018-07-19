// import mockData from './mockData';

function cleanData(data) {
  const { current_observation: current, forecast } = data;
  const { simpleforecast: simple, txt_forecast: txt } = data.forecast;
  const cleanDataObj = {
    city: current.display_location.city,
    state: current.display_location.state,
    currentCondition: current.weather,
    currentDay: simple.forecastday[0].date.weekday,
    currentTempF: Math.floor(current.temp_f),
    expHigh: +simple.forecastday[0].high.fahrenheit,
    expLow: +simple.forecastday[0].low.fahrenheit,
    summary: txt.forecastday[0].fcttext_metric
  };
  return cleanDataObj;
}

export default cleanData;

// export const currentDate = (() => {
//   const month = simple.forecastday[0].date.monthname;
//   const dayNum = simple.forecastday[0].date.day;
//   const dayNumArr = dayNum.toString().split('');
//   let daySuffix;

//   switch (parseInt(dayNumArr[dayNumArr.length - 1])) {
//     case 1:
//       daySuffix = 'st';
//       break;
//     case 2:
//       daySuffix = 'nd';
//       break;
//     case 3:
//       daySuffix = 'rd';
//       break;
//     default:
//       daySuffix = 'th';
//   }
//   const currentDay = simple.forecastday[0].date.weekday;
//   return `${currentDay}, ${month} ${dayNum}${daySuffix}`;
// })();
