

let workTime = 10
let breakTime = 5

let seconds = "00"

Window.onload = () =>{
    document.getElementById('minutes').innerHTML = workTime
    document.getElementById('seconds').innerHTML = seconds


}

function start() {

    document.getElementById('start').style.display = "none"
    document.getElementById('reset').style.display = "block"


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