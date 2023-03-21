"use strict";
const dropMenuMark = document.getElementsByClassName('material-symbols-outlined')[0];
const dropMenu = document.getElementById('drop-menu');
const menuBack = document.getElementById('menu-back');
const subBlock = document.getElementById('sub-katanakaji');


dropMenuMark.addEventListener('click', () => {
    dropMenu.classList.toggle('menu-open');
    menuBack.classList.toggle('visible');
    dropMenuMark.classList.toggle('rotate');
})

const playCover = document.getElementsByClassName('cover')[0];
playCover.addEventListener('mouseover', () => {
    playCover.classList.add('visible');
})
subBlock.addEventListener('mouseleave', () => {
    playCover.classList.remove('visible');
})
dropMenuMark.get