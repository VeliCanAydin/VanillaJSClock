let seconds = 0;
let minutes = 0;
let hours = 0;
let isWatching = false;
const stopwatch = document.getElementById('stopwatch');

function startTimer() {
    if (isWatching == false) {
        isWatching = true;
        stopwatchCycle();
    }
}

function stopTimer() {
    if (isWatching == true) {
        isWatching = false;
    }
}

function stopwatchCycle() {
    if(isWatching == true) {
        seconds = parseInt(seconds);
        minutes = parseInt(minutes);
        hours = parseInt(hours);
        seconds += 1;
        if(seconds == 60) {
            minutes += 1;
            seconds = 0;
        }
        if(minutes == 60) {
            hours += 1;
            minutes = 0;
            seconds = 0;
        }
        if (seconds < 10 || seconds == 0) {
            seconds = '0' + seconds;
        }
        if (minutes < 10 || minutes == 0) {
            minutes = '0' + minutes;
        }
        if (hours < 10 || hours == 0) {
            hours = '0' + hours;
        }
        stopwatch.textContent = hours + ':' + minutes +  ':' + seconds;
        setTimeout("stopwatchCycle()", 1000);
    }
}

function resetTimer() {
    stopwatch.textContent = '00:00:00';
    hours = 0;
    minutes = 0;
    seconds = 0;
}