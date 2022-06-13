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
    console.log(second)
    //document.getElementById('hour1').innerText = 
    $("#hour1").text("")
    $("#hour1").text(returnData(hour))
    $("#minute").text("")
    $("#minute1").text(returnData(minute))
    $("#minute").text("")
    $("#second1").text(returnData(second))
    
    //document.getElementById('minute1').innerText = returnData(minute)
    //document.getElementById('second1').innerText = returnData(second)
}
  
  
export function returnData(input) {
    //console.log(input)
    if(input >= 10){
        return input
    } else if(input >= 1 && input <= 9){
        return `0${input}`
    } else if(input == 0 || String(input) == "00"){
        return `${input}`
    } else {
        return `0${input}`
    }
}