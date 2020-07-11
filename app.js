var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var startbutton = document.getElementById("startbutton");
var stopbutton = document.getElementById("stopbutton");
var resettbutton = document.getElementById("resettbutton");
var pbar = document.getElementById("Pbar");
var h = 0;
var m = 0;
var s = 0;
var ms = 0;
var wd;
var interval;

function start(){
    interval = setInterval(function() {
        ms++;
        if (ms > 99) {
            ms = 0;
            s++;
            seconds.innerHTML = s;
        }
        if (s > 59) {
            s = 0;
            seconds.innerHTML = s;
            m++;
            minutes.innerHTML = m;
        }
        if (m > 59) {
            m = 0;
            minutes.innerHTML = m;
            h++;
            hours.innerHTML = h;
        }
        if (ms == 25 || ms == 50 || ms == 75 || ms == 99) {
            wd = ms.toString() + "%";
            pbar.style.width = wd;
    
        }
    },10)
    startbutton.disabled = true;
}

function stop(){
    startbutton.disabled = false;
    clearInterval(interval);
}

function reset(){
    stop();
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    wd = ms.toString() + "%";
    pbar.style.width = wd;
    hours.innerHTML = "0";
    minutes.innerHTML = "0";
    seconds.innerHTML = "0";
}
