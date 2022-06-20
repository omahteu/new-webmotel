"use strict";

let hour
let minute
let second
let millisecond = 0
let cron;


export function start_plus(a, b, c){
    hour = Number(a)
    minute = Number(b)
    second = Number(c)
    cron = setInterval(() => { times_plus() }, 10);
}

export function pause_plus() {
    clearInterval(cron);
}

export function reset_plus() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour1').innerText = '00';
    document.getElementById('minute1').innerText = '00';
    document.getElementById('second1').innerText = '00';
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
    $("#hour1").text("")
    $("#hour1").text(returnData(hour))
    $("#minute").text("")
    $("#minute1").text(returnData(minute))
    $("#minute").text("")
    $("#second1").text(returnData(second))
}
  
export function returnData(input) {
    if(input >= 10){
        return input
    } else if(input >= 1 && input <= 9){
        return `0${input}`
    } else if(input == 0){
        return `0${input}`
    }
}
