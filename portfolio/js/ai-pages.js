/* ============================================
   AI PAGES — Shared scripts for sub-pages
   Header scroll, mobile menu, back-to-top
   ============================================ */
(function () {
    'use strict';

    // Header shrink on scroll
    function initHeaderScroll() {
        const header = document.querySelector('.ai-header');
        if (!header) return;
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    header.classList.toggle('scrolled', window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Mobile menu toggle
    function initMobileMenu() {
        const toggle = document.querySelector('.ai-menu-toggle');
        const navList = document.querySelector('.ai-nav-list');
        if (!toggle || !navList) return;

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            navList.classList.toggle('open');
            document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : '';
        });

        navList.querySelectorAll('.ai-nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                toggle.classList.remove('open');
                navList.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // Back to top
    function initBackToTop() {
        const btn = document.querySelector('.ai-back-to-top');
        if (!btn) return;
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    btn.classList.toggle('visible', window.scrollY > 500);
                    ticking = false;
                });
                ticking = true;
            }
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initHeaderScroll();
        initMobileMenu();
        initBackToTop();
    });
})();
