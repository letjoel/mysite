//Toggle Mobile Nav
const hambuergueIcon = document.querySelector('.menu__mobile__hamburguer');
const menu = document.querySelector('menu');

hambuergueIcon.addEventListener('click', ()=>{
    menu.classList.toggle("menu__mobile__show");
})

//Toggle Dark Theme
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
    hambuergueIcon.classList.toggle('dark');
})