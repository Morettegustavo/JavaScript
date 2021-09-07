function executar(){
    // Entrada de dados
    let num = window.document.getElementById('txt1').value
    let res = window.document.getElementById('res')
    res.innerHTML = ""

    // Operação
    if(num === ""){
        window.alert(`Informe um número.`)
    } else{
        num = Number(num)
        res. innerHTML= (`O número informado foi <strong>${num}</strong>`)
    }
    
    window.document.getElementById("txt1").value = ""
    window.document.getElementById("txt1").focus()
}

