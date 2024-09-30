const entrada = document.getElementById('entrada')

const kelvin01 = document.getElementById('kelvin01')
const kelvin02 = document.getElementById('kelvin02')

const celsius01 = document.getElementById('celsius01')
const celsius02 = document.getElementById('celsius02')

const fahrenheit01 = document.getElementById('fahrenheit01')
const fahrenheit02= document.getElementById('fahrenheit02')

const resposta = document.getElementById('resposta')

let temperatura

function teste(){
    function kelvin(temperatura){
        if(kelvin01.checked){
            temperatura = temperatura - 273
            resposta.textContent = `${temperatura} °C`
        }
        else if(kelvin02.checked){
            temperatura = (temperatura - 273) * 1.8 + 32
            resposta.textContent = `${temperatura} °F`
        }
    }
    kelvin(Number(entrada.value))

    function celsius(temperatura){
        if(celsius01.checked){
            temperatura = temperatura + 273
            resposta.textContent = `${temperatura} °K`
        }
        else if(celsius02.checked){
            temperatura = temperatura * 1.8 + 32
            resposta.textContent =`${temperatura} °F`
        }
    }
    celsius(Number(entrada.value))

    function fahrenheit(temperatura){
        if(fahrenheit01.checked){
            temperatura = (temperatura - 32) / 1.8
            resposta.textContent = `${temperatura} °C`
        }
        else if(fahrenheit02.checked){
            temperatura = (temperatura - 32) * 5 / 9 + 273
            resposta.textContent = `${temperatura} °K`
        }
    }
    fahrenheit(Number(entrada.value))

    

}