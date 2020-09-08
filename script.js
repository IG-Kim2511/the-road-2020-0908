

// js 6 navbar icon click - navbar wrapper coming out

const openNavbar = document.querySelector('.open-navbar-icon');
const closeNavbar = document.querySelector('.close-navbar-icon');

const container = document.querySelector('.container');

openNavbar.addEventListener('click',()=>{
container.classList.add('change');
});

closeNavbar.addEventListener('click',()=>{
container.classList.add('change');
});