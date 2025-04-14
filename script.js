let timerDisplay = document.querySelector('.timerDisplay'); 
let StartBtn = document.getElementById('StartBtn'); 
let StopBtn = document.getElementById('StopBtn');
let ResetBtn = document.getElementById('ResetBtn');

let msec = 0; 
let secs = 0;
let mins = 0;
let hrs = 0;

let timerId = null;

StartBtn.addEventListener('click', function() { 
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(StartTimer, 10);
});

StopBtn.addEventListener('click', function() {
  clearInterval(timerId);
});

ResetBtn.addEventListener('click', function() {
  clearInterval(timerId);
  msec = secs = mins = hrs = 0; 
  timerDisplay.innerHTML = '00 : 00 : 00 : 00'; 
});

function StartTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
      if (mins === 60) {
        mins = 0;
        hrs++;
      }
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec; 
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;
  let hrsString = hrs < 10 ? `0${hrs}` : hrs; 

  timerDisplay.innerHTML = `${hrsString} : ${minsString} : ${secsString} : ${msecString}`; 
}
