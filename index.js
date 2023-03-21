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

const newsBox = document.getElementById('news-box');
const newsRotate = document.getElementsByClassName('news-rotate');

let count = 0;
function rotate17deg() {
    for (let i = 0; i < newsRotate.length; i++) {
        newsRotate[i].style.top = "-17px"
    }
}
function rotate34deg() {
    for (let i = 0; i < newsRotate.length; i++) {
        newsRotate[i].style.top = "-35px"
    }
}
function rotate0deg() {
    for (let i = 0; i < newsRotate.length; i++) {
        newsRotate[i].style.top = "0px"
    }
}
setInterval(() => {
    count++;
    if (count === 3) {
        rotate17deg();
    } else if (count == 6) {
        rotate34deg();
    } else if (count === 9) {
        rotate0deg();
        count = 0;
    }
}, 1000);