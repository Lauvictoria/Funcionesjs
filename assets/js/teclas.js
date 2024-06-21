
var p = ''
var c = ''

function pintar (miColor){
    elemento = document.getElementById('key')
    elemento.style.backgroundColor = miColor
}

function caja (miColor){
    ele = document.getElementById('container')
    ele.style.border = '3px solid black'
    ele.style.backgroundColor = miColor
}

document.addEventListener('keydown', function (event) {
    
    if (event.key === 'a') {
        p = 'pink'   
        pintar(p)    
    } else if (event.key === 's') {
        p = 'orange'
        pintar(p)
    } else if (event.key === 'd'){
        p = 'skyblue'
        pintar(p)
    } else if (event.key === 'q'){
        c = 'purple'
        caja(c)
    } else if ( event.key === 'w'){
        c = 'gray'
        caja(c)
    }else if (event.key === 'e'){
        c = 'brown'
        caja(c)  
    }

})




    