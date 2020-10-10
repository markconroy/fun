function percentageOfDay() {
  const meter = document.querySelector('.meter');
  const theTimeIs = document.querySelector('.the-time-is');
  const percentagePassed = document.querySelector('.percentage-passed');
  const percentLeft = document.querySelector('.percent-left');
  const numberOfSecondaInADay = 60 * 60 * 24; 
  
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hoursFormatted = hours < 10 ? "0" + hours : hours;
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;
  const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;
  const secondsSinceMidnight = (hours * 60 * 60) + (minutes * 60) + seconds;
  
  const percentage = Math.round(secondsSinceMidnight / numberOfSecondaInADay * 100);
  
  theTimeIs.innerText = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
  percentLeft.innerText = 100 - percentage;
  meter.setAttribute('value', percentage);  
  percentagePassed.innerText = percentage;
}

percentageOfDay();

setInterval(() => {
  percentageOfDay()
}, 1000);