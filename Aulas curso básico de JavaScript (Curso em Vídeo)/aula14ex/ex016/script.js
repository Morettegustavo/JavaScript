function verificar(){
    // Entrada e Declaração
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let res = document.getElementById("res")

    // Operação
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar!`
        //window.alert(`[ERRO] Dados não informados! Insira todas as informações!`)
    } else{
       res.innerHTML = `Contando: <br>` 
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       if (p <= 0){
           window.alert(`Passo inválido! Considerando PASSO 1`)
           p = 1
       }
       if (i < f){
           // Contagem crescente
           for(let c = i; c <= f; c += p){
               res.innerHTML += ` ${c} &#x1F449;`
           }
       } else if(f < i){
           // Contagem regressiva
           for(let c = i; c >= f; c -= p){
              res.innerHTML += ` ${c} &#x1F449;`
           }
       }
       res.innerHTML += `&#x1F6A9;`
    }
}
