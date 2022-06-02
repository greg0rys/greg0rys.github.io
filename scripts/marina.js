function loopLyric() {
    var loopHeader = setInterval(changeText, 5005);
}

var index = 0;

var lyric = [
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

function changeText() {
    index = index == lyric.length ? 0 : index;
    document.querySelector("section > p").innerHTML = lyric[index];

    index++;
}