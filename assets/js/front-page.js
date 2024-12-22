



const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.menu-items')

menu.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('show')
})


// submenu dropdown
const dropdownBtn = document.querySelector('.menu-dropdown');
const subMenu = document.querySelector('.sub-menu');
const menuOverlay = document.querySelector('.menu-overlay');


dropdownBtn.addEventListener('click', ()=> {
    subMenu.classList.toggle('show')
    menuOverlay.classList.add('show')
})

menuOverlay.addEventListener('click', (e)=> {
    subMenu.classList.remove('show')
    e.target.classList.remove('show')

})