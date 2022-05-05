$("#salvarFormPostCamareira").click(function(){
    
    let camareira = $("#nomeCamareira").val()

    var dados = {
        nome: camareira,
        registro: gera_id()
    }

    $.post("https://demomotelapi.herokuapp.com/camareiras/", dados, function(){
        alert("Camareira Registrado!")

        document.getElementById('formCadastros').reset()
    })
})

function gera_id(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}
