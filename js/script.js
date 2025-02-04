// Smooth Animations on Scroll باستخدام GSAP و ScrollTrigger
document.addEventListener('DOMContentLoaded', () => {
  // تطبيق GSAP ScrollTrigger على جميع العناصر التي تحمل الصنف .fade-in
  gsap.utils.toArray('.fade-in').forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // يبدأ التأثير عندما يدخل العنصر 80% من الشاشة
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // ==================== DARK MODE TOGGLE ====================
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      darkModeToggle.innerHTML = newTheme === 'dark' ? '<span>&#9788;</span>' : '<span>&#9789;</span>';
    });
  }

  // ==================== MOBILE MENU TOGGLE ====================
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  if (menuIcon && menu) {
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle('show-menu');
    });
  }
  // إغلاق القائمة عند النقر على أي رابط
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show-menu');
    });
  });

  // ==================== PROGRESS BAR ====================
  window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    if (progressBar) progressBar.style.width = `${scrollPercentage}%`;
  });

  // ==================== BACK TO TOP BUTTON ====================
  const backToTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // تم إزالة كود Modal Popup الخاص بزر ".cta-button" 
  // بحيث عند النقر على زر "Explore Services" لن يُمنع التنقل الطبيعي إلى قسم "services".
});
