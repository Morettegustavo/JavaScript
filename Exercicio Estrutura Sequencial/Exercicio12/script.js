 function calcular(){
    // Dados de entrada
    let altura = window.document.getElementById('txt1').value
    let res = window.document.getElementById('res')
    let pesoIdeal = 0
    res.innerHTML = ('')

    if(altura === ""){
        window.alert('[ERRO]: informe um valor para calcular.')
    }else{
        altura = Number(altura)
        pesoIdeal = (72.7 * altura) - 58
        res.innerHTML = (`Altura: ${altura} <br>Peso ideial: ${pesoIdeal}`)
        limpar()
    }
 }

 function limparTudo(){
    res.innerHTML = ('')
    limpar() 
 }

 function limpar(){
    window.document.getElementById('txt1').value = ""
    window.document.getElementById('txt1').focus()
 }
