//first lesson!!

//show students the basics of dom manipulation, event handlers, 
//and query selectors


//step 1- declare your elements
const time = document.querySelector(".time");
const hours = document.querySelector(".hour");
const mins = document.querySelector(".minute");
const sec = document.querySelector(".second");
const noon = document.querySelector(".noon");

//set variables
//let allows us to change these values in the future
let currentHour = 1;
let currentMins = 0;
let currentSeconds = 0;



//get our current time with js built in functions
function getTime() {
    let date = new Date

    //currentHour = date.getHours();
    currentMins = date.getMinutes();
    currentSeconds = date.getSeconds();

    hours.innerHTML = currentHour;
    mins.innerHTML = currentMins;
    sec.innerHTML = currentSeconds;

    formatTime();
    formatNumbers();

}

//instead of military time show am or pm
formatTime = () => {
    //am or pm
    if (currentHour >= 12) {
        currentHour = currentHour - 12;
        noon.innerHTML = 'pm';
    } else if (currentHour <= 11) {
        currentHour = currentHour;
        noon.innerHTML = 'am';
    }
}

//check if numbers are single digit ot add a zero in front of them
formatNumbers = () => {
    if (currentHour < 10) {
        hours.innerHTML = `0${currentHour}`;
    }

    if (currentSeconds < 10) {
        sec.innerHTML = `0${currentSeconds}`;
    }

    if (currentMins < 10) {
        mins.innerHTML = `0${currentSeconds}`;

    }
}

setInterval(getTime, 1000);

