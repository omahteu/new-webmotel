"use strict";

export let hora
export let minuto
export let segundo
export let msegundo = 0

export let cron
export let id


export function iniciara(id, a, b, c){
    
    hora = a
    minuto = b
    segundo = c
    parara()
    cron = setInterval(() => { tempoa(id) }, 10);
}

export function parara() {
    clearInterval(cron);
}

export function reiniciara(id) {
    hora = 0;
    minuto = 0;
    segundo = 0;
    msegundo = 0;
    document.getElementById(`hora${id}`).innerText = '00'
    document.getElementById(`minuto${id}`).innerText = '00'
    document.getElementById(`segundo${id}`).innerText = '00'
}
  
export function tempoa(id){
    if ((msegundo += 10) == 1000) {
        msegundo = 0;
        segundo++;
    }
    if (segundo == 60) {
        segundo = 0;
        minuto++;
    }
    if (minuto == 60) {
        minuto = 0;
        hora++;
    }
    document.getElementById(`hora${id}`).innerText = retornoa(Number(hora))
    document.getElementById(`minuto${id}`).innerText = retornoa(Number(minuto))
    document.getElementById(`segundo${id}`).innerText = retornoa(Number(segundo))
}
  
export function retornoa(input) {
    if(input >= 10){
        return input
    } else if(Number(input) >= 1 && Number(input) <= 9){
        return `0${input}`
    } else if(Number(input) == 0){
        return `0${input}`
    }
}
