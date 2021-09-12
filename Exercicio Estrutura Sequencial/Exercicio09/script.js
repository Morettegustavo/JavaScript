function transformar(){
    // Entrada de dados
    let num = window.document.getElementById('txt1').value 
    let res = window.document.getElementById('res')
    let celsius = 0

    // Operação
    if(num === ""){
        window.alert(`[ERRO]: Preencha todos os campos!`)
    }else {
        num = Number(num)
        celsius = 5 * ((num-32)/9)

        // Dados de saída
        res.innerHTML = (`Os graus Fahrenheit informado é ${num}.<br>Isso corresponde a ${celsius} graus em celsius.`)
    }
    limpar()
}

function limpar(){
    window.document.getElementById('txt1').value = ""
    window.document.getElementById('txt1').focus()
    
}

function limpar_tudo(){
    limpar()
    res.innerText = ""
}