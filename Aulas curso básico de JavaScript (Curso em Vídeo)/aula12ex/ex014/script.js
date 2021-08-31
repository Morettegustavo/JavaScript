function carregar(){
    // Declaração de variaveis e Entradas de dados
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date() // Pega a data do dispositivo 
    var hora = data.getHours() // Pega a hora

    // Operação
    if(hora >= 0 && hora < 12){
        img.src = "imagens/manha_250.jpg"
        document.body.style.background = "#d8d1c7"

    }else if(hora >= 12 && hora <= 18){
        img.src = "imagens/tarde_250.jpg"
        document.body.style.background ="#df9d7a"

    }else {
        img.src = "imagens/noite_250.jpg"
        document.body.style.background = "#282b4c"
    }

    // Saída de dados
    msg.innerHTML = `Agora são ${hora} horas`

}

