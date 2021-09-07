function somar(){
    // Dados de entrada
    let num1 = window.document.getElementById("num1").value
    let num2 = window.document.getElementById("num2").value
    let res = window.document.getElementById("res")
    res.innerHTML = ""

    if(num1 === "" || num2 === ""){
        window.alert("[ERRO] Informe os dados corretamente!")
    } else{
        num1 = Number(num1)
        num2 = Number(num2)

        // Saída de dados
        res.innerHTML = (`${num1} + ${num2} = ${num1 + num2}`)
    }

    window.document.getElementById("num1").value = ""
    window.document.getElementById("num2").value = ""
    window.document.getElementById("num1").focus()
}


