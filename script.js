// js 02 popular tours button

const navBtn = document.querySelectorAll(".navigation-button");

Array.from(navBtn).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// js 04. put color on 'close navbar icon'

const colors = ["red", "blue", "green", "yellow", "orange"];

let i = 0;

const navLink = document.querySelectorAll(".nav-link");

Array.from(navLink).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});

// js 06 navbar icon click - navbar wrapper coming out

// const openNavbar = document.querySelector('.open-navbar-icon');
// const closeNavbar = document.querySelector('.close-navbar-icon');

const navbarIcon = document.querySelector(".navbar-icon");
const container = document.querySelector(".container");

navbarIcon.addEventListener("click", () => {
  container.classList.add("change");
});

// closeNavbar.addEventListener('click',()=>{
// container.classList.add('change');
// });
