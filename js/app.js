let back = 1927
let next = 1928

let btnN = document.getElementById('next')
let btnB = document.getElementById('prev')

/* BOTONES */

let volver = document.getElementById('volver')



volver.addEventListener('click', () => {
    setTimeout(() => {
        lentDarkT.classList.toggle('lentDarkT')
        lentDarkT.classList.toggle('lentDarkTexit')

        setTimeout(() => {
            containerTempo.classList.toggle('none')
            containerTempo.classList.toggle('containerTempo')

            volver.classList.toggle('glow-on-hoverV')
        }, 500);

    }, 100);
    setTimeout(() => {
        window.location.assign('/pages/languageESin.html')
    }, 2000);
})

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
        slide.appendChild(lists[22])
    }
}



/*--------  Temporizador -----------*/



let minutos = 10
let seconds = 0

//lente negro
let lentDarkT = document.getElementById('lentDarkT')


//contenedor del temporizador regresivo
let containerTempo = document.getElementById('containerTempo')

setTimeout(() => {
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
        cargarMinutos(seconds, txtSecond)
    }

    function cargarMinutos(seconds, txtSecond) {
        let txtsegundos = txtSecond
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
        render(minutos, seconds, txtsegundos)

    }

    function render(minutos, seconds, txtsegundos) {
        if (minutos == 0 && seconds == 0) {
            txtsegundos = '00'

            document.getElementById('seconds').textContent = txtsegundos

            setTimeout(() => {
                lentDarkT.classList.toggle('lentDarkT')
                lentDarkT.classList.toggle('lentDarkTexit')

                setTimeout(() => {
                    containerTempo.classList.toggle('none')
                    containerTempo.classList.toggle('containerTempo')
                }, 500);

            }, 100);
            setTimeout(() => {
                window.location.assign('/pages/languageESin.html')
            }, 2000);
        }
    }
    setInterval(cargarSeconds, 1000);
}, 2000);
window.addEventListener('load', () => {
    containerTempo.classList.toggle('none')
    setTimeout(() => {
        containerTempo.classList.toggle('none')
        containerTempo.classList.toggle('containerTempo')

        volver.classList.toggle('glow-on-hoverV')
    }, 1200);
})



/* temporizador para detectar innactividad del usuario */

let tiempoInactividad = 60000; // tiempo en milisegundos (5 segundos)
let temporizador;

// Reinicia el temporizador
function reiniciarTemporizador() {
    let zarko = 2000
    clearTimeout(temporizador); // Cancela el temporizador anterior
    temporizador = setTimeout(function () {

        // Ejecuta tu función aquí

        lentDarkT.classList.toggle('lentDarkT')
        lentDarkT.classList.toggle('lentDarkTexit')

        containerTempo.classList.toggle('none')
        containerTempo.classList.toggle('containerTempo')
        
        volver.classList.toggle('glow-on-hoverV')
        setTimeout(() => {
            window.location.assign('/pages/languageESin.html')
        }, zarko);

    }, tiempoInactividad);
}

// Agrega eventos para detectar la actividad del usuario
document.addEventListener("mousemove", reiniciarTemporizador);
document.addEventListener("mousedown", reiniciarTemporizador);
document.addEventListener("keydown", reiniciarTemporizador);

// Inicia el temporizador inicial
reiniciarTemporizador();
