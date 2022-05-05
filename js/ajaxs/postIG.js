$("#salvarFormPostIg").click(function(){

    let bairro = $("#bairro").val()
    let cidade = $("#cidade").val()
    let cnpj = $("#cnpj").val()
    let endereco = $("#endereco").val()
    let fantasia = $("#fantasia").val()
    let numero = $("#numero").val()
    let social = $("#social").val()
    let telefone = $("#telefone").val()
    let telefone2 = $("#telefone2").val()
    let telefone3 = $("#telefone3").val()

    var dados = {
        social: social,
        fantasia: fantasia,
        cnpj: cnpj,
        cidade: cidade,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        telefone: telefone,
        telefone2: telefone2,
        telefone3: telefone3
    }

    $.post("https://defmoteapi.herokuapp.com/igs/", dados, function(msg){
        alert("Informações Registradas!")

        document.getElementById('formPostIG').reset()
    })
})
