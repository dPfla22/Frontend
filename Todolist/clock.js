var clock = document.querySelector('.h1-clock');
function getTime(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if(hour<10) {
        hour="0"+hour;
    }
    if(minutes<10) {
        minutes="0"+minutes;
    }
    if(seconds<10) {
        seconds="0"+seconds;
    }
    clock.innerHTML = hour + ":" + minutes +":"+seconds;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();