const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector("nav");

function HideMenu() {
  hamburger.classList.remove("hide");
  close.classList.add("hide");
  navbar.classList.remove("show");
}

function ShowMenu() {
  hamburger.classList.add("hide");
  close.classList.remove("hide");
  navbar.classList.add("show");
}

hamburger.addEventListener("click", ShowMenu);
close.addEventListener("click", HideMenu);

if (window.innerWidth <= 900) {
  HideMenu();
}
