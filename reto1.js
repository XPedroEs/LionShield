const boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    let ans = document.getElementById("respuesta").value;
    let veredicto = document.getElementById("veredicto");

    ans = ans.toLowerCase();
    if(ans === "historia del tiempo") {
        veredicto.innerHTML = "Entrando a la base de datos" + "<br>";
        veredicto.innerHTML += '<a href="reto2.html"/><button>Siguiente</button></a>'; 
    }
    else {
        veredicto.innerHTML = "¿Eres un intruso?";
    }
    
    console.log(ans);

});