// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.3)';
    }
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Here you would typically handle the form submission
    // For now, we'll just show an alert
    alert('Thank you for your interest! We will contact you shortly.');
    event.target.reset();
    return false;
}

// Add animation on scroll
const benefits = document.querySelectorAll('.benefit');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

benefits.forEach(benefit => {
    benefit.style.opacity = 0;
    benefit.style.transform = 'translateY(20px)';
    benefit.style.transition = 'all 0.6s ease-out';
    observer.observe(benefit);
});