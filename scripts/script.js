var music = document.getElementById("music");
var agulha = document.getElementById("agulha");
var vinil = document.getElementById("vinil");

var rotacaoVinil;
var rotacaoAgulha;
let rot = 0;
let ang = 0;

// Iniciar a musica com um volume baixo
music.volume = 0.1;

// Funcao para iniciar a musica
function play() {
    if (ang == 0) {
        ang = 16;
    }

    // Altera o angulo da agulha antes da musica iniciar
    agulha.style = "transform: rotate(" + ang + "deg); right: 9%;";

    function touch() {
        music.play();

        // Funcao responsavel pela agulha avancar conforme a musica for tocando
        rotacaoAgulha = setInterval(function () {
            ang += 0.5;
            agulha.style = "transform: rotate(" + ang + "deg); right: 9%;";

            // Caso a musica acabe a funcao stop é chamada
            if (music.ended == true) {
                setTimeout(stop, 0);
            }
        }, music.duration * 20);
    }

    touch();

    // Funcao responsavel por fazer o vinil girar
    rotacaoVinil = setInterval(function () {
        rot++
        vinil.style = "transform: rotate(" + rot + "deg)";
    }, 6);
}

// Funcao para pausar a musica
function pause() {
    music.pause();
    rot += 10;
    vinil.style = "transition: 1.5s; transform: rotate(" + rot + "deg)";

    // Parar a animacao
    clearInterval(rotacaoVinil);
    clearInterval(rotacaoAgulha);
}

// Funcao para parar a musica
function stop() {
    music.pause()
    music.currentTime = 0;

    ang = 0;

    agulha.style = "transform: rotate(" + ang + "deg)";
    vinil.style = "transform: rotate(" + ang + "deg)";

    // Parar a animacao
    clearInterval(rotacaoVinil);
    clearInterval(rotacaoAgulha);
}

// Funcao para alterar o volume da musica
function volume(value) {
    music.volume = value / 10;
}
