let back = 1927
let next = 1928

let btnN = document.getElementById('next')
let btnB = document.getElementById('prev')

/* BOTONES */

let volver = document.getElementById('volver')
let contIconSearch = document.getElementById('contIconSearch')
let SearchBox = document.getElementById('SearchBox')

/*========== Obtener los años por ID ==========*/
let year1927 = document.getElementById('year1927')
let year1928 = document.getElementById('year1928')
let year1929 = document.getElementById('year1929')
let year1931 = document.getElementById('year1931')
let year1932 = document.getElementById('year1932')
let year1936 = document.getElementById('year1936')
let year1937 = document.getElementById('year1937')
let year1938 = document.getElementById('year1938')
let year1940 = document.getElementById('year1940')
let year1941 = document.getElementById('year1941')
let year1945 = document.getElementById('year1945')
let year1947 = document.getElementById('year1947')
let year1951 = document.getElementById('year1951')
let year1952 = document.getElementById('year1952')
let year1953 = document.getElementById('year1953')
let year1958 = document.getElementById('year1958')
let year1959 = document.getElementById('year1959')
let year1960 = document.getElementById('year1960')
let year1962 = document.getElementById('year1962')
let year1963 = document.getElementById('year1963')
let year1965 = document.getElementById('year1965')
let year1966 = document.getElementById('year1966')
let year1967 = document.getElementById('year1967')
let year1968 = document.getElementById('year1968')
let year1969 = document.getElementById('year1969')
let year1970 = document.getElementById('year1970')
let year1971 = document.getElementById('year1971')
let year1972 = document.getElementById('year1972')
let year1973 = document.getElementById('year1973')
let year1974 = document.getElementById('year1974')
let year1975 = document.getElementById('year1975')
let year1976 = document.getElementById('year1976')
let year1978 = document.getElementById('year1978')
let year1979 = document.getElementById('year1979')
let year1980 = document.getElementById('year1980')
let year1981 = document.getElementById('year1981')
let year1982 = document.getElementById('year1982')
let year1983 = document.getElementById('year1983')
let year1984 = document.getElementById('year1984')
let year1985 = document.getElementById('year1985')
let year1986 = document.getElementById('year1986')
let year1987 = document.getElementById('year1987')
let year1988 = document.getElementById('year1988')
let year1989 = document.getElementById('year1989')
let year1991 = document.getElementById('year1991')
let year1993 = document.getElementById('year1993')
let year1994 = document.getElementById('year1994')
let year1995 = document.getElementById('year1995')
let year1996 = document.getElementById('year1996')
let year1997 = document.getElementById('year1997')
let year1998 = document.getElementById('year1998')
let year1999 = document.getElementById('year1999')
let year2000 = document.getElementById('year2000')
let year2001 = document.getElementById('year2001')
let year2002 = document.getElementById('year2002')
let year2003 = document.getElementById('year2003')
let year2004 = document.getElementById('year2004')
let year2005 = document.getElementById('year2005')
let year2006 = document.getElementById('year2006')
let year2007 = document.getElementById('year2007')
let year2008 = document.getElementById('year2008')
let year2009 = document.getElementById('year2009')
let year2009Two = document.getElementById('year2009Two')
let year2015 = document.getElementById('year2015')


/*==========BUSQUEDA==========*/
contIconSearch.addEventListener('click', ()=> {
    console.log(SearchBox.value);
})

volver.addEventListener('click', () => {
    setTimeout(() => {
        lentDarkT.classList.toggle('lentDarkT')
        lentDarkT.classList.toggle('lentDarkTexit')

        setTimeout(() => {
            containerTempo.classList.toggle('none')
            containerTempo.classList.toggle('containerTempo')

            contIconSearch.classList.toggle('contIconSearch')
            volver.classList.toggle('glow-on-hoverV')
            SearchBox.classList.toggle('SearchBox')

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
    console.log(back);

    if (next == 1991 && back == 1990) {
        btnN.style.visibility= "hidden"
    }
    
    if (back > 1927) {
        btnB.style.visibility="visible"
    }

}
document.getElementById('prev').onclick = function () {

    let lists = document.querySelectorAll('.item')
    let slide = document.getElementById('slide')
    slide.prepend(lists[lists.length - 1])

    //restar
    back = back - 1
    next = next - 1

    if(next < 1991 && back < 1990) {
        btnN.style.visibility= "visible"
    }
    
  
    console.log( back);

    if (back < 1927) {

        back = 1927

        next = 1928
    
        slide.appendChild(lists[63])
       
    }
    if (back <= 1927) {
        btnB.style.visibility="hidden"
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

        contIconSearch.classList.toggle('contIconSearch')
        volver.classList.toggle('glow-on-hoverV')
        SearchBox.classList.toggle('SearchBox')
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
        contIconSearch.classList.toggle('contIconSearch')
        SearchBox.classList.toggle('SearchBox')
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

window.addEventListener('load', () => {
    if (back == 1927) {
        btnB.style.visibility="hidden"
    }
})