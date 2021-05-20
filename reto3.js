const boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    let ans = document.getElementById("resp").value;

    let botonSiguiente = document.getElementById("boton-siguiente");
    let veredicto = document.getElementById("veredicto");

    ans=ans.toLowerCase();
    if(ans === "2348") {
        veredicto.innerHTML = "Un paso más";
        botonSiguiente.innerHTML = '<a href="reto4.html"/><button>Siguiente</button></a>';
    }
    else {
    veredicto.innerHTML = "Incorrecto";
    }
    
 
});