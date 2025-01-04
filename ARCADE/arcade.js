// VARIABLES GLOBALES
let ataqueJugador
let ataqueOponente
let ataqueConTomy = false
let ataqueConDaly = false

// SELECCIONAR TU PERSONAJE Y OPONENTE
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
        ataqueConTomy = true  
        
    }
    function seleccionDaly(){
        tuPersonaje.innerHTML = "🐭Daly"
        tuOponente.innerHTML = "😼Tomy"
        ataqueConDaly = true
    } 
     
}

// SELECCIONAR TU ATAQUE
function seleccionarAtaque(){
    
    let botonAtaque = document.querySelector("#botonAtaque")
    botonAtaque.addEventListener("click", ataque)
}
function ataque() {
    if(laser.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Rayo laser!"
        alert(ataqueJugador)
    } else if(cuchillo.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Cuchillo de cocina!"
        alert(ataqueJugador)
    } else if(arco.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Arco y flecha!"
        alert(ataqueJugador)
    } else if(bomba.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡TNT marca ACME!"
        alert(ataqueJugador)
    } else if(hacha.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Hacha yo te elijo!"
        alert(ataqueJugador)
    } else if(patada.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Patada voladora!"
        alert(ataqueJugador)
    } else {
        alert("Seleccione primero al Personaje ..")
    }
    seleccionAtaqueOponente()
}

// SELECCIONAR ATAQUE OPONENTE
function seleccionAtaqueOponente(){
    let ataqueAleatorio = aleatorio(1, 6)
    
    if(ataqueAleatorio == 1 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("Rayo laser")
    } else if(ataqueAleatorio == 2 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("Cuchillo")
    } else if(ataqueAleatorio == 3 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("Arco y flecha")
    } else if(ataqueAleatorio == 4 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("Bomba")
    } else if(ataqueAleatorio == 5 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("Hacha")
    } else if(ataqueAleatorio == 6 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("Patada")
    } else {
        alert(".. y luego el Ataque")
    }
    historialBatalla()
}
//FUNCION DE NUMEROS ALEATORIOS
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//CREAR HISTORIAL DE BATALLA
function historialBatalla() {
    let historialBatalla = document.querySelector("#historialBatalla")
    let newParrafo = document.createElement("p")
    newParrafo.innerHTML = "Nuevo historial de batalla"
    historialBatalla.appendChild(newParrafo)
}

//AVISO DE CARGA COMPLETA
window.addEventListener("load", iniciarJuego)
window.addEventListener("load", seleccionarAtaque)