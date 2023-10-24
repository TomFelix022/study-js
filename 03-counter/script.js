// Captura dos botões
const buttonPlus = document.querySelector(".button-plus")
const buttonLess = document.querySelector(".button-less")
const display = document.querySelector(".counter-display")

// Valor do contador
let count = 0

// Função para atualizar o contador
function updateLess(){
    if(count <= 0){
        return count = 0
    }

    count = count - 1
    display.textContent = count
}

function updatePlus(){
    count = count + 1
    display.textContent = count
}
