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

function dropdownOneFunc() {
  dropdown[0].style.visibility = "unset";
  dropdown[0].style.transform = "translateY(0)";
  dropdown[0].style.opacity = "1";
  dropdown[1].style.visibility = "hidden";
  dropdown[1].style.transform = "unset";
  dropdown[1].style.opacity = "0";
}

function dropdownTwoFunc() {
  dropdown[1].style.visibility = "unset";
  dropdown[1].style.transform = "translateY(0)";
  dropdown[1].style.opacity = "1";
  dropdown[0].style.visibility = "hidden";
  dropdown[0].style.transform = "unset";
  dropdown[0].style.opacity = "0";
}

dropdownLink.forEach(function (link, clicked) {
  link.addEventListener("click", () => {
    if (clicked === 0) {
      dropdownOneFunc();
    }
    if (clicked === 1) {
      dropdownTwoFunc();
    }
  });
});

dropdownLink.forEach(function (link, hovered) {
  link.addEventListener("mouseover", () => {
    if (hovered === 0) {
      dropdownOneFunc();
    }
    if (hovered === 1) {
      dropdownTwoFunc();
    }
  });
});

document.body.addEventListener("click", (e) => {
  if (!e.path[0].classList.contains("nav-link-dropdown")) {
    dropdown.forEach((el) => {
      el.style.visibility = "hidden";
      el.style.transform = "unset";
      el.style.opacity = "0";
    });
  }
});

console.log("hello world");
