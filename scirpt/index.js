const menuBtn = document.querySelector('.menu-toggle');
const menuSpan = document.querySelector("span.fa");
const menu = document.querySelector("nav#main-menu")

menuBtn.addEventListener('click', () => {
  if (menuSpan.classList.contains("fa-bars")) {
    menuSpan
      .classList
      .replace("fa-bars", "fa-times");
    menu
      .classList
      .add("header__nav--visible")

  } else if (menuSpan.classList.contains("fa-times")) {
    menuSpan
      .classList
      .replace("fa-times", "fa-bars")
    menu
      .classList
      .remove("header__nav--visible")
  }
})
