// Select the menu icon and the menu itself
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Toggle the menu visibility when the icon is clicked
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

// Close the menu when a link is clicked (optional, for better UX)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    });
});