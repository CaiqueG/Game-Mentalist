var numeroSecreto = parseInt(Math.random() * 10)   // Sorteia o numero 
console.log(numeroSecreto)

var tentativas2 = 3
var tentativas = document.getElementById("tentativas")    
tentativas.innerHTML = 'Tentativas: 3'                 // Mostra as tentativas na tela

var points2 = 0                              
var points = document.getElementById("points")
points.innerHTML = 'Pontuação: 0'                // Mostra a pontuação na tela

  function jogar(){
    var campo1 = document.querySelector("#valor")    
    var campo2 = parseInt(campo1.value)             // Seleciona o valor no Campo

    if (campo2 == numeroSecreto){
      if (tentativas2 == 3){               // Caso acerte de Primeira
      points2 = points2 + 5
      atualizaPontuacao()
      function atualizaPontuacao(){                        // Atualiza a pontuação quando se acerta
        var divPoints = document.getElementById('points')
        var html = "Pontuação: " + points2 
        divPoints.innerHTML = html
        var resultado = "Você Ganhou! O número Secreto é: " + numeroSecreto
        var resultado1 = document.getElementById("result")
        resultado1.innerHTML = resultado
        campo1.value = ""
        document.getElementById("b1").disabled = true;     // Desabilita o botão quando acerta
      }
    }
      else if (tentativas2 == 2){            // Caso acerte na Segunda tentativa
      points2 = points2 + 3
      atualizaPontuacao()
      function atualizaPontuacao(){
        var divPoints = document.getElementById('points')
        var html = "Pontuação: " + points2 
        divPoints.innerHTML = html
        var resultado = "Você Ganhou! O número Secreto é: " + numeroSecreto
        var resultado1 = document.getElementById("result")
        resultado1.innerHTML = resultado
        campo1.value = ""
        document.getElementById("b1").disabled = true;
      }
      } 
      
       else if (tentativas2 == 1){          // Caso acerte na Terceira tentativa
      points2 = points2 + 1
      atualizaPontuacao()
      function atualizaPontuacao(){
        var divPoints = document.getElementById('points')
        var html = "Pontuação: " + points2 
        divPoints.innerHTML = html
        var resultado = "Você Ganhou! O número Secreto é: " + numeroSecreto
        var resultado1 = document.getElementById("result")
        resultado1.innerHTML = resultado
        campo1.value = ""
        document.getElementById("b1").disabled = true;
      }
      } 
    }
    
    else if(campo2 > numeroSecreto) {       // caso erre e o numero seja maior
      if(tentativas2 > 1){                  // caso ainda reste tentativas 
      tentativas2--                        // diminui as tentativas
      atualizaTentativas()
      function atualizaTentativas(){
       var divTentativas = document.getElementById('tentativas')
       var html = "Tentativas: " + tentativas2 
       divTentativas.innerHTML = html
      }
      var resultado = "Você Errou! O número Secreto é menor!"
      var resultado1 = document.getElementById("result")
      resultado1.innerHTML = resultado
      campo1.value = ""
    }
      else {                            // se não restar mais tentativas 
        tentativas2--
        atualizaTentativas()
      function atualizaTentativas(){
       var divTentativas = document.getElementById('tentativas')
       var html = "Tentativas: " + tentativas2 
       divTentativas.innerHTML = html
      }
        var resultado = "Você Perdeu! O número Secreto é: " + numeroSecreto     // mensagem que perdeu o jogo
      var resultado1 = document.getElementById("result")
      resultado1.innerHTML = resultado
      campo1.value = ""
        document.getElementById("b1").disabled = true    // desabilita o botão
      }
    }
    
    else if(campo2 < numeroSecreto) {             // caso erre e o numero seja menor
      if(tentativas2 > 1){                       // caso ainda reste tentativas
      tentativas2--                            // diminui as tentativas
      atualizaTentativas()
      function atualizaTentativas(){
       var divTentativas = document.getElementById('tentativas')
       var html = "Tentativas: " + tentativas2 
       divTentativas.innerHTML = html
      }
      var resultado = "Você Errou! O número Secreto é maior!"
      var resultado1 = document.getElementById("result")
      resultado1.innerHTML = resultado
      campo1.value = ""
    }
      else {                                           // se não restar mais tentativas 
        tentativas2--
        atualizaTentativas()
      function atualizaTentativas(){
       var divTentativas = document.getElementById('tentativas')
       var html = "Tentativas: " + tentativas2 
       divTentativas.innerHTML = html
      }
        var resultado = "Você Perdeu! O número Secreto é: " + numeroSecreto         // mensagem que perdeu o jogo
      var resultado1 = document.getElementById("result")
      resultado1.innerHTML = resultado
      campo1.value = ""
        document.getElementById("b1").disabled = true          // desabilita o botão
      }
    }
  }  
 
