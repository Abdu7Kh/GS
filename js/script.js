// Smooth Animations on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    elements.forEach(element => observer.observe(element));
});

// Dark Mode Toggle Button
const darkModeToggle = document.createElement('button');
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.innerHTML = '<span>&#9789;</span>'; // Moon icon by default

// Append the dark mode toggle button inside the mobile menu icon container
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
mobileMenuIcon.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent container

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    // Update the button icon based on the theme
    if (newTheme === 'dark') {
        darkModeToggle.innerHTML = '<span>&#9788;</span>'; // Sun icon for light mode
    } else {
        darkModeToggle.innerHTML = '<span>&#9789;</span>'; // Moon icon for dark mode
    }
});

// Hamburger Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

// Close the menu when a link is clicked (optional, for better UX)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    });
});