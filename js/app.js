let back = 1927
let next = 1928

let btnN = document.getElementById('next')
let btnB = document.getElementById('prev')
// window.addEventListener('load', () => {
//     // btnB.textContent = back
//     // btnN.textContent = next
// })
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

let workTime = 10
let breakTime = 5

let seconds = "00"

function start() {

    seconds = 59

    let workMinutes = workTime - 1
    let breakMinutes = breakTime - 1

    breakCount = 0

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes
        document.getElementById('seconds').innerHTML = seconds
    
        seconds = seconds - 1 

        if( seconds == 0){
            workMinutes = workMinutes - 1
            if(workMinutes == -1){
                if(breakCount % 2 == 0){
                    workMinutes = breakMinutes
                    breakCount++ 


                }else{
                    workMinutes = workTime
                    breakCount++

                   
                }
            }
            seconds = 59
        }
    }

    setInterval(timerFunction , 1000)

}

window.addEventListener('load', () => {
    document.getElementById('minutes').innerHTML = workTime
    document.getElementById('seconds').innerHTML = seconds
    start()
})