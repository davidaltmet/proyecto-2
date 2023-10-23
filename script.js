// let input = document.querySelector(".input");
// let span = document.querySelector(".spann");
// let boton = document.querySelector(".boton");
// let estado = "close";

// boton.addEventListener("click", function (event) {
//   event.preventDefault(); // Evita que se envíe el formulario

//   if (input.value == "" && estado == "close") {
//     span.style.display = "block";
//     input.classList.add("efecto_input");
//     estado = "open";
//   } else {
//     span.style.display = "none";
//     estado == "close";
//   }
// });

// let links = document.querySelector(".links");
// let abrirLinks = document.querySelector(".barra");
// let cerrarLinks = document.querySelector(".barra");

// abrirLinks.addEventListener("click", function () {
//   links.classList.add("abrir_link");
// });

// abrirLinks.addEventListener("click", function () {
//   links.classList.remove("abrir_link");
// });
document.addEventListener("DOMContentLoaded", function () {
  let cajaTexto = document.querySelector(".input");
  let enviarFormulario = document.querySelector(".boton");
  let mensajeError = document.querySelector(".spann");
  let principal = document.querySelector(".principal");
  let mensajeExitoso = document.querySelector(".mj_exitoso");
  let estado = "close";

  enviarFormulario.addEventListener("click", function (event) {
    event.preventDefault();

    if (cajaTexto.value == "" && estado == "close") {
      mensajeError.style.display = "block";
      cajaTexto.classList.add("efecto_input");
      estado = "open";
    } else {
      mensajeError.style.display = "none";
      estado = "close";
      cajaTexto.classList.remove("efecto_input");
    }
  });

  enviarFormulario.addEventListener("click", function () {
    if (estado == "close") {
      principal.style.display = "none";
      mensajeExitoso.style.display = "block";
      estado = "open";
    } else {
      mensajeExitoso.style.display = "none";
      estado = "close";
    }
  });
});
