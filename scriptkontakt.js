// Menu mobilne
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

    const textarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const maxLength = textarea.getAttribute('maxlength');

    textarea.addEventListener('input', () => {
        charCount.textContent = `${textarea.value.length} z ${maxLength}`;
    });

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Zamknij menu po kliknięciu na link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animacja przy przewijaniu
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.animation = 'fadeInUp 0.5s ease forwards';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);