
// js 02 popular tours button

const navBtn = document.querySelectorAll('.navigation-button');


Array.from(navBtn).forEach((item)=>{
    item.onclick =()=>{
        item.parentElement.parentElement.classList.toggle('change');
    }

}

);



// js 06 navbar icon click - navbar wrapper coming out

const openNavbar = document.querySelector('.open-navbar-icon');
const closeNavbar = document.querySelector('.close-navbar-icon');

const container = document.querySelector('.container');

openNavbar.addEventListener('click',()=>{
container.classList.add('change');
});

closeNavbar.addEventListener('click',()=>{
container.classList.add('change');
});