"use strict";

export let hora = 0;
export let minuto = 0;
export let segundo = 0;
export let msegundo = 0;

export let kronos;
export let id

export  function iniciar(id) {
  parar();
  kronos = setInterval(() => { tempo(id); }, 10);
}

export function parar() {
  clearInterval(kronos);
}

export function reiniciar(id) {
  hora = 0;
  minuto = 0;
  segundo = 0;
  msegundo = 0;
  document.getElementById(`hora${id}`).innerText = '00';
  document.getElementById(`minuto${id}`).innerText = '00';
  document.getElementById(`segundo${id}`).innerText = '00';
}

export function tempo(id) {
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
  document.getElementById(`hora${id}`).innerText = retorno(hora);
  document.getElementById(`minuto${id}`).innerText = retorno(minuto);
  document.getElementById(`segundo${id}`).innerText = retorno(segundo);
}

export function retorno(input) {
  if(input >= 10){
    return input
  } else if(input >= 1 && input <= 9){
      return `0${input}`
  } else if(input == 0 || String(input) == "00"){
      return `0${input}`
  } else {
      return `0${input}`
  }

  //return input > 10 ? input : `0${input}`
}
