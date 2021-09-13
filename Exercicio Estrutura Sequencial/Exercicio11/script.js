function calcular(){
    // Entrada de dados
    let num1 = window.document.getElementById('txt1').value
    let num2 = window.document.getElementById('txt2').value
    let num3 = window.document.getElementById('txt3').value
    let res = window.document.getElementById('res')
    let produto = 0.0
    let soma = 0.0
    let elevado = 0.0
    // Operação
    if(num1 === "" || num2 === "" || num3 === ""){
        window.alert(`[ERRO]: existe campos que não forão preenchidos! \nInforme todos os campos corretamente antes de calcular!`)
    } else{
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        num3 = parseFloat(num3)

        // Operação
        produto = (num1 * 2) + (num2 / 2)
        soma = (num1 * 3) + num3
        elevado = num3 ** 3

        // Saída de dados
        res.innerHTML = (`Dados informados:<br>Primeiro: ${num1} <br>Segundo: ${num2} <br>Terceiro: ${num3} <hr>`)
        res.innerHTML += (`1) ${produto} <br>2) ${soma} <br>3) ${elevado}`)

        limpar()
    }
}

function limpar(){
    window.document.getElementById('txt1').value = ""
    window.document.getElementById('txt2').value = ""
    window.document.getElementById('txt3').value = ""
    window.document.getElementById('txt1').focus()
}

function limpar_tudo(){
    res.innerText = ""
    limpar()
}