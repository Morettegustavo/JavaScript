function calcular(){
    // Entrada
    let base = window.document.getElementById('txt1').value 
    let res = window.document.getElementById('res')
    let area = 0
    res.innerText = ""

    if(base === ""){
        window.alert(`[ERRO]: nenhum dado informado!\nInforme todos os dados corretamente antes de executar o programa!`)
    } else{
        base = Number(base)
        area = base * base

        res.innerText = `O valor da base do quadrado é ${base}\nA área do quadrado é ${area}\nO dobro da área do quadrado é ${area * 2}`
 
    }
    window.document.getElementById('txt1').value = ""
    window.document.getElementById('txt1').focus()      
}

function limpar(){
    res.innerText = ""
    window.document.getElementById('txt1').value = ""
    window.document.getElementById('txt1').focus()
}