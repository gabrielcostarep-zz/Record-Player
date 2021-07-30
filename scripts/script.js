var music = document.getElementById("music");
var agulha = document.getElementById("agulha");
var vinil = document.getElementById("vinil");

var rotacaoVinil;
var rotacaoAgulha;
let rot = 0;
let ang = 0;

music.volume = 0.1;

function play() {
    if (ang == 0) {
        ang = 16;
    }

    agulha.style = "transition: 1.5s; transform: rotate(" + ang + "deg); right: 9%;";

    function touch() {
        music.play();
        rotacaoAgulha = setInterval(function () {
            ang += 0.5;
            agulha.style = "transform: rotate(" + ang + "deg); right: 9%;";

            if (music.ended == true) {
                setTimeout(stop, 0);
            }
        }, music.duration * 20);
    }

    touch();

    rotacaoVinil = setInterval(function () {
        rot++
        vinil.style = "transform: rotate(" + rot + "deg)";
    }, 6);
}

function pause() {
    music.pause();
    rot += 10;
    vinil.style = "transition: 1.5s; transform: rotate(" + rot + "deg)";

    clearInterval(rotacaoVinil);
    clearInterval(rotacaoAgulha);
}

function stop() {
    stats = "stop";
    music.pause()
    music.currentTime = 0;

    ang = 0;

    agulha.style = "transition: 1.5s; transform: rotate(" + ang + "deg)";
    vinil.style = "transform: rotate(" + ang + "deg)";

    clearInterval(rotacaoVinil);
    clearInterval(rotacaoAgulha);
}

function volume(value) {
    music.volume = value / 10;
}
