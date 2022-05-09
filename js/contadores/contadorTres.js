"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;


export function start3() {
    pause3();
    cron = setInterval(() => { timer3(); }, 10);
  }
  
  export function pause3() {
    clearInterval(cron);
  }
  
  export function reset3() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour3').innerText = '00';
    document.getElementById('minute3').innerText = '00';
    document.getElementById('second3').innerText = '00';
  }
  
  export function timer3() {
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
    document.getElementById('hour3').innerText = returnData3(hour);
    document.getElementById('minute3').innerText = returnData3(minute);
    document.getElementById('second3').innerText = returnData3(second);
  }
  
  export function returnData3(input) {
    return input > 10 ? input : `0${input}`
  }