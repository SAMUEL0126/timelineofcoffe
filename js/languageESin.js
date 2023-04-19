// Function active 
let español = document.getElementById('Español')
let ingles = document.getElementById('Ingles')

let contpageClock = document.getElementById('contpageClock')
let contLoading = document.getElementById('contLoadingHidden')

// rutas ===>
// ingles: /pages/presentacionIng.html
// español: /pages/presentacion.html


// Lente Dark
let lentDarkT = document.getElementById('lentDarkT')

//mensaje de carga
let CargLoad = document.getElementById('CargLoad')

español.addEventListener('click', functionactiva)
ingles.addEventListener('click', functionactivaIn)
function functionactiva() {
    contLoading.classList.toggle('contLoadingHidden')
    contLoading.classList.toggle('contLoadingVisisble')

    contpageClock.classList.toggle('contpageClock')
    contpageClock.classList.toggle('contpageClockHidden')

    //mensaje de cargando
    CargLoad.textContent= 'Cargando...'

    // get reference to our Elemets
    let number = document.getElementById('number')
    let counter = 0

    setInterval(() => {
        if (counter == 100) {
            clearInterval
            lentDarkT.classList.add('lentDarkTransition')
            setTimeout(() => {
                window.location.assign('/pages/presentacion.html')
            }, 3000);
        } else {
            counter += 1
            number.innerHTML = `${counter}%`
        }

    }, 20)
}

// enviar a page en ingles 
function functionactivaIn() {
    contLoading.classList.toggle('contLoadingHidden')
    contLoading.classList.toggle('contLoadingVisisble')

    contpageClock.classList.toggle('contpageClock')
    contpageClock.classList.toggle('contpageClockHidden')

    //mensaje de cargando
    CargLoad.textContent = 'Loading...'

    // get reference to our Elemets
    let number = document.getElementById('number')
    let counter = 0

    setInterval(() => {
        if (counter == 100) {
            clearInterval
            lentDarkT.classList.add('lentDarkTransition')
            setTimeout(() => {
                window.location.assign('/pages/presentacionIng.html')
            }, 3000);
        } else {
            counter += 1
            number.innerHTML = `${counter}%`
        }

    }, 20)
}