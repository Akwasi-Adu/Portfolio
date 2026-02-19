/**
 * Modern Sections JavaScript
 * Handles back-to-top button and smooth animations
 */

(function () {
    'use strict';

    // ========== BACK TO TOP BUTTON ==========

    const backToTopButton = document.querySelector('.back-to-top');

    function toggleBackToTop() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Throttle scroll event
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                toggleBackToTop();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Scroll to top on click
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========== INITIALIZE ON LOAD ==========

    window.addEventListener('DOMContentLoaded', () => {
        // Set initial back-to-top state
        toggleBackToTop();

        console.log('✨ Modern Sections initialized');
    });

})();
