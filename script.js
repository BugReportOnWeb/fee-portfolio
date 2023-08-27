// Nav bar/menu stuff
const nav = document.getElementById('nav');
const navButton = document.getElementById('nav-button');
const navLinks = document.querySelectorAll('.nav-link');
const hero = document.querySelector('.hero');
const sections = document.querySelectorAll('section');

const navToggle = () => {
    sections.forEach(section => section.classList.toggle('section-opacity'));
    nav.classList.toggle('hide-nav');
    navButton.classList.toggle('cross');
}

navButton.addEventListener('click', navToggle);

navLinks.forEach(navLink => {
    navLink.addEventListener('click', navToggle);
})

// Theme toggle stuff
const themeButtons = document.querySelectorAll('#theme-button');
const links = document.querySelectorAll('a');
const burgerBars = document.querySelectorAll('#nav-button > *');
const header = document.querySelector('header');
const heroImage = document.querySelector('.hero-wrapper img');

themeButtons.forEach(themeButton => {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        header.classList.toggle('dark-theme-header');
        heroImage.classList.toggle('dark-theme-image');
        
        links.forEach(link => link.classList.toggle('dark-theme-link'));
        burgerBars.forEach(bar => bar.classList.toggle('dark-theme-burger-bar'));

        if (document.body.classList.contains('dark-theme')) {
            themeButton.innerHTML = '&#9789;';
            themeButton.style.fontSize = '1.5rem'
        } else {
            themeButton.innerHTML = '&#9788;';
            themeButton.style.fontSize = '2rem'
        }
    })
})


