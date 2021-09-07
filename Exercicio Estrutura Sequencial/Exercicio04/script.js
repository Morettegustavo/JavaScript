function trocar(){
    // Entrada de dados
    materia = window.document.getElementById('txt1').value = ""
    materia = window.document.getElementById('txt1').focus()
    num1 = window.document.getElementById('num1').value = ""
    num2 = window.document.getElementById('num2').value = ""
    num3 = window.document.getElementById('num3').value = ""
    num4 = window.document.getElementById('num4').value = ""
    res.innerHTML =""
}

function calcular(){
    // Entrada de dados
    let materia = window.document.getElementById('txt1').value
    let num1 = window.document.getElementById('num1').value
    let num2 = window.document.getElementById('num2').value
    let num3 = window.document.getElementById('num3').value
    let num4 = window.document.getElementById('num4').value
    let res = window.document.getElementById('res')
    let media = 0
    res.innerHTML = ""
    // Operação
    if(num1 === "" || num2 === "" || num3 === "" || num4 === "" || materia === ""){
        window.alert(`[ERRO]: existe campos que não foram preenchidos! \nInsira Todos os dados corretamente antes de rodar o programa.`)
    } else {
        num1 = Number(num1)
        num2 = Number(num2)
        num3 = Number(num3)
        num4 = Number(num4)

        media = ((num1 + num2 + num3 + num4) / 4)
        res.innerHTML = (`A média das 4 notas:  [${num1}, ${num2}, ${num3}, ${num4}] <br>da matéria de ${materia} é: <strong>${media}</strong> `)

        num1 = window.document.getElementById('num1').value = ""
        num2 = window.document.getElementById('num2').value = ""
        num3 = window.document.getElementById('num3').value = ""
        num4 = window.document.getElementById('num4').value = ""
        window.document.getElementById('num1').focus()
    }
}
