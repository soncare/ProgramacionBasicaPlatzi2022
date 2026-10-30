let seleccionado = "";
let mascotaAleatoria = "";
let ataqueJugador = "";
let ataqueEnemigo = "";

function seleccionarMascotaJugador() {
     seleccionado = document.querySelector("input[name=mascota]:checked");
    if (seleccionado == null) {
        alert("Selecciona una mascota");
        return;
    } else {
        document.getElementById("nombre-mascota").innerHTML = seleccionado.id;
        seleccionarMascotaEnemigo();
    }
}

function seleccionarMascotaEnemigo() {
    let minimo = 1;
    let maximo = 6;
    let pc = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    if (pc == 1) {
        mascotaAleatoria = "Hipodoge";
    } else if (pc == 2) {
        mascotaAleatoria = "Capipepo";
    }else if (pc == 3) {
        mascotaAleatoria = "Ratigueya";
    }else if (pc == 4) {
        mascotaAleatoria = "Langostelvis";
    }else if (pc == 5) {
        mascotaAleatoria = "Tucapalma";
    }else if (pc == 6) {
        mascotaAleatoria = "Pydos";
    }
    document.getElementById("nombre-enemigo").innerHTML = mascotaAleatoria;
}

function ataqueFuego() {
    if (seleccionado.id == null || seleccionado.id == "") {
        alert("Selecciona una mascota");
        return;
    }else if (seleccionado.id == "Ratigueya" || seleccionado.id == "Langostelvis" || seleccionado.id == "Pydos") {
        ataqueJugador = "FUEGO";
        ataqueAleatorioEnemigo();
    }else {
        alert("Tu mascota no puede atacar con fuego");
    }
}

function ataqueAgua() {
    if (seleccionado.id == null || seleccionado.id == "") {
        alert("Selecciona una mascota");
        return;
    }else if (seleccionado.id == "Hipodoge" || seleccionado.id == "Langostelvis" || seleccionado.id == "Tucapalma") {
        ataqueJugador = "AGUA";
        ataqueAleatorioEnemigo();
    }else {
        alert("Tu mascota no puede atacar con Agua");
    }
}

function ataqueTierra() {
    if (seleccionado.id == null || seleccionado.id == "") {
        alert("Selecciona una mascota");
        return;
    }else if (seleccionado.id == "Capipepo" || seleccionado.id == "Tucapalma" || seleccionado.id == "Pydos") {
        ataqueJugador = "TIERRA";
        ataqueAleatorioEnemigo();
    }else {
        alert("Tu mascota no puede atacar con Tierra");
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = "";
    let minimo = 1;
    let maximo = 3;
    let pc = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    if (pc == 1){
        ataqueEnemigo = "FUEGO";
    }else if (pc == 2){
        ataqueEnemigo = "AGUA";
    }else if (pc == 3){
        ataqueEnemigo = "TIERRA";
    }
    document.getElementById("ataque-jugador").innerHTML = ataqueJugador;
    document.getElementById("ataque-enemigo").innerHTML = ataqueEnemigo;
}

let btnSelecmascota = document.getElementById("btnSelecMascota");
btnSelecmascota.addEventListener("click", seleccionarMascotaJugador);

let btnFuego = document.getElementById("btnAttackFire");
btnFuego.addEventListener("click", ataqueFuego);
let btnAgua = document.getElementById("btnAttackWater");
btnAgua.addEventListener("click", ataqueAgua);
let btnTierra = document.getElementById("btnAttackEarth");
btnTierra.addEventListener("click", ataqueTierra);