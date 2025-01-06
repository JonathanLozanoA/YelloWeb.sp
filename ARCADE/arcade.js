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
        ocultarSeccionHistorial.style.display = "block"
        let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
        ocultarSeccionSeleccionAtaque.style.display = "block"
        //
        tuJugador.innerHTML = " Tomy😼"
        tuOponente.innerHTML = " Daly🐭"
        ataqueConTomy = true          
    }
    
    function seleccionDaly(){
        // OCULTAR SECCION
        let ocultarSeccionJugador = document.querySelector("#seleccionJugador")
        ocultarSeccionJugador.style.display = "none"
        let ocultarSeccionHistorial = document.querySelector("#historial")
        ocultarSeccionHistorial.style.display = "block"
        let ocultarSeccionSeleccionAtaque = document.querySelector("#seleccionAtaque")
        ocultarSeccionSeleccionAtaque.style.display = "block"
        //
        tuJugador.innerHTML = " Daly🐭"
        tuOponente.innerHTML = " Tomy😼"
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
        seleccionAtaqueOponente()
    } else if(cuchillo.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Cuchillo de cocina!"
        alert(ataqueJugador)
        seleccionAtaqueOponente()
    } else if(arcoFlecha.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Arco y flecha!"
        alert(ataqueJugador)
        seleccionAtaqueOponente()
    } else if(bombaTnt.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡TNT marca ACME!"
        alert(ataqueJugador)
        seleccionAtaqueOponente()
    } else if(hacha.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Hacha yo te elijo!"
        alert(ataqueJugador)
        seleccionAtaqueOponente()
    } else if(patada.checked && (ataqueConTomy == true || ataqueConDaly == true)) {
        ataqueJugador = "¡Patada voladora!"
        alert(ataqueJugador)
        seleccionAtaqueOponente()
    } else {
        alert("Seleccione primero al Jugador y luego el Ataque")
    }
}

// SELECCIONAR ATAQUE OPONENTE
function seleccionAtaqueOponente(){
    let ataqueAleatorio = aleatorio(1, 6)
    if(ataqueAleatorio == 1 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("¡Rayo laser!")
        ataqueOponente = "¡Rayo laser!"
    } else if(ataqueAleatorio == 2 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("¡Cuchillo de cocina!")
        ataqueOponente = "¡Cuchillo de cocina!"
    } else if(ataqueAleatorio == 3 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("¡Arco y flecha!")
        ataqueOponente = "¡Arco y flecha!"
    } else if(ataqueAleatorio == 4 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("¡TNT marca ACME!")
        ataqueOponente = "¡TNT marca ACME!"
    } else if(ataqueAleatorio == 5 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("¡Hacha yo te elijo!")
        ataqueOponente = "¡Hacha yo te elijo!"
    } else if(ataqueAleatorio == 6 && (ataqueConTomy == true || ataqueConDaly == true)) {
        alert("¡Patada voladora!")
        ataqueOponente = "¡Patada voladora!"
    } else {
        alert("Seleccione primero al Jugador y luego el Ataque")
    }
    combates()
    
}

//FUNCION DE NUMEROS ALEATORIOS
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// COMBATES Y RESULTADOS
function combates() {
    let spanVidasJugador = document.querySelector("#vidasJugador")
    let spanVidasOponente = document.querySelector("#vidasOponente")
    
    if(ataqueOponente == ataqueJugador) {
        historialCombate("Empate 😤")
    } else if(ataqueJugador == "¡Rayo laser!" && ataqueOponente == "¡Cuchillo de cocina!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Rayo laser!" && ataqueOponente == "¡Arco y flecha!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Rayo laser!" && ataqueOponente == "¡TNT marca ACME!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Rayo laser!" && ataqueOponente == "¡Hacha yo te elijo!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Rayo laser!" && ataqueOponente == "¡Patada voladora!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Cuchillo de cocina!" && ataqueOponente == "¡Arco y flecha!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Cuchillo de cocina!" && ataqueOponente == "¡TNT marca ACME!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Cuchillo de cocina!" && ataqueOponente == "¡Patada voladora!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Arco y flecha!" && ataqueOponente == "¡TNT marca ACME!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Hacha yo te elijo!" && ataqueOponente == "¡Cuchillo de cocina!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Hacha yo te elijo!" && ataqueOponente == "¡Arco y flecha!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Hacha yo te elijo!" && ataqueOponente == "¡TNT marca ACME!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Hacha yo te elijo!" && ataqueOponente == "¡Patada voladora!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Patada voladora!" && ataqueOponente == "¡Arco y flecha!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else if(ataqueJugador == "¡Patada voladora!" && ataqueOponente == "¡TNT marca ACME!") {
        historialCombate("Bien! 💪")
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    } else {
        historialCombate("Perdiste 🤕")
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
        mensajeFinal("🏆¡GANASTE!🏆")
        crearBotonReiniciar()
    }
    // DESACTIVAR BOTONES DE JUGADORES DESPUES DE SELECCIONAR ATAQUE
    let botonTomy = document.querySelector("#botonTomy")
    botonTomy.disabled = true
    let botonDaly = document.querySelector("#botonDaly")
    botonDaly.disabled = true
}

// BOTON REINICIAR JUEGO
function crearBotonReiniciar() {
    let seccionReiniciar = document.querySelector("#seccionReiniciar")
    let botonReiniciar = document.createElement("button")
    botonReiniciar.innerHTML = "Reiniciar Juego"
  
    seccionReiniciar.appendChild(botonReiniciar)
    botonReiniciar.addEventListener("click", reiniciarJuego)
  }
  
  // BOTON REINICIAR JUEGO
  function reiniciarJuego() {
      location.reload()
  }

// MENSAJE FINAL
function mensajeFinal(resultadoFinal) {
    let historial = document.querySelector("#historial")
    let newParrafo = document.createElement("p")
    newParrafo.innerHTML = resultadoFinal
    historial.appendChild(newParrafo)

    // DESACTIVAR BOTON SELECCIONAR Y ATAQUES AL FINALIZAR JUEGO
    let desactivarBoton = document.querySelector("#botonAtaque")
    desactivarBoton.disabled = true
    let laserInput = document.querySelector("#laser")
    laserInput.disabled = true
    let cuchilloInput = document.querySelector("#cuchillo")
    cuchilloInput.disabled = true
    let arcoFlechaInput = document.querySelector("#arcoFlecha")
    arcoFlechaInput.disabled = true
    let bombaTntInput = document.querySelector("#bombaTnt")
    bombaTntInput.disabled = true
    let hachaInput = document.querySelector("#hacha")
    hachaInput.disabled = true
    let patadaInput = document.querySelector("#patada")
    patadaInput.disabled = true
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