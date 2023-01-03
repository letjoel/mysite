//Toggle Dark Theme
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
})