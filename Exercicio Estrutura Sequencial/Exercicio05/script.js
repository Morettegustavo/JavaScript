// Entrada de dados
function converter(){
    let metro = window.document.getElementById('txt1').value 
    let res = window.document.getElementById('res')
    res.innerText = ""
    let cent = 0

    // Operação
    if(metro === ""){
        window.alert(`[ERRO]: nenhum dado inserido! \nInforme os dados corretamente para a conversão!`)
    }else{
        metro = Number(metro)
        cent = 100 * metro

        res.innerText = `${metro} m = ${cent} cm`
    }
    document.getElementById('txt1').value = "" 
    document.getElementById('txt1').focus()
}

function limpar(){
    res.innerText = ""
}