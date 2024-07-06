// timer.js

const deadline = "2024-08-11";

function getTimeRemaining(endtime) {
  let hours, minutes, seconds;
  const timer = Date.parse(endtime) - Date.parse(new Date());

  if (timer <= 0) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  } else {
    hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((timer / 1000 / 60) % 60);
    seconds = Math.floor((timer / 1000) % 60);
  }

  return { timer, hours, minutes, seconds };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(endtime) {
  const promotion = document.querySelectorAll(".promotion__timer");
  promotion.forEach((item) => {
    const timer = item.querySelector(".timer"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  });
}

setClock(deadline);

export { setClock, getTimeRemaining, getZero };
