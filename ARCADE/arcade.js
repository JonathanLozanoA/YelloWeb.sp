function seleccionarPersonaje() {
    alert("Hola")
}
function iniciarJuego(){
    let botonTomy = document.querySelector("#botonTomy")
    botonTomy.addEventListener("click", seleccionarPersonaje)
}
window.addEventListener("load", iniciarJuego)



