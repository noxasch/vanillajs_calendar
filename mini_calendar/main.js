'use strict';

const MONTHS = Object.freeze(["january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december",]);
const DAY = Object.freeze(["sunday", "monday", "tuesday", "wednesday", "thurday", "friday", "saturday"]);

const today = new Date(); // get now local time

function renderCalendar(date) {
  const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); // get last day of previous month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // get last day of this month

  document.querySelector('.date h3').innerHTML = MONTHS[date.getMonth()];
  document.querySelector('.date p').innerHTML = new Date().toDateString();
  const daysOfMonth = document.querySelector('.days');
  
  let days = "";
  const lastIndex = 7 - lastDay.getDay();

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDate - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    if (i === date.getDate() && date.getMonth() === new Date().getMonth()) days += `<div class="today">${i}</div>`;
    else days += `<div>${i}</div>`;
  }

  for (let x = 1; x < lastIndex; x++) {
    days += `<div class="next-date">${x}</div>`;
  }

  // console.log(days);

  daysOfMonth.innerHTML = days;
}

renderCalendar(today);

document.querySelector('.prev').addEventListener('click', (e) => {
  today.setMonth(today.getMonth() - 1);
  renderCalendar(today);
});

document.querySelector('.next').addEventListener('click', (e) => {
  today.setMonth(today.getMonth() + 1);
  renderCalendar(today);
});

// https://www.youtube.com/watch?v=o1yMqPyYeAo