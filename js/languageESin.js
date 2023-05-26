let español = document.getElementById('Español')

let ingles = document.getElementById('Ingles')

let contpageClock = document.getElementById('contpageClock')

let contLoading = document.getElementById('contLoadingHidden')

let lentDarkT = document.getElementById('lentDarkT')

let CargLoad = document.getElementById('CargLoad')

español.addEventListener('click', functionactiva)
ingles.addEventListener('click', functionactivaIn)

function functionactiva() {

    contLoading.classList.toggle('contLoadingHidden')
    contLoading.classList.toggle('contLoadingVisisble')
    contpageClock.classList.toggle('contpageClock')
    contpageClock.classList.toggle('contpageClockHidden')

    CargLoad.textContent= 'Cargando...'

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

function functionactivaIn() {
    contLoading.classList.toggle('contLoadingHidden')
    contLoading.classList.toggle('contLoadingVisisble')

    contpageClock.classList.toggle('contpageClock')
    contpageClock.classList.toggle('contpageClockHidden')

    CargLoad.textContent = 'Loading...'

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