const blue = document.getElementById('blue')
const red = document.getElementById('red')
const green = document.getElementById('green')
const yellow = document.getElementById('yellow')

function pintar(elemento, color = 'blue') {
    elemento.style.backgroundColor = color;
}

blue.addEventListener("click", function() {
    pintar(blue, 'black')
})

red.addEventListener("click", function() {
    pintar(red, 'black')
})

green.addEventListener("click", function() {
    pintar(green, 'black')
})

yellow.addEventListener("click", function() {
    pintar(yellow, 'black')
})
