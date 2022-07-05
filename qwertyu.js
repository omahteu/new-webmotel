import { jsPDF } from "./paginas/relatorios.js"

$("#peQuartos").click(function(){
    const doc = new jsPDF()

    doc.text("Hello world!", 10, 10)
    doc.save("a4.pdf")
})
