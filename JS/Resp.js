burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav_list');
right_nav = document.querySelector('.right_nav');



burger.addEventListener('click', ()=>{
    right_nav.classList.toggle('v-class');
    nav_list.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

