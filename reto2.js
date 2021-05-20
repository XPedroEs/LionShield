const boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    let ans = document.getElementById("respuesta").value;
    
    let botonSiguiente = document.getElementById("boton-siguiente");
    let veredicto = document.getElementById("veredicto");

    ans = ans.toLowerCase();
    if(ans === "070521") {
        veredicto.innerHTML = "Siguiente misión";
        botonSiguiente.innerHTML = '<a href="reto3.html"/><button>Siguiente</button></a>';
    }
    else {
        veredicto.innerHTML = "Incorrecto";
    }
});