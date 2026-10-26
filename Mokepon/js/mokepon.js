function seleccionarMascotaJugador() {
    let seleccionado = document.querySelector("input[name=mascota]:checked");
    if (seleccionado == null) {
        alert("Selecciona una mascota");
        return;
    } else {
        document.getElementById("nombre-mascota").innerHTML = seleccionado.id;
        seleccionarMascotaEnemigo();
    }
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = "";
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

let btnSelecmascota = document.getElementById("btnSelecMascota");
btnSelecmascota.addEventListener("click", seleccionarMascotaJugador);