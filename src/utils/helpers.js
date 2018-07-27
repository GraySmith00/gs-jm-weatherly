// import mockData from './mockData';

export function currentWeatherData(data) {
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
		summary: txt.forecastday[0].fcttext,
		icon: current.icon
	};
	return cleanDataObj;
}

export function cleanSevenHourData(data) {
	return data.hourly_forecast.slice(0, 7).map(hourForecast => {
		let hour = +hourForecast.FCTTIME.hour;
		let icon = hourForecast.icon;

		if (hour === 0) {
			hour = '12am';
		} else if (hour === 12) {
			hour = '12pm';
		} else if (hour > 12 && hour < 24) {
			hour = `${hour - 12}pm`;
		} else {
			hour = `${hour}am`;
		}

		const obj = {
			icon,
			hour,
			projectedTemp: `${Math.floor(+hourForecast.temp.english)}° F`
		};
		return obj;
	});
}

export function cleanTenDayData(data) {
	return data.forecast.simpleforecast.forecastday.reduce(
		(tenDayArray, dayForecast) => {
			tenDayArray.push({
				day: dayForecast.date.weekday,
				expHigh: `${dayForecast.high.fahrenheit}°`,
				expLow: `${dayForecast.low.fahrenheit}°`,
				icon: dayForecast.icon
			});
			return tenDayArray;
		},
		[]
	);
}

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
