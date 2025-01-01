window.addEventListener("load", iniciarJuego)
window.addEventListener("load", seleccionarAtaque)

// EVENTO DE SELECCIONAR PERSONAJE
function iniciarJuego(){
    let botonPersonaje = document.querySelector("#botonPersonaje")
    botonPersonaje.addEventListener("click", seleccionarPersonaje)
}
function seleccionarPersonaje() {
    let tuPersonaje = document.querySelector("#tuPersonaje")
    let tuOponente = document.querySelector("#tuOponente")
    if(botonTomy.checked) {
        tuPersonaje.innerHTML = "😼Tomy"
        tuOponente.innerHTML = "🐭Daly"
    } else if(botonDaly.checked){
        tuPersonaje.innerHTML = "🐭Daly"
        tuOponente.innerHTML = "😼Tomy"
    } else {
        alert("Seleccione un personaje")
    }
}

// EVENTO DE SELECCIONAR ATAQUE
function seleccionarAtaque(){
    let botonAtaque = document.querySelector("#botonAtaque")
    botonAtaque.addEventListener("click", ataque)
}
function ataque() {
    if(laser.checked) {
        alert("¡Rayo laser!")
    } else if(cuchillo.checked) {
        alert("¡Cuchillo de cocina!")
    } else if(arco.checked) {
        alert("¡Arco y flecha!")
    } else if(bomba.checked) {
        alert("¡TNT marca ACME!")
    } else if(hacha.checked) {
        alert("¡Hacha yo te elijo!")
    } else if(patada.checked) {
        alert("¡Patada voladora!")
    } else {
        alert("Seleccione un ataque")
    }
    seleccionAtaqueOponente()
}

// FUNCION DE NUMEROS ALEATORIOS
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
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


