let body = document.querySelector("body");
let burger = body.querySelector(".burger");
let menu = body.querySelector(".menu");
let input = body.querySelector(".subscribe__input");
burger.onclick = () => {
  burger.classList.toggle("burger-active");
  menu.classList.toggle("menu-active");
  body.classList.toggle("lock");
};

input.onfocus = () => {
  input.toggleAttribute("placeholder");
};
