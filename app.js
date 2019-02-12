const time = document.querySelector(".time");
const hours = document.querySelector(".hour");
const mins = document.querySelector(".minute");
const sec = document.querySelector(".second");

let currentHour = 0;
let currentMins = 0;
let currentSeconds = 0;


function getTime() {
    let date = new Date

    currentHour = date.getHours();
    currentMins = date.getMinutes();
    currentSeconds = date.getSeconds();

    hours.innerHTML = currentHour;
    mins.innerHTML = currentMins;
    sec.innerHTML = currentSeconds;

}

formatTime = () => {

}

setInterval(getTime, 1000);

