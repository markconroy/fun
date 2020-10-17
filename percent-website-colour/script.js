function percentageOfTime() {
  const numberOfSecondaInADay = 60 * 60 * 24;
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const secondsSinceMidnight = (hours * 60 * 60) + (minutes * 60) + seconds;
  const percentTimePassed = Math.round(secondsSinceMidnight / numberOfSecondaInADay * 100);
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty('--percent-passed', percentTimePassed + '%')
  percentTimePassed < 50 ? rootStyle.setProperty('--colour-secondary', '#fff') : rootStyle.setProperty('--colour-secondary', '#000');
}

percentageOfTime();