import mockData from './mockData';

const { current_observation: current, forecast } = mockData;
const { simpleforecast: simple, txt_forecast: txt } = mockData.forecast;

export const city = (() => {
  return current.display_location.city;
})();

console.log(city);

export const currentCondition = (() => current.weather)();

export const currentDay = (() => simple.forecastday[0].date.weekday)();

export const currentTempF = (() => Math.floor(current.temp_f))();

export const expHigh = (() =>
  parseInt(simple.forecastday[0].high.fahrenheit))();

export const expLow = (() => parseInt(simple.forecastday[0].low.fahrenheit))();

export const summary = (() => txt.forecastday[0].fcttext_metric)();

export const currentDate = (() => {
  const month = simple.forecastday[0].date.monthname;
  const dayNum = simple.forecastday[0].date.day;
  const dayNumArr = dayNum.toString().split('');
  let daySuffix;

  switch (parseInt(dayNumArr[dayNumArr.length - 1])) {
    case 1:
      daySuffix = 'st';
      break;
    case 2:
      daySuffix = 'nd';
      break;
    case 3:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
  }
  const currentDay = simple.forecastday[0].date.weekday;
  return `${currentDay}, ${month} ${dayNum}${daySuffix}`;
})();
