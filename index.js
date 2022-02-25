clock = document.getElementById("span#clock");

function getCurrentTime() {
    const currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    h = checkHours(h);
    m = checkTime(m);
    s = checkTime(s);
    clock.innerHTML = h + ":" + m + ":" + s; // throw them in our root element
    setTimeout(getCurrentTime, 1000); // have this function call itself each second so the clock looks real.
}

function checkTime(i) {
    return i < 10 ? (i += "0" + i) : i;
}

function checkHours(i) {
    return i > 12 ? i - 12 : i;
}

// check if the seconds needs a 0 appended in front of it
clock.innerHTML = getCurrentTime();