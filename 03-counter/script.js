// Captura dos botões
const buttonPlus = document.gquerySelector(".button-plus")
const buttonLess = document.querySelector(".button-less")
const display = document.querySelector(".counter-display")

// Valor do contador
let count = 0
console.log(count)
// Função para atualizar o contador
function updateLess(){
    count = count - 1
    display.textContent = count
}

function updatePlus(){
    count = count + 1
    display.textContent = count
}
