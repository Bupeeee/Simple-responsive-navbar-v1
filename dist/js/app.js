const navToggle = document.getElementById('nav_toggle');
const navLinks = document.getElementById('nav_links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');

})