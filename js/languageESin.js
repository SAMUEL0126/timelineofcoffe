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

español.addEventListener('click', functionactiva)

function functionactiva() {
    contLoading.classList.toggle('contLoadingHidden')
    contLoading.classList.toggle('contLoadingVisisble')

    contpageClock.classList.toggle('contpageClock')
    contpageClock.classList.toggle('contpageClockHidden')


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

