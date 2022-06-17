
function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
  }
  
  function formatDate(date) {
    const d = zeroFill(date.getDate());
    const mo = zeroFill(date.getMonth() + 1);
    const y = zeroFill(date.getFullYear());
    const h = zeroFill(date.getHours());
    const mi = zeroFill(date.getMinutes());
    const s = zeroFill(date.getSeconds());
  
    return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
  }
  
  function render(data) {

    console.log(data)
  }
  
// ISO 8601
// 20/04/2019 10:00:00
const stringDate = '2019-04-20T10:00:00-03:00';

const start = new Date(stringDate);
const end = new Date('2019-04-21T10:30:00-03:00');
const result = end - start;
//             ms       s     m   h    d
const time = result / 1000 / 60 / 60 / 24;

const data = new Date(stringDate);
data.setSeconds(data.getSeconds() + 0);
data.setMinutes(data.getMinutes() + 0);
data.setHours(data.getHours() + 0);
data.setDate(data.getDate() + 0);
data.setMonth(data.getMonth() + 0);
data.setFullYear(data.getFullYear() + 0);

render(formatDate(data));
  

const base = new Date()
const h = base.getHours()
const mi = base.getMinutes()
const s = base.getSeconds()

$.get("https://demomotelapi.herokuapp.com/infos/", e =>{
  e.forEach(el => {
    console.log(`${el.quarto}: ${el.datahora}`)
    console.log(`${h}:${mi}`)
  });
})