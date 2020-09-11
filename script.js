// js 02 popular tours button

// (1)
// const naviBtn = document.querySelectorAll(".navigation-button");

// Array.from(naviBtn).forEach((item) => {
//   item.onclick = () => {
//     item.parentElement.parentElement.classList.toggle("change");
//   };
// });

// (2)
// const naviBtn = document.querySelectorAll(".navigation-button");

// naviBtn.addEventListener("click", ()=>{
//   this.parentElement.parentElement.classList.toggle(change);
// });

// js 04. put color on 'close navbar icon'

const colors = ["red", "blue", "green", "yellow", "orange"];

let i = 0;

const navLink = document.querySelectorAll(".nav-link");

Array.from(navLink).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});

// js 06 navbar icon click - navbar wrapper coming out

const navBtn = document.querySelector(".navbar-button");

const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("navToggle");
});
