$(document).ready(function(){
    /*
    das()
    console.log(qw)

    setTimeout( () => {
        var po = window.open()
        po.document.write(
            '<html>'+
                '<body>'
        )
    
        po.document.write(
            `<h1>${qw[0]}</h1>`
        )
        po.document.write(
                '</body>'+
            '</html>'
        )
    }, 2000)
    */

    
    setTimeout( function(){
        exportReportToExcel()
    }, 2000)



})

function exportReportToExcel() {
    let table = document.getElementsByID("relCartoes");
    TableToExcel.convert(table[0], { 
      name: `file.xlsx`,
      sheet: {
        name: 'Sheet 1'
      }
    });
    console.log('doc criado')
}

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