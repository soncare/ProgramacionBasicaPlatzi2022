function seleccionarMascotaJugador() {
    let seleccionado = document.querySelector("input[name=mascota]:checked");
    alert("Seleccionaste a: " + seleccionado.id);
}

let btnSelecmascota = document.getElementById("btnSelecMascota");
btnSelecmascota.addEventListener("click", seleccionarMascotaJugador);