'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-pares')
const botaoMostrarNumeroTriplo = document.getElementById('botao-mostrar-triplo')
const botaoMostrarProximoNumeroImpar = document.getElementById('botao-mostrar-proximo-impar')
const botaoMostrarMultiplosTresCinco = document.getElementById('botao-mostrar-multiplos-3-e-5')
const botaoMostrarMultiplosTresOuCinco = document.getElementById('botao-mostrar-multiplos-3-ou-5')
const botaoMostrarPrimo = document.getElementById('botao-mostrar-primo')

function mostrarNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarTriplo() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numero-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]*3
        container.appendChild(novoSpan)
    }
}

function mostrarProximoNumeroImpar() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-numero-impar')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if(numeros[contador] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[contador]) + 1
            container.appendChild(novoSpan)
        }else{
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[contador]) + 2
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplosE(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos-3-e-5')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if(numeros[contador] % 3 == 0 && numeros[contador] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[contador])
            container.appendChild(novoSpan)
        }
    }    
}

function mostrarMultiplosOu(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos-3-ou-5')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if(numeros[contador] % 3 == 0 || numeros[contador] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[contador])
            container.appendChild(novoSpan)
        }
    }    
}

function mostrarProximoPrimo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-numero-primo')
    container.replaceChildren('')

    ///Filtro para saber se é primo ou não

    function ePrimo(numero){
        if (numero <= 1) return false

        if (numero <= 3) return true

        if (numero % 2 === 0  || numero % 3 === 0) return false

        for(let contador = 2; contador < numero; contador++){
            if (numero % contador === 0) return false
        }
        return true
    }

    for (let contador = 0; contador < numeros.length; contador++){
        let numero = parseInt(numeros[contador]) + 1

        while(!ePrimo(numero)){
            numero++
        }

        const novoSpan = document.createElement('span')
        novoSpan.textContent = numero
        container.appendChild(novoSpan)        
    }
     
}

botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumeroTriplo.addEventListener('click', mostrarTriplo)
botaoMostrarProximoNumeroImpar.addEventListener('click', mostrarProximoNumeroImpar)
botaoMostrarMultiplosTresCinco.addEventListener('click', mostrarMultiplosE)
botaoMostrarMultiplosTresOuCinco.addEventListener('click', mostrarMultiplosOu)
botaoMostrarPrimo.addEventListener('click', mostrarProximoPrimo)
