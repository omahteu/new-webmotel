$(document).ready(function(){
    var ds = das()
    console.log(qw)

    var po = window.open()
    for(var i = 0; i < qw.length; i++){
        po.document.write(
            `<h1>${qw[i]}</h1>`
        )
    }

})

var qw = []

function das(){
    $.get("https://demomotelapi.herokuapp.com/credito/", function(e){
        e.forEach(element => {
            qw.push(element)
        });
    })
    $.get("https://demomotelapi.herokuapp.com/debito/", function(el){
        el.forEach(ele => {
            qw.push(ele)
        })
    })
}