$(document).ready(function(){
    var patch = {
        "quantidade" : "50"
    }
    
    $.ajax({
       type: 'PATCH',
       url: "https://demomotelapi.herokuapp.com/produtos/",
       data: JSON.stringify(patch),
       processData: false,
       contentType: 'application/merge-patch+json',
    
       /* success and error handling omitted for brevity */
    });
})