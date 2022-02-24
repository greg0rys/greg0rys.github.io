var back = document.querySelector("#back");

back.addEventListener("click", () => {
    window.history.go(-1);
    alert("clicked");
}, true)

function changeTables(table) {
    if (!table) {
        return 0;
    } else {
        return 1;
    }
}