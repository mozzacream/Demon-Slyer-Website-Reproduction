"use strict";
const dropMenuMark = document.getElementsByClassName('material-symbols-outlined')[0];
const dropMenu = document.getElementById('drop-menu');
const menuBack = document.getElementById('menu-back');
const subBlock = document.getElementById('sub-katanakaji');

const loadingDisp = document.getElementById('loading');
const imgKocho = document.getElementsByClassName('kocho')[0];

const topMenu = document.getElementById('top-menu');
const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByTagName("main")[0];

function mainHidden() {
    topMenu.style.visibility = 'hidden'
    header.style.visibility = 'hidden'
    main.style.visibility = 'hidden'
}
mainHidden();

function mainVisible() {
    topMenu.style.visibility = 'visible'
    header.style.visibility = 'visible'
    main.style.visibility = 'visible'
}

setInterval(() => {
    imgKocho.classList.add('opacity-rem');
}, 1000);

setTimeout(() => {
    loadingDisp.classList.add('load-done');
    mainVisible();
}, 3500);

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