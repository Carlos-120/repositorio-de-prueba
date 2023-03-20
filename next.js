var imagenes = ["assets/img/ejemplo-1.png", "assets/img/ejemplo-2.png", "assets/img/ejemplo-3.png"];
var urls = ["https://pokemon-120.netlify.app/","https://rick-and-morty-120.netlify.app/","https://cruds-users.netlify.app/"]
var indiceActual = 0;
var img = document.getElementById("mi-imagen");

function cambiarImagen() {
    indiceActual++;
    if (indiceActual == imagenes.length) {
      indiceActual = 0;
    }
    img.src = imagenes[indiceActual];
  }
  
  function abrirUrl() {
    window.open(urls[indiceActual], "_blank");
  }
  
  // Mostrar la primera imagen al cargar la página
  window.onload = function() {
    img.src = imagenes[0];
  };