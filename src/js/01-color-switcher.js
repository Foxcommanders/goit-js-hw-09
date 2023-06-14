const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

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
