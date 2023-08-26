const nav = document.getElementById('nav');
const navButton = document.getElementById('nav-button');
const navLinks = document.querySelectorAll('.nav-link');

const navToggle = () => {
    nav.classList.toggle('hide-nav');
    navButton.classList.toggle('cross');
}

navButton.addEventListener('click', navToggle);

navLinks.forEach(navLink => {
    navLink.addEventListener('click', navToggle);
})
