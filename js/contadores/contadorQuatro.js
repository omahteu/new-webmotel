"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

export function start4() {
  pause4();
  cron = setInterval(() => { timer4(); }, 10);
}
  
export function pause4() {
  clearInterval(cron);
}
  
export function reset4() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour4').innerText = '00';
  document.getElementById('minute4').innerText = '00';
  document.getElementById('second4').innerText = '00';

}
  
export function timer4() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour4').innerText = returnData4(hour);
  document.getElementById('minute4').innerText = returnData4(minute);
  document.getElementById('second4').innerText = returnData4(second);
}
  
export function returnData4(input) {
  return input > 10 ? input : `0${input}`
}
  