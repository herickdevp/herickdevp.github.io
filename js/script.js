// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}

const btnMenu = document.querySelector(".btn-menu");

function toggleMenu(event) {
  const menuMobile = document.querySelector(".menuMobile");
  menuMobile.classList.toggle("ativo");
}

btnMenu.addEventListener("click", toggleMenu);
