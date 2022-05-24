"use strict";

export let hour = 0;
export let minute = 0;
export let second = 0;
export let millisecond = 0;

export let cron;

export function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

export function pause() {
  clearInterval(cron);
}

export function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour1').innerText = '00';
  document.getElementById('minute1').innerText = '00';
  document.getElementById('second1').innerText = '00';
}

export function timer() {
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
  document.getElementById('hour1').innerText = returnData(hour);
  document.getElementById('minute1').innerText = returnData(minute);
  document.getElementById('second1').innerText = returnData(second);
}

export function returnData(input) {
  return input > 10 ? input : `0${input}`
}
