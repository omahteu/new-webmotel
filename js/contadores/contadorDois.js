"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron

export function start2() {
    pause2();
    cron = setInterval(() => { timer2(); }, 10);
  }
  
  export function pause2() {
    clearInterval(cron);
  }
  
  export function reset2() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour2').innerText = '00';
    document.getElementById('minute2').innerText = '00';
    document.getElementById('second2').innerText = '00';
  }
  
  export function timer2() {
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
    document.getElementById('hour2').innerText = returnData2(hour);
    document.getElementById('minute2').innerText = returnData2(minute);
    document.getElementById('second2').innerText = returnData2(second);
  }
  
  export function returnData2(input) {
    return input > 10 ? input : `0${input}`
  }
  