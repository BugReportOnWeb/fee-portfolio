// Nav bar/menu stuff
const nav = document.getElementById('nav');
const navButton = document.getElementById('nav-button');
const navLinks = document.querySelectorAll('.nav-link');
const hero = document.querySelector('.hero');
const sections = document.querySelectorAll('section');

const navToggle = () => {
    nav.classList.toggle('hide-nav');
    navButton.classList.toggle('cross');

    // BUG: changes on full screen
    sections.forEach(section => section.classList.toggle('section-opacity'));
}

navButton.addEventListener('click', navToggle);

navLinks.forEach(navLink => {
    navLink.addEventListener('click', navToggle);
})

// Nav bar stuff but with shadows
document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 40) {
        if (document.body.classList.contains('dark-theme')) {
            header.classList.add('dark-theme-header-shadow');
            header.classList.remove('header-shadow');
        } else {
            header.classList.add('header-shadow');
            header.classList.remove('dark-theme-header-shadow');
        }
    } else {
        header.classList.remove('dark-theme-header-shadow');
        header.classList.remove('header-shadow');
    }
})

// Theme toggle stuff
const themeButtons = document.querySelectorAll('#theme-button');
const links = document.querySelectorAll('a');
const burgerBars = document.querySelectorAll('#nav-button > *');
const header = document.querySelector('header');
const heroImage = document.querySelector('.hero-wrapper img');
const separators = document.querySelectorAll('.separator');
const projectCards = document.querySelectorAll('.project-card');

themeButtons.forEach(themeButton => {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        header.classList.toggle('dark-theme-header');
        heroImage.classList.toggle('dark-theme-image');

        projectCards.forEach(projectCard => projectCard.classList.toggle('dark-theme-project-card'));
        links.forEach(link => link.classList.toggle('dark-theme-link'));
        burgerBars.forEach(bar => bar.classList.toggle('dark-theme-burger-bar'));
        separators.forEach(separator => separator.classList.toggle('dark-theme-separator'));

        if (document.body.classList.contains('dark-theme')) {
            themeButton.innerHTML = '&#9789;';
            themeButton.style.fontSize = '1.5rem'
        } else {
            themeButton.innerHTML = '&#9788;';
            themeButton.style.fontSize = '2rem'
        }
    })
})


