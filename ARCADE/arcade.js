let ataqueJugador

// EVENTO DE SELECCIONAR PERSONAJE
function iniciarJuego(){
    let tuPersonaje = document.querySelector("#tuPersonaje")
    let tuOponente = document.querySelector("#tuOponente")
    let botonTomy = document.querySelector("#botonTomy")
    botonTomy.addEventListener("click", seleccionTomy)
    let botonDaly = document.querySelector("#botonDaly")
    botonDaly.addEventListener("click", seleccionDaly)
    function seleccionTomy(){
        tuPersonaje.innerHTML = "😼Tomy"
        tuOponente.innerHTML = "🐭Daly"
    }
    function seleccionDaly(){
        tuPersonaje.innerHTML = "🐭Daly"
        tuOponente.innerHTML = "😼Tomy"
    }
}

// EVENTO DE SELECCIONAR ATAQUE
function seleccionarAtaque(){
    let botonAtaque = document.querySelector("#botonAtaque")
    botonAtaque.addEventListener("click", ataque)
}
function ataque() {
    if(laser.checked) {
        ataqueJugador = "¡Rayo laser!"
        alert(ataqueJugador)
    } else if(cuchillo.checked) {
        ataqueJugador = "¡Cuchillo de cocina!"
        alert(ataqueJugador)
    } else if(arco.checked) {
        ataqueJugador = "¡Arco y flecha!"
        alert(ataqueJugador)
    } else if(bomba.checked) {
        ataqueJugador = "¡TNT marca ACME!"
        alert(ataqueJugador)
    } else if(hacha.checked) {
        ataqueJugador = "¡Hacha yo te elijo!"
        alert(ataqueJugador)
    } else if(patada.checked) {
        ataqueJugador = "¡Patada voladora!"
        alert(ataqueJugador)
    } else {
        alert("Seleccione un ataque")
    }
    seleccionAtaqueOponente()
}

//FUNCION DE NUMEROS ALEATORIOS
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionAtaqueOponente(){
    let ataqueAleatorio = aleatorio(1, 6)
    
    if(ataqueAleatorio == 1) {
        //Rayo laser
    } else if(ataqueAleatorio == 2) {
        //Cuchillo
    } else if(ataqueAleatorio == 3) {
        //Arco y flecha
    } else if(ataqueAleatorio == 4) {
        //Bomba
    } else if(ataqueAleatorio == 5) {
        //Hacha
    } else if(ataqueAleatorio == 6) {
        //Patada
    }
}

//EVENTO DE CARGA COMPLETA
window.addEventListener("load", iniciarJuego)
window.addEventListener("load", seleccionarAtaque)