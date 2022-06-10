"use strict";

let hour
let minute
let second
let millisecond = 0
let cron;


export function start_plus(a, b, c){
    hour = a
    minute = b
    second = c
    cron = setInterval(() => { times_plus() }, 10);
}
  
export function times_plus(){
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
    document.getElementById('hour1').innerText = hour        //returnData(hour);
    document.getElementById('minute1').innerText = minute     //returnData(minute);
    document.getElementById('second1').innerText = second     //returnData(second);
}
  
  
export function returnData(input) {
    return input > 10 ? input : `0${input}`
}