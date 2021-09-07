function calcular(){
    // Dados de entrada
    let valor_hora = window.document.getElementById('valor_hora').value
    let quant_horas = window.document.getElementById('quant_hora').value
    let res = window.document.getElementById('res')
    let salario = 0
    res.innerText = ""

    // Operação
    if(valor_hora === "" || quant_horas === ""){
        window.alert(`[ERRO]: campos não foram preenchidos! \nInforme os dados corretamente!`)
    }else{
        valor_hora = Number(valor_hora)
        quant_horas = parseInt(quant_horas)
        salario = valor_hora * quant_horas


        // Saídas de dados
        res.innerText = `O valor da hora trabalhada é: ${valor_hora} \nA quantidade de horas trabalhadas é: ${quant_horas} \nO valor do sálario é: ${salario}`
    }
    limpar()
}
function limpar(){
    window.document.getElementById('valor_hora').value = ""
    window.document.getElementById('quant_hora').value = ""
    window.document.getElementById('valor_hora').focus()

}


function limpar_tudo(){
    limpar()
    res.innerText = ""
}

