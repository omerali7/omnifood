'use strict';

const menuBtn = document.querySelector('.mobile-nav-btn');
let header = document.querySelector('.main-header');

menuBtn.addEventListener('click', function () {
    header.classList.toggle('nav-open');
})