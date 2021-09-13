function calcular(){
    // Dados de entrada
    let celsius = window.document.getElementById('txt1').value 
    let res = window.document.getElementById('res')
    let fahrenheit = 0 

    if(celsius === ""){
        window.alert(`[ERRO]: prencha todos os campos antes de executar o programa.`)

    }else{
        celsius = Number(celsius)
        fahrenheit = celsius * 1.8 + 32

        // Dados de saída
        res.innerHTML = (`Os graus celsius informado é ${celsius}.<br>Isso corresponde a ${fahrenheit} graus em fehrenheit.`)
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
