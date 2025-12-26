// MENU SANDWICH
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// DARK MODE
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

// REVEAL ANIMATION
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
window.onload = reveal;