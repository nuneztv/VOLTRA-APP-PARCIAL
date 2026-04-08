function goToPage(type) {
  window.location.href = type + ".html";
}


document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll(".icons .fa-heart").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("is-liked");
    });
  });

  
  document.querySelectorAll(".icons .fa-bookmark").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("is-saved");
    });
  });
});
const pantalla = document.getElementById("pantalla-comentarios");

document.querySelectorAll(".abrir-comentarios").forEach((icon) => {
  icon.addEventListener("click", () => {
    pantalla.classList.remove("oculto");
  });
});

function cerrarComentarios() {
  pantalla.classList.add("oculto");
}
document.querySelectorAll(".stars").forEach((grupo) => {
  const estrellas = grupo.querySelectorAll("i");

  estrellas.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas.forEach((e, i) => {
        if (i <= index) {
          e.classList.remove("fa-regular");
          e.classList.add("fa-solid");
        } else {
          e.classList.remove("fa-solid");
          e.classList.add("fa-regular");
        }
      });
    });
  });
});

