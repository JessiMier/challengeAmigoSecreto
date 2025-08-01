
/*1-Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.*/ 
 let amigos = [];

 function agregarAmigo() {
  
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); 

   // verificar que el campo no este vacio y mostar alerta si lo esta.
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // agregar el nombre al array
  amigos.push(nombre);

  // limpiar el input
  input.value = "";

  //llamar a la funcion que muestra la lista
  mostrarLista();
  
 }



function mostrarLista (){
  //tomo el elemento ul del html
  const lista = document.getElementById("listaAmigos");
  //vacio la lista para evitar duplicados
  lista.innerHTML = "";
  //recorro la lista y por cada nombre creo un li
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    //le agrego el contenido de cada posición
    li.textContent = amigos[i];

    //agrego el elemento creado al html
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
    return;
  }

  // generar índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // obtener nombre sorteado
  const nombreSorteado = amigos[indiceAleatorio];

  // mostrar resultado en el elemento HTML
  resultado.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;

}