$(document).ready(function(){
    var patch = {
        "quantidade" : "50"
    }
    
<<<<<<< HEAD
    $.ajax({
       type: 'PATCH',
       url: "https://demomotelapi.herokuapp.com/produtos/",
       data: JSON.stringify(patch),
       processData: false,
       contentType: 'application/merge-patch+json',
    
       /* success and error handling omitted for brevity */
    });
})
=======
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
>>>>>>> 9d3b887538b497f1f008235352a8d3d2174afe6c
