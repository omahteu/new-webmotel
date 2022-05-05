$(document).ready(function(){
    $.get("https://defmoteapi.herokuapp.com/igs/", function(resultado){
        if(resultado.length != 0){
            $("#salvarFormPostIg").css('display', 'none')
        }
    })
})

$("#alteraFormPostIg").click(function(){
    $.get("https://defmoteapi.herokuapp.com/igs/", function(resultado){
        if(resultado.length != 0){
            atualizaIg()
        } else {
            alert("Nenhum dado cadastrado")
        }
    })
})

async function atualizaIg(){
    const response = await fetch("https://defmoteapi.herokuapp.com/igs/")
    const data = await response.json()

    data.forEach(elemento => {

        $("#social").val(elemento.social)
        $("#fantasia").val(elemento.fantasia)
        $("#cnpj").val(elemento.cnpj)
        $("#cidade").val(elemento.cidade)
        $("#endereco").val(elemento.endereco)
        $("#numero").val(elemento.numero)
        $("#bairro").val(elemento.bairro)
        $("#telefone").val(elemento.telefone)
        $("#telefone2").val(elemento.telefone2)
        $("#telefone3").val(elemento.telefone3)

    });

    document.getElementById('salvarFormPostIg').id = 'alteraFormPostIg'
    document.getElementById('alteraFormPostIg').value = 'Atualizar'

}
