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
        if (window.location.href === "./index.html") {
            window.location.reload();
        } else {
            window.location.href = "../index.html";
        }
    });
    ghbtn.addEventListener("click", () => {
        window.open("https://www.github.com/greg0rys", '_blank');
    });
    smplepg.addEventListener(
        "click",
        () => {
            window.location.href = "./nextpage.html"; // this should take you to the 404 page, as this page doesn't exist.
        },
        true // make sure this event is captured.
    );

    getCurrentTime();
    styleFooter();

    var submit = document.querySelector("#addComments");
    var text_to_email;
    var txtF = document.querySelector("textarea");

    var textField = document.createElement("textarea");
    textField.setAttribute("id", "textInput");
    submit.addEventListener("click", evt => {
        textField.innerText = "Any comments you'd like to add?";
        var table = document.querySelector("#textArea");
        table.append(textField);

    }, {once:true}); // pass in the once option so this textField can only be added
    // a max of one time no matter how many times the submit button is pushed.

    /* we need these methods that we commented out below do not delete */
     // var textF = document.querySelector("#textArea");
     // textF.addEventListener("click", e=>{
     //     var txtF = document.querySelector("textarea");
     //     txtF.innerText = " ";
     // } );


    //
    // // when the mouse leaves the textarea, it shall be removed.
    // //TODO: I want to be able to grab the value that the user enters and echo it back for now.
    // textF.addEventListener("mouseleave", ()=>{
    //     text_to_email = textF.innerText;
    //     alert(text_to_email);
    //     textF.innerHTML = " ";
    //
    // })








    /*
    * attach a click event to the loginCaption. If the caption hasn't been clicked yet
    * then x will = 0 and fire the slideup event
    * and then set x to 1 this way upon the next click event it will fire the slideDown event
    *
    * */
    var x = 0 // the counter this function will use.
    $('#loginCaption').click(evt =>{
        if(x === 0){
            $('td').slideUp('fast');
            x = 1;
        } else {
            $('td').slideDown('fast');
            x = 0;
        }
    })






});


