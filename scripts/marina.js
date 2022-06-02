const box1 = document.querySelector("section > p");
const box2 = document.querySelector("article > p");

var buyTheStars = [
    "You bought a star in the sky tonight",
    "Because your life is dark",
    "and it needs some light.",
    "You named it after me..",
    "But I'm not yours to keep",
    "Because you'll never see.",
    "that the stars are free.",
    "Oh we don't own our heavens now",
    "We only own our hell.",
    "and if you dunno that by now",
    "then you don't love me that well",
    "All my life I've been so lonely",
    "All in the name of being holy",
    "And still you like to think",
    "You own me, keep buying stars",
    "And you could buy up all the starts",
    "But it wouldn't change who you are",
];
var lonelyHeartsClub = [
    "Laugh track on a tv show",
    "echos in the dark alone",
    "I got to be feeling bad",
    "That I'm the reason you're sad",
    "January to Decemember, do you want to be a member?",
    "Lonely hearts club, oh",
];

function loopLyric() {
    var loopHeader = setInterval(changeText, 5005);
    var x = setInterval(changeHearts, 3009);
}

var index = 0;

function changeText() {
    index = index == buyTheStars.length ? 0 : index;
    document.querySelector("section > p").innerHTML = buyTheStars[index];

    index++;
}

var y = 0;

function changeHearts() {
    y = y == lonelyHeartsClub.length ? 0 : y;
    document.querySelector(".state > article > p").innerHTML =
        lonelyHeartsClub[y];
    y++;
}