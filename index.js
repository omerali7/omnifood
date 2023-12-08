'use strict';

const menuBtn = document.querySelector('.mobile-nav-btn');
let header = document.querySelector('.main-header');

menuBtn.addEventListener('click', function () {
    header.classList.toggle('nav-open');
})

const hero = document.querySelector('.hero');

const observer = new IntersectionObserver(function (entries) {
    const entry = entries[0];

    if (entry.isIntersecting === false) {
        document.body.classList.add('sticky-nav');
    }

    if (entry.isIntersecting === true) {
        document.body.classList.remove('sticky-nav');
    }
}, {
    // In the view port
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
observer.observe(hero);