function getCurrentTime() {
    const currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    h = checkHours(h);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s; // throw them in our root element
    setTimeout(getCurrentTime, 1000); // have this function call itself each second so the clock looks real.
}

function checkTime(i) {
    return i < 10 ? (i = "0" + i) : i;
}

function checkHours(i) {
    return i > 12 ? i - 12 : i;
}

function styleFooter() {
    var footer = document.querySelector("#footContent");
    footer.style.background = " rebeccapurple";
    footer.style.color = "red";
    footer.style.fontSize = "20px";
    footer.innerHTML += " " + new Date().getFullYear() + "&copy;";
}

// once the DOM has loaded call the helpers
window.addEventListener("DOMContentLoaded", function() {
    // grab the btn groups btns
    var homebtn = document.querySelector("button#home");
    var ghbtn = document.querySelector("button#GH");
    var smplepg = document.querySelector("button#nextPage");

    homebtn.addEventListener("click", () => {
        if (window.location.href == "./index.html") {
            window.location.reload();
        } else {
            window.location.href = "./index.html";
        }
    });
    ghbtn.addEventListener("click", () => {
        window.location.href = "https://www.github.com/greg0rys";
    });
    smplepg.addEventListener(
        "click",
        () => {
            window.location.href = "./nextpage.html";
        },
        true
    );

    getCurrentTime();
    styleFooter();
});