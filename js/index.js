//Selectors
const hambuergueIcon = document.querySelector('.menu__mobile__hamburguer');
const menu = document.querySelector('menu');
const aboutme = document.querySelector('#about');
const contactme = document.querySelector('#contactme');
const projects = document.querySelectorAll('.project');
const inputName = document.querySelector('form').children[0];
const inputEmail = document.querySelector('form').children[1];
const inputTextarea = document.querySelector('form').children[2];

//Listeners
hambuergueIcon.addEventListener('click', ()=>{
    menu.classList.toggle("menu__mobile__show");
})

//Detect Browser Theme and change Automatically
if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle('dark');
    hambuergueIcon.classList.toggle('dark');    
    aboutme.classList.toggle('dark');    
    contactme.classList.toggle('dark');  
    projects.forEach(project => {
        project.classList.toggle('dark');
    })
    inputName.classList.toggle('dark');
    inputEmail.classList.toggle('dark');
    inputTextarea.classList.toggle('dark');
    
    
}
//Toggle Dark Theme Manually
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
    hambuergueIcon.classList.toggle('dark');
    aboutme.classList.toggle('dark'); 
    contactme.classList.toggle('dark'); 
    projects.forEach(project => {
        project.classList.toggle('dark');
    })
    inputName.classList.toggle('dark');  
    inputEmail.classList.toggle('dark');
    inputTextarea.classList.toggle('dark'); 
})
