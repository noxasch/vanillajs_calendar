'use strict';

const calendar = document.getElementById('app-calendar');
let date = new Date();
let totalDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const options = { weekday: 'short' };

function isWeekend(day) {
  return day % 7 === 6 || day % 7 === 0;
}

function toggleSelected(event) {
  event.target.classList.toggle('selected');
}

function buildCalendar() {
  for (let i = 1; i <= totalDay; i++) {
    date.setDate(i);
    let dayName = new Intl.DateTimeFormat('en-US', options).format(date);
    let name = "";
    if (i < 7) name = `<div class="name">${dayName}</div>`;
    // console.log(dayName);
    calendar.insertAdjacentHTML('beforeend', /*html*/`
    <div class="day ${isWeekend(i) ? 'weekend' : ''}">
      ${name}
    ${i}</div>`);
  }
}

function attachEventToCalendar() {
  let days = document.querySelectorAll('#app-calendar .day');
  // console.log(days);
  days.forEach((element) => {
    element.addEventListener('click', (event) => toggleSelected(event));
  });
}

function main() {
  buildCalendar();
}


main();
attachEventToCalendar();
