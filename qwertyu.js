var nu = 09
console.log(nu)
console.log(typeof nu)

if(nu >= 10){
    console.log(nu)
} else if(Number(nu) >= 1 && Number(nu) <= 9){
    console.log(`0${nu}`) 
} else if(Number(nu) == 0){
    console.log(`${nu}`)
}
