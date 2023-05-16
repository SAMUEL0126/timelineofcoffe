const body = document.querySelector("body"),
hourhand = document.querySelector(".hour"),
minutehand = document.querySelector(".minute"),
secondhand = document.querySelector(".second")

const updatetime = () =>{
console.log();
let date = new Date(),
secToDeg = (date.getSeconds()/60) * 60;
minToDeg = (date.getMinutes()/60) * 360;
hrToDeg = (date.getHours()/12) * 360;

secondhand.style.transform = `rotate(${secToDeg}deg)`
minutehand.style.transform = `rotate(${minToDeg}deg)`
hourhand.style.transform = `rotate(${hrToDeg}deg)`

}
setInterval(updatetime,1000)
updatetime()