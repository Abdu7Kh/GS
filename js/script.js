// Smooth Animations on Scroll
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Intersection Observer for Fade-In Animations
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

    // Initialize Particle.js
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80, // Number of particles
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff", // Color of particles
            },
            shape: {
                type: "circle", // Shape of particles (circle, edge, triangle, etc.)
            },
            opacity: {
                value: 0.5, // Opacity of particles
                random: false,
                anim: {
                    enable: false,
                },
            },
            size: {
                value: 3, // Size of particles
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 150, // Distance between linked particles
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2, // Speed of particles
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse", // Particles repel when hovered
                },
                onclick: {
                    enable: true,
                    mode: "push", // Add new particles on click
                },
            },
        },
        retina_detect: true,
    });

    // Initialize ScrollReveal
    ScrollReveal({
        reset: false, // Set to true if you want animations to repeat
        distance: "60px", // Distance elements move before appearing
        duration: 1000, // Duration of the animation in milliseconds
        delay: 200, // Delay before the animation starts
    });

    // Apply ScrollReveal to elements
    ScrollReveal().reveal(".fade-in", { origin: "bottom" });
    ScrollReveal().reveal(".hero-content", { origin: "top" });
    ScrollReveal().reveal(".service-card", { interval: 200 }); // Staggered reveal for service cards
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

// Progress Bar on Page Load
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    progressBar.style.width = `${scrollPercentage}%`;
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Modal Popup
const modal = document.getElementById('modal');
const openModalButton = document.querySelector('.cta-button'); // Open modal when clicking CTA button
const closeModalButton = document.querySelector('.close');

openModalButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});