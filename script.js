// Nav bar/menu stuff
const nav = document.getElementById('nav');
const navButton = document.getElementById('nav-button');
const navLinks = document.querySelectorAll('.nav-link');
const hero = document.querySelector('.hero');
const sections = document.querySelectorAll('section');
const footer = document.getElementById('footer');

const navToggle = () => {
    if (window.innerWidth < 520) {
        nav.classList.toggle('hide-nav');
        navButton.classList.toggle('cross');
        sections.forEach(section => section.classList.toggle('section-opacity'));
        footer.classList.toggle('section-opacity');
    }
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
const personalEmail = document.querySelector('.personal-email');
const contactLinksWrapper = document.querySelector('.contact-links-wrapper');
const resumeWrapperText = document.querySelector('.resume-wrapper-text');

themeButtons.forEach(themeButton => {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        header.classList.toggle('dark-theme-header');
        heroImage.classList.toggle('dark-theme-image');
        personalEmail.classList.toggle('dark-theme-email');
        contactLinksWrapper.classList.toggle('dark-theme-contact-links-wrapper');
        form.classList.toggle('dark-theme-form');
        resumeWrapperText.classList.toggle('dark-theme-resume-wrapper-text');

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

// Contact form stuff
const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const data = { 
        name: name.value,
        email: email.value,
        message: message.value 
    };

    // TODO: Send mail
    console.log(data);

    name.value = '';
    email.value = '';
    message.value = '';
})
