// animations.js

function animateElements(selector, stagger = 200) { // For non-scroll animations if needed
    const elements = document.querySelectorAll(selector);
    let delay = 0;

    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'scale(0.95)'; // Initial scale
        element.style.transformOrigin = 'center'; // Scale from center
        element.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';

        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'scale(1)'; // Final scale
        }, delay);

        delay += stagger;
    });
}

function animateOnScroll(selector, stagger = 200) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.classList.add('animate-on-scroll'); // Add the animate-on-scroll class
        element.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'; // Set the transition

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('animate'); // Add the animate class
                    observer.unobserve(element); // Stop observing once animated
                }
            });
        });

        observer.observe(element);
    });
}

window.addEventListener('load', () => {


    // About Section
    animateOnScroll('.about .text');
    animateOnScroll('.about .text h2', 100);
    animateOnScroll('.about .text p', 200);
    animateOnScroll('.about .text .btn', 300);
    animateOnScroll('.about .image');

    // Services Section
    animateOnScroll('.services-section .main-image');
    animateOnScroll('.services-section .bottom-image', 100);
    animateOnScroll('.services-section .services-text');
    animateOnScroll('.services-section .services-text h2', 100);
    animateOnScroll('.services-section .services-text p', 200);
    animateOnScroll('.services-section .explore-btn', 300);

    // Center Section
    animateOnScroll('.center-section .text-section');
    animateOnScroll('.center-section .text-section h2', 100);
    animateOnScroll('.center-section .text-section p', 200);
    animateOnScroll('.center-section .text-section .explore-btn', 300);
    animateOnScroll('.center-section .image-section');

    // Eco-Solutions Section
    animateOnScroll('.eco-solutions .section-heading');
    animateOnScroll('.eco-solutions p');
    animateOnScroll('.eco-solutions .solution');
    animateOnScroll('.eco-solutions .solution img');
    animateOnScroll('.eco-solutions .solution h2', 100);
    animateOnScroll('.eco-solutions .solution p', 200);

    // Booking Section
    animateOnScroll('.get-started-section .image-container');
    animateOnScroll('.get-started-section .text-container');
    animateOnScroll('.get-started-section .text-container h2', 100);
    animateOnScroll('.get-started-section .text-container p', 200);
    animateOnScroll('.get-started-section .get-btn', 300);




    // ... Add other sections here as needed
});