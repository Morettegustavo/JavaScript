function verificar(){
    // Declaração de variaveis e Entrada de dados
    var data = new Date() // Pega a data atual
    var ano = data.getFullYear() // Pega o ano com 4 digitos
    var f_ano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")

    // Operação
    if(f_ano.value.length == 0 || Number(f_ano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(f_ano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked) {
            if(idade >= 0 && idade < 10) {
                // Criança
                genero = "Menino"
                img.setAttribute('src' , 'imagens/imagens_250/menino_250.png')

            }else if(idade < 21) {
                // Jovem
                genero = "Jovem"
                img.setAttribute('src' , 'imagens/imagens_250/jovem_h_250.png')

            }else if(idade < 50) {
                // Adulto
                genero = "Homem"
                img.setAttribute('src' , 'imagens/imagens_250/homem_250.png')

            }else {
                // Idoso
                genero = "Idoso"
                img.setAttribute('src' , 'imagens/imagens_250/idoso_250.png')
            }

        }else if (fsex[1].checked) {
            if(idade >= 0 && idade < 10) {
                // Criança
                genero = "menina"
                img.setAttribute('src' , 'imagens/imagens_250/menina_250.png')

            }else if(idade < 21) {
                // Jovem
                genero = "Jovem"
                img.setAttribute('src' , 'imagens/imagens_250/jovem_m_250.png')

            }else if(idade < 50) {
                // Adulto
                genero = "Mulher"
                img.setAttribute('src' , 'imagens/imagens_250/mulher_250.png')

            }else {
                // Idosa
                genero = "Idosa"
                img.setAttribute('src' , 'imagens/imagens_250/idosa_250.png')
            }
        }

         // Saída de dados
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}