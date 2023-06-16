import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';
import Notiflix from 'notiflix';

let timerDate = null;
let timerPeriod = null;
let setTime = null;

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      Notiflix.Report.failure(
        'Error',
        'Please choose a date in the future',
        'Ok'
      );
    }
    refs.startBtn.disabled = false;
    timerDate = selectedDates[0].getTime();
  },
};

function handlerClick() {
  const timerId = setInterval(() => {
    refs.startBtn.disabled = true;
    timerPeriod = timerDate - Date.now();
    if (timerPeriod > 0) {
      convertMs(timerPeriod);

      const { days, hours, minutes, seconds } = setTime;

      refs.days.textContent = addLeadingZero(days);
      refs.hours.textContent = addLeadingZero(hours);
      refs.minutes.textContent = addLeadingZero(minutes);
      refs.seconds.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(timerId);
      return Notiflix.Report.success('Time over!', '', 'Ok');
    }
  }, 1000);
}

function addLeadingZero(item) {
  return String(item).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return (setTime = { days, hours, minutes, seconds });
}

refs.startBtn.addEventListener('click', handlerClick);
refs.startBtn.disabled = true;
flatpickr(refs.inputDate, options);
