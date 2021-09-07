function calcular(){
    // Dados de entrada
    let raio = window.document.getElementById('txt1').value 
    let res = window.document.getElementById('res')
    let area = 0
    res.innerHTML = ""

    // Operação
    if(raio === ""){
        window.alert(`[ERRO]: nenhum dado inserido! \nInforme os dados corretamente antes de executar o programa!`)
    }else{
        raio = parseFloat(raio)
        area = raio ** 2 * 3.14

        res.innerText = `Valor do Raio: ${raio} \nA área do círculo é: ${area}`
    }

    document.getElementById('txt1').value = ""
    document.getElementById('txt1').focus()
}

function limpar(){
    res.innerHTML = ""
    window.document.getElementById('txt1').focus()
}