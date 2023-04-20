let back = 1927
let next = 1928

let btnN = document.getElementById('next')
let btnB = document.getElementById('prev')

document.getElementById('next').onclick = function () {
    
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide').appendChild(lists[0])


    //sumar
    back = back + 1

    next = next + 1

}
document.getElementById('prev').onclick = function () {
    
    let lists = document.querySelectorAll('.item')
    let slide = document.getElementById('slide')
    slide.prepend(lists[lists.length - 1])

    //restar
    back = back - 1
    next = next - 1

    if (back < 1927) {
        
        back = 1927

        next = 1928
        slide.appendChild(lists[13])
    }
}



/*--------  Temporizador -----------*/



let minutos = 1
let seconds = 0

cargarSeconds()

//definimos y ejecutamos los segundos

function cargarSeconds() {
    let txtSecond
    

    if (seconds < 0) {
        seconds = 59
    }

    //agregar 0 a los segundos despues de bajar de dos cifras
    if (seconds < 10) {
        txtSecond = `0${seconds}`
    }
    else {
        txtSecond = seconds
    }
    //enviamos los valores a plazmarse
    document.getElementById('seconds').textContent = txtSecond
    seconds--
    cargarMinutos(seconds)
}

function cargarMinutos(seconds) {
    let textMinutos

    if (seconds == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--
        }, 500);
    }
    else if (seconds == -1 && minutos == 0) {
        setTimeout(() => {
            minutos = 00;
        }, 500)
    }
    else if (seconds == 0 && minutos == 0) {
        setTimeout(() => {
            minutos = 00;
            seconds = 00
        }, 500)
    }

    //Mostrar minutos en pantalla
    if (minutos < 10) {
        textMinutos = `0${minutos}`;
    } else {
        textMinutos = minutos;
    }

    document.getElementById('minutes').textContent = textMinutos
    render(minutos, seconds)

}

function render(minutos, seconds) {
    if (minutos == 0 && seconds == 0) {
        // setTimeout(() => {
        //     $('#darWindowLineT').addClass('darWindowLineRen')
        // }, 900);
        setTimeout(() => {
            window.location.assign('/pages/languageESin.html')
        }, 2000);
    }
}
setInterval(cargarSeconds, 1000);