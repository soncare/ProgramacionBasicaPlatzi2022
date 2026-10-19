let victorias = 0;
let derrotas = 0;
let minimo = 1;
let maximo = 3;
let pc = 0;
let user = 0;
while (victorias < 3 && derrotas < 3) {
    user = prompt("Elige tu jugada: 1 para piedra, 2 para papel, 3 para tijera");
    pc = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    if (pc == 1){
        alert("La computadora eligió piedra");
    }else if (pc == 2){
        alert("La computadora eligió papel");
    }else if (pc == 3){
        alert("La computadora eligió tijera");
    }

    if (user == pc){
        alert("Empate")
    }else if (user == 1 && pc == 3){
        alert("Ganaste, la computadora eligió tijera");
        victorias++;
    }else if (user == 2 && pc == 1){
        alert("Ganaste, la computadora eligió piedra");
        victorias++;
    }else if (user == 3 && pc == 2){
        alert("Ganaste, la computadora eligió papel");
        victorias++;
    }else{
        alert("Perdiste, la computadora eligió " + (pc == 1 ? "piedra" : pc == 2 ? "papel" : "tijera"));
        derrotas++;
    }
}
alert("Juego terminado. Victorias: " + victorias + ", Derrotas: " + derrotas);