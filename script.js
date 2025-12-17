document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that we want to animate
    const animatedElements = document.querySelectorAll('.hero-content, .about-card, .skill-card, .contact-box');

    // Add the initial fade-in class
    animatedElements.forEach(el => el.classList.add('fade-in'));

    // Intersection Observer to trigger animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once successfully animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px"
    });

    animatedElements.forEach(el => observer.observe(el));
});
