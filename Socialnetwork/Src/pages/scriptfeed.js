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