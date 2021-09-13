function transformar(){
    // Entrada de dados
    let fahrenheit = window.document.getElementById('txt1').value 
    let res = window.document.getElementById('res')
    let celsius = 0

    // Operação
    if(fahrenheit === ""){
        window.alert(`[ERRO]: Preencha todos os campos!`)
    }else {
        fahrenheit = Number(fahrenheit)
        celsius = 5 * ((fahrenheit-32)/9)

        // Dados de saída
        res.innerHTML = (`Os graus Fahrenheit informado é ${fahrenheit}.<br>Isso corresponde a ${celsius} graus em celsius.`)
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
