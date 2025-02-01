// Language Switcher
document.getElementById('language-switcher').addEventListener('change', function() {
    const lang = this.value;
    // سيتم إضافة منطق الترجمة لاحقًا
    alert('Selected Language: ' + lang);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image Loading Check
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
            console.error('Failed to load image:', img.src);
            img.style.border = '2px solid red';
        }
    });
});