var escolhas = ['pedra', 'papel', 'tesoura']

var jogador = document.getElementById('jogador')
var computador = document.getElementById('computador')
var resultado = document.getElementById('resultado')


function game(valor){
    jogador.textContent = `Jogador: ${valor}`
    
    var escolhas_computador = escolhas[Math.floor(Math.random() * escolhas.length)]
    computador.textContent = `Computador: ${escolhas_computador}`

    if(valor == escolhas_computador){
        resultado.textContent = 'EMPATE!'
    }

    else if(valor == 'pedra' && escolhas_computador == 'papel'){
        resultado.textContent = 'VOCÊ PERDEU!'
    }
    else if(valor == 'pedra' && escolhas_computador == 'tesoura'){
        resultado.textContent = 'VOCÊ VENCEU!'
    }

    else if(valor == 'papel' && escolhas_computador == 'pedra'){
        resultado.textContent = 'VOCÊ VENCEU!'
    }
    else if(valor == 'papel' && escolhas_computador == 'tesoura'){
        resultado.textContent = 'VOCÊ PERDEU!'
    }

    else if(valor == 'tesoura' && escolhas_computador == 'pedra'){
        resultado.textContent = 'VOCÊ PERDEU!'
    }
    else if(valor == 'tesoura' && escolhas_computador == 'papel'){
        resultado.textContent = 'VOCÊ VENCEU!'
    }
}

