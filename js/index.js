//Selectors
const hamburguerIcon = document.querySelector('.menu__mobile__hamburguer');
const menu = document.querySelector('menu');
const aboutme = document.querySelector('#about');
const contactme = document.querySelector('#contactme');
const projects = document.querySelectorAll('.project');
const inputName = document.querySelector('form').children[0];
const inputEmail = document.querySelector('form').children[1];
const inputTextarea = document.querySelector('form').children[2];
const addButtonAboutme = document.querySelector('#about__more-about-me');
const addButtonSkillSet = document.querySelector('#about__skill-set');
const penButton = document.querySelector('.portfolio__heading img');
const projectGitButtons = document.querySelectorAll('.project__header__links__git');
const projectLaunchButtons = document.querySelectorAll('.project__header__links__launch');
const projectTechnologies = document.querySelectorAll('.project__footer__techs');
const imgJoel = document.querySelector('.presentation__img');
const imgJoelMobile = document.querySelector('.presentation__img__mobile');

//Vars
let isDark = false;

//Listeners
hamburguerIcon.addEventListener('click', ()=>{
    menu.classList.toggle("menu__mobile__show");
})

//Detect Browser Theme and change Automatically
if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark = true;
    darkSwitcher(isDark);
}
//Toggle Dark Theme Manually
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    isDark = !isDark;
    darkSwitcher(isDark);
})

function darkSwitcher(isDark) {
    
    document.body.classList.toggle('dark');
    hamburguerIcon.classList.toggle('dark');    
    aboutme.classList.toggle('dark');    
    contactme.classList.toggle('dark');  
    projects.forEach(project => {
        project.classList.toggle('dark');
    })
    inputName.classList.toggle('dark');
    inputEmail.classList.toggle('dark');
    inputTextarea.classList.toggle('dark');
    addButtonAboutme.classList.toggle('dark');
    addButtonSkillSet.classList.toggle('dark');
    penButton.classList.toggle('dark');
    projectGitButtons.forEach(button => {
        button.classList.toggle('dark');
    })
    projectLaunchButtons.forEach(button => {
        button.classList.toggle('dark');
    })
    projectTechnologies.forEach(button => {
        Object.entries(button.children).forEach(([key, value]) => {
            value.classList.toggle('dark');
        });   
    })

    if (isDark) {  
        imgJoel.src = 'assets/images/joel_dark.png';  
    }else {
        imgJoel.src = 'assets/images/joel.png';
    }
    

}