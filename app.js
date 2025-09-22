// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function actualizarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function agregarAmigo() {
    nombre = document.getElementById("amigo");
    if(nombre.value == ""){
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        amigos.push(nombre.value);
    }
    nombre.value = "";
    actualizarAmigos();
}

function sortearAmigo() {
    if(amigos.length > 0){
        indiceAmigo = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAmigo];
        document.getElementById("resultado").innerHTML = amigoSorteado;
    }

}



