window.addEventListener("load", iniciarJuego)
window.addEventListener("load", etapa2)

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
function etapa2(){
    let botonAtaque = document.querySelector("#botonAtaque")
    botonAtaque.addEventListener("click", seleccionarAtaque)
}
function seleccionarAtaque() {
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
}



