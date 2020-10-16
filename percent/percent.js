function percentageOfTime() {

  // Meters
  const meterDay = document.querySelector('.meter--day');
  const meterWorkday = document.querySelector('.meter--workday');
  const meterYear = document.querySelector('.meter--year');
  const meterMonth = document.querySelector('.meter--month');
  const meterWeek = document.querySelector('.meter--week');

  // Spans to update with content
  const theTimeIs = document.querySelector('.the-time-is');
  const daysPassed = document.querySelector('.days-passed');
  const monthName = document.querySelector('.month-name');
  const daysMonthPassed = document.querySelector('.days-month-passed');
  const daysWeekPassed = document.querySelector('.days-week-passed');
  const percentYearPassed = document.querySelector('.percent-year-passed');
  const percentMonthPassed = document.querySelector('.percent-month-passed');
  const percentWeekPassed = document.querySelector('.percent-week-passed');
  const percentTimePassed = document.querySelector('.percent-time-passed');
  const workdayStartHour = document.getElementById('work-start-hour');
  const workdayEndHour = document.getElementById('work-end-hour');
  const percentWorktimePassed = document.querySelector('.percent-worktime-passed');

  // Chronology
  const numberOfSecondaInADay = 60 * 60 * 24;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const isLeapYear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  const daysPassedValue = Math.ceil((currentDate - new Date(currentDate.getFullYear(),0,1)) / 86400000);
  const month = currentDate.getMonth() + 1;
  const monthNameValue = currentDate.toLocaleString('default', { month: 'long' });
  const dayOfMonth = currentDate.getDate();
  const daysInMonth = new Date(year, month, 0);
  const daysInMonthValue = daysInMonth.getDate();
  const dayOfWeek = currentDate.getDay();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const workStartHour = workdayStartHour.value ? workdayStartHour.value : 9;
  const workEndHour = workdayEndHour.value ? workdayEndHour.value : 18;
  const numberOfSecondsInAWorkday = 60 * 60 * (workEndHour - workStartHour);

  // Formatted values
  const daysPassedFormatted = daysPassedValue === 1 ? daysPassedValue + ' day has' : daysPassedValue + ' days have';
  const weekPassedFormatted = dayOfWeek === 1 ? dayOfWeek + ' day has' : dayOfWeek + ' days have';
  const hoursFormatted = hours < 10 ? "0" + hours : hours;
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;
  const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;
  const secondsSinceMidnight = (hours * 60 * 60) + (minutes * 60) + seconds;
  const secondsSinceWorkstart = hours >= workStartHour ? ((hours - workStartHour) * 60 * 60) + (minutes * 60) + seconds : 0;

  // Percents
  const percentYearPassedValue = Math.round(daysPassedValue / (isLeapYear ? 366 : 365) * 100);
  const percentMonthPassedValue = Math.round(dayOfMonth / daysInMonthValue * 100);
  const percentTimePassedValue = Math.round(secondsSinceMidnight / numberOfSecondaInADay * 100);
  const percentWorktimePassedValue = hours >= workStartHour ? (hours < workEndHour ? Math.round(secondsSinceWorkstart / numberOfSecondsInAWorkday * 100) : 100) : 0;
  const percentWeekPassedValue = Math.round(dayOfWeek / 7 * 100);

  // Update spans
  daysPassed.innerText = daysPassedFormatted;
  percentYearPassed.innerText = percentYearPassedValue;
  monthName.innerText = monthNameValue;
  daysMonthPassed.innerText = dayOfMonth;
  percentMonthPassed.innerText = percentMonthPassedValue;
  daysWeekPassed.innerText = weekPassedFormatted;
  percentWeekPassed.innerText = percentWeekPassedValue;
  theTimeIs.innerText = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
  percentTimePassed.innerText = percentTimePassedValue;
  percentWorktimePassed.innerText = percentWorktimePassedValue;

  // Update meters
  meterYear.setAttribute('value', percentYearPassedValue);
  meterMonth.setAttribute('value', percentMonthPassedValue);
  meterWeek.setAttribute('value', percentWeekPassedValue);
  meterDay.setAttribute('value', percentTimePassedValue);
  meterWorkday.setAttribute('value', percentWorktimePassedValue);

}

percentageOfTime();

// Update values every second
setInterval(() => {
  percentageOfTime()
}, 1000);