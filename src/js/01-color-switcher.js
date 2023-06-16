const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function handleStartBtnClick() {
  startBtn.disabled = true;
  intervalId = setInterval(changeBgColor, 1000);
}

function handleStopBtnClick() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

startBtn.addEventListener('click', handleStartBtnClick);
stopBtn.addEventListener('click', handleStopBtnClick);
