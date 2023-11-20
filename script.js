let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

const hoursElement = document.querySelector('.timer__clock__hours');
const minutesElement = document.querySelector('.timer__clock__minutes');
const secondsElement = document.querySelector('.timer__clock__seconds');

const startButton = document.querySelector('.timer__buttons__start');
const pauseButton = document.querySelector('.timer__buttons__pause');
const resetButton = document.querySelector('.timer__buttons__reset');

startButton.addEventListener('click', () => {
 interval = setInterval(() => {
   seconds++;
   if (seconds >= 60) {
     seconds = 0;
     minutes++;
     if (minutes >= 60) {
       minutes = 0;
       hours++;
     }
   }
   updateTime();
 }, 1000);
});

pauseButton.addEventListener('click', () => {
 clearInterval(interval);
});

resetButton.addEventListener('click', () => {
 clearInterval(interval);
 hours = 0;
 minutes = 0;
 seconds = 0;
 updateTime();
});

function updateTime() {
 hoursElement.textContent = hours < 10 ? '0' + hours : hours;
 minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
 secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;

 hoursElement.textContent = hoursElement.textContent + ':';
 minutesElement.textContent = minutesElement.textContent + ':';
}
