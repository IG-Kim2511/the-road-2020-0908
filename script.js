// js 02 popular tours button

// const navBtn = document.querySelectorAll(".navigation-button");

// Array.from(navBtn).forEach((item) => {
//   item.onclick = () => {
//     item.parentElement.parentElement.classList.toggle("change");
//   };
// });

// js 04. put color on 'close navbar icon'

const colors = ["red", "blue", "green", "yellow", "orange"];

let i = 0;

const navLink = document.querySelectorAll(".nav-link");

Array.from(navLink).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});

// js 06 navbar icon click - navbar wrapper coming out


// const navbarIcon = document.querySelector(".navbar-icon");
// const container = document.querySelector(".container");

// navbarIcon.addEventListener("click", () => {
//   container.classList.add("change");
// });


const navBtn = document.querySelector('.navbar-button');

const navList = document.querySelector('.nav-list');

navBtn.addEventListener('click',()=>{
  navList.classList.toggle('navToggle');
});