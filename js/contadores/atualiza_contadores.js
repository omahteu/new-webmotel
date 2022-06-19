
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

//render(formatDate(data));
  
function minutes(f0) {
  //let f0 = data.value.split(":");
  //value.innerHTML = ((Number(f0[0])*60)+Number(f0[1])) + " Minutes";
  
  return ((Number(f0[0])*60)+Number(f0[1]))
}

const base = new Date()
const h = base.getHours()
const mi = base.getMinutes()
const s = base.getSeconds()

const converter = (minutos) => {
  const horas = Math.floor(minutos/ 60);          
  const min = minutos % 60;
  const textoHoras = (`00${horas}`).slice(-2);
  const textoMinutos = (`00${min}`).slice(-2);
  
  return `${textoHoras }:${textoMinutos}`;
};

$.get("https://demomotelapi.herokuapp.com/infos/", e =>{
  e.forEach(el => {

    var ohra = el.datahora
    var ohra_formatada = ohra.split(":")
    
    var atual = [h, mi]

    var hora_um = minutes(ohra_formatada)
    var hora_dois = minutes(atual)
    var diferenca = parseInt(hora_dois) - parseInt(hora_um)
    var acrescimo = parseInt(hora_dois) + parseInt(diferenca)
    var hora_acrescida = converter(acrescimo)

    var id = el.id
    var valor = el.valor
    var quarto = el.quarto
    var tipo = el.tipo

    $.ajax({
      url: "https://demomotelapi.herokuapp.com/infos/" + id + "/",
      type: "PUT",
      dataType: "json",
      data:  {
        datahora: hora_acrescida,
        valor: valor,
        quarto: quarto,
        tipo: tipo
      },
      success: function(){
        console.log("Sucesso")
      }
    })

  });
})