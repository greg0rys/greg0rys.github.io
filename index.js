var back = document.querySelector("#back");

back.addEventListener("click", () => {
    window.history.go(-1);
    alert("clicked");
}, true)