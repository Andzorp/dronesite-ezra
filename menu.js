const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggle the open class for the menu
    menuIcon.classList.toggle('open'); // Toggle the hamburger icon transformation
    header.classList.toggle('hide-header'); // Toggle the header visibility
});
