let clockHour = document.getElementById('hour')
let clockMinute = document.getElementById('minute')
let clockSecond = document.getElementById('second')


function getCurrentDateTime(){
    let dateTime = new Date();
    clockHour.innerText = dateTime.getHours()
    clockMinute.innerText = dateTime.getMinutes()
    clockSecond.innerText = dateTime.getSeconds()
}


setInterval(getCurrentDateTime,1000)