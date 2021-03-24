const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector("nav");
const dropdownLink = document.querySelectorAll(".nav-link-dropdown");
const dropdown = document.querySelectorAll(".dropdown");

function hideMenu() {
  hamburger.classList.remove("hide");
  close.classList.add("hide");
  navbar.classList.remove("show");
}

function showMenu() {
  hamburger.classList.add("hide");
  close.classList.remove("hide");
  navbar.classList.add("show");
}

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);

// NAV UX --------
window.onresize = menuFunc;
let resizingOnBigScreen = false;

function menuFunc() {
  if (window.innerWidth > 900) {
    resizingOnBigScreen = true;
  }
  if (window.innerWidth <= 900 && resizingOnBigScreen) {
    hideMenu();
    resizingOnBigScreen = false;
  }
}

if (window.innerWidth <= 900) {
  hideMenu();
  resizingOnBigScreen = false;
}
// --------------

function dropdownFunc(index) {
  let a = 0;
  let b = 1;
  if (index === 1) {
    a = 1;
    b = 0;
  }
  dropdown[a].style.visibility = "unset";
  dropdown[a].style.transform = "translateY(0)";
  dropdown[a].style.opacity = "1";
  dropdown[b].style.visibility = "hidden";
  dropdown[b].style.transform = "unset";
  dropdown[b].style.opacity = "0";
}

dropdownLink.forEach(function (link, i) {
  link.addEventListener("click", () => {
    dropdownFunc(i);
  });
});
dropdownLink.forEach(function (link, i) {
  link.addEventListener("mouseover", () => {
    dropdownFunc(i);
  });
});

document.body.addEventListener("click", (e) => {
  if (!e.target.classList.contains("nav-link-dropdown")) {
    dropdown.forEach((el) => {
      el.style.visibility = "hidden";
      el.style.transform = "unset";
      el.style.opacity = "0";
    });
  }
});

console.log("hello world");
