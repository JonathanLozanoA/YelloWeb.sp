// VARIABLES GLOBALES
let ataqueJugador
let ataqueOponente
let ataqueConTomy = false
let ataqueConDaly = false
let vidasJugador = 3
let vidasOponente = 3

// SELECCIONAR TU JUGADOR Y OPONENTE
function iniciarJuego(){
    // OCULTAR SECCION
    let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
    ocultarSeccionSeleccionAtaque.style.display = "none"
    let ocultarSeccionHistorial = document.querySelector("#historial")
    ocultarSeccionHistorial.style.display = "none"
    //

    let tuJugador = document.querySelector("#tuJugador")
    let tuOponente = document.querySelector("#tuOponente")
    let botonTomy = document.querySelector("#botonTomy")
    let botonDaly = document.querySelector("#botonDaly")

    botonTomy.addEventListener("click", seleccionTomy)
    botonDaly.addEventListener("click", seleccionDaly)

    function seleccionTomy(){
        // OCULTAR SECCION
        let ocultarSeccionJugador = document.querySelector("#seleccionJugador")
        ocultarSeccionJugador.style.display = "none"
        let ocultarSeccionHistorial = document.querySelector("#historial")
        ocultarSeccionHistorial.style.display = "none"
        let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
        ocultarSeccionSeleccionAtaque.style.display = "block"
        //

        tuJugador.innerHTML = "😼 ¡TOMY usó "
        tuOponente.innerHTML = "🐭 ¡DALY usó "
        ataqueConTomy = true          
    }

    function seleccionDaly(){
        // OCULTAR SECCION
        let ocultarSeccionJugador = document.querySelector("#seleccionJugador")
        ocultarSeccionJugador.style.display = "none"
        let ocultarSeccionHistorial = document.querySelector("#historial")
        ocultarSeccionHistorial.style.display = "none"
        let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
        ocultarSeccionSeleccionAtaque.style.display = "block"
        //

        tuJugador.innerHTML = "🐭 ¡DALY usó "
        tuOponente.innerHTML = "😼 ¡TOMY usó "
        ataqueConDaly = true
    }
}

// SELECCIONAR TU ATAQUE
function seleccionarAtaque(){
    let botonAtaque = document.querySelector("#botonAtaque")
    botonAtaque.addEventListener("click", ataque)
}

function ataque() {
    // OCULTAR SECCION
    let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
    ocultarSeccionSeleccionAtaque.style.display = "none"
    let ocultarSeccionHistorial = document.querySelector("#historial")
    ocultarSeccionHistorial.style.display = "block"
    //

    let ataqueTuJugador = document.querySelector("#ataqueTuJugador")
    
    if(cuchillo.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "CUCHILLO!"
        seleccionAtaqueOponente()
    } else if(rayoLaser.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "RAYO LASER!"
        seleccionAtaqueOponente()
    } else if(cactus.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "CACTUS!"
        seleccionAtaqueOponente()
    } else if(hacha.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "HACHA!"
        seleccionAtaqueOponente()
    } else if(bombaAcme.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "BOMBA ACME!"
        seleccionAtaqueOponente()
    } else if(gancho.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "GANCHO!"
        seleccionAtaqueOponente()
    } else {
        alert("Seleccione primero un ataque 🧨")
        ataqueJugador = ""
        // OCULTAR SECCION
        let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
        ocultarSeccionSeleccionAtaque.style.display = "block"
        let ocultarSeccionHistorial = document.querySelector("#historial")
        ocultarSeccionHistorial.style.display = "none"
        //
    }
    ataqueTuJugador.innerHTML = ataqueJugador    
}

// SELECCIONAR ATAQUE OPONENTE
function seleccionAtaqueOponente(){
    let ataqueTuOponente = document.querySelector("#ataqueTuOponente")
    let ataqueAleatorio = aleatorio(1, 6)

    if(ataqueAleatorio == 1 && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueOponente = "CUCHILLO!"
    } else if(ataqueAleatorio == 2 && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueOponente = "RAYO LASER!"
    } else if(ataqueAleatorio == 3 && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueOponente = "CACTUS!"
    } else if(ataqueAleatorio == 4 && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueOponente = "HACHA!"
    } else if(ataqueAleatorio == 5 && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueOponente = "BOMBA ACME!"
    } else if(ataqueAleatorio == 6 && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueOponente = "GANCHO!"
    } else {
        alert("Seleccione primero un ataque 🧨")
        ataqueOponente = ""
    }
    combates()
    ataqueTuOponente.innerHTML = ataqueOponente
    
}

//FUNCION DE NUMEROS ALEATORIOS
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// COMBATES Y RESULTADOS
function combates() {
    let spanVidasJugador = document.querySelector("#vidasJugador")
    let spanVidasOponente = document.querySelector("#vidasOponente")
    
    if(ataqueJugador == ataqueOponente) {
        historialCombate("Empate😤")
    } else if(ataqueJugador == "RAYO LASER!" && ataqueOponente == "CUCHILLO!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "RAYO LASER!" && ataqueOponente == "CACTUS!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "RAYO LASER!" && ataqueOponente == "BOMBA ACME!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "RAYO LASER!" && ataqueOponente == "HACHA!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "RAYO LASER!" && ataqueOponente == "GANCHO!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "CUCHILLO!" && ataqueOponente == "CACTUS!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "CUCHILLO!" && ataqueOponente == "BOMBA ACME!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "CUCHILLO!" && ataqueOponente == "GANCHO!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "CACTUS!" && ataqueOponente == "BOMBA ACME!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "HACHA!" && ataqueOponente == "CUCHILLO!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "HACHA!" && ataqueOponente == "CACTUS!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "HACHA!" && ataqueOponente == "BOMBA ACME!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "HACHA!" && ataqueOponente == "GANCHO!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "GANCHO!" && ataqueOponente == "CACTUS!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "GANCHO!" && ataqueOponente == "BOMBA ACME!") {
        historialCombate("Victoria!💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else {
        historialCombate("Perdiste🤕")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

// REVISAR VIDAS A VER SI HAY GANADOR
function revisarVidas() {
    if(vidasJugador == 0) {
        mensajeFinal("💀GAME OVER💀")
        crearBotonReiniciar()
    } else if(vidasOponente == 0) {
        mensajeFinal("✨🏆¡GANASTE!🏆✨")
        crearBotonReiniciar()
    }

    // CONTRA ATAQUE
    let contraAtacar = document.querySelector("#contraAtacar")
    contraAtacar.addEventListener("click", contra)

    // DESACTIVAR BOTONES DE JUGADORES DESPUES DE SELECCIONAR ATAQUE
    let botonTomy = document.querySelector("#botonTomy")
    botonTomy.disabled = true
    let botonDaly = document.querySelector("#botonDaly")
    botonDaly.disabled = true
}

// CONTRA ATAQUE
function contra() {
    // OCULTAR SECCION
    let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
    ocultarSeccionSeleccionAtaque.style.display = "block"
    let ocultarSeccionHistorial = document.querySelector("#historial")
        ocultarSeccionHistorial.style.display = "none"
    //
}

// CREAR BOTON REINICIAR JUEGO
function crearBotonReiniciar() {
    // OCULTAR SECCION
    let contraAtacar = document.querySelector("#contraAtacar")
    contraAtacar.style.display = "none"
    //

    let reiniciar = document.querySelector("#reiniciar")
    let botonReiniciar = document.createElement("button")
    botonReiniciar.innerHTML = "Reiniciar Juego"
    botonReiniciar.id = "botonReiniciar"
    reiniciar.appendChild(botonReiniciar)
    botonReiniciar.addEventListener("click", reiniciarJuego)
  }
  
// BOTON REINICIAR JUEGO
function reiniciarJuego() {
    location.reload()
}

// MENSAJE FINAL
function mensajeFinal(resultadoFinal) {
    // OCULTAR SECCION
    let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
    ocultarSeccionSeleccionAtaque.style.display = "none"
    let ocultarSeccionHistorial = document.querySelector("#historial")
    ocultarSeccionHistorial.style.display = "none"
    //

    let mensajeFinal = document.querySelector("#mensajeFinal")
    let newParrafo = document.createElement("p")
    newParrafo.innerHTML = resultadoFinal
    mensajeFinal.appendChild(newParrafo)
}

// HISTORIAL DE COMBATES
function historialCombate(resultado) {
    let historial = document.querySelector("#historial")
    let newParrafo = document.createElement("p")
    newParrafo.innerHTML = resultado
    historial.appendChild(newParrafo)
}

// EVENTO CARGA COMPLETA DEL HTML
window.addEventListener("load", iniciarJuego)
window.addEventListener("load", seleccionarAtaque)