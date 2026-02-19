/* ============================================
   AI HOMEPAGE — Interactive Scripts
   Particle canvas, typewriter, scroll reveal,
   mobile menu, counter animation, contact form
   ============================================ */

(function () {
    'use strict';

    // ========== PARTICLE NETWORK CANVAS ==========
    class ParticleNetwork {
        constructor(canvasId) {
            this.canvas = document.getElementById(canvasId);
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.mouse = { x: null, y: null, radius: 150 };
            this.animId = null;
            this.init();
        }

        init() {
            this.resize();
            this.createParticles();
            this.animate();

            window.addEventListener('resize', () => {
                this.resize();
                this.createParticles();
            });

            this.canvas.addEventListener('mousemove', (e) => {
                const rect = this.canvas.getBoundingClientRect();
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;
            });

            this.canvas.addEventListener('mouseleave', () => {
                this.mouse.x = null;
                this.mouse.y = null;
            });
        }

        resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.canvas.width = this.canvas.offsetWidth * dpr;
            this.canvas.height = this.canvas.offsetHeight * dpr;
            this.ctx.scale(dpr, dpr);
        }

        createParticles() {
            const w = this.canvas.offsetWidth;
            const h = this.canvas.offsetHeight;
            // Limit particles on mobile for performance
            const density = window.innerWidth < 768 ? 25000 : 12000;
            const count = Math.min(Math.floor((w * h) / density), 80);
            this.particles = [];

            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        }

        animate() {
            const w = this.canvas.offsetWidth;
            const h = this.canvas.offsetHeight;
            this.ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < this.particles.length; i++) {
                const p = this.particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                // Draw particle
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
                this.ctx.fill();

                // Draw connections
                for (let j = i + 1; j < this.particles.length; j++) {
                    const q = this.particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 120;

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.15;
                        this.ctx.beginPath();
                        this.ctx.moveTo(p.x, p.y);
                        this.ctx.lineTo(q.x, q.y);
                        this.ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.stroke();
                    }
                }

                // Mouse interaction - brighten nearby particles
                if (this.mouse.x !== null) {
                    const mx = p.x - this.mouse.x;
                    const my = p.y - this.mouse.y;
                    const md = Math.sqrt(mx * mx + my * my);
                    if (md < this.mouse.radius) {
                        const intensity = 1 - md / this.mouse.radius;
                        this.ctx.beginPath();
                        this.ctx.arc(p.x, p.y, p.radius + intensity * 2, 0, Math.PI * 2);
                        this.ctx.fillStyle = `rgba(6, 182, 212, ${intensity * 0.5})`;
                        this.ctx.fill();
                    }
                }
            }

            this.animId = requestAnimationFrame(() => this.animate());
        }

        destroy() {
            if (this.animId) cancelAnimationFrame(this.animId);
        }
    }

    // ========== TYPEWRITER EFFECT ==========
    class Typewriter {
        constructor(elementId, phrases, speed = 80, pause = 2200) {
            this.el = document.getElementById(elementId);
            if (!this.el) return;
            this.phrases = phrases;
            this.speed = speed;
            this.pause = pause;
            this.phraseIndex = 0;
            this.charIndex = 0;
            this.isDeleting = false;
            this.tick();
        }

        tick() {
            const current = this.phrases[this.phraseIndex];
            if (this.isDeleting) {
                this.charIndex--;
            } else {
                this.charIndex++;
            }

            this.el.textContent = current.substring(0, this.charIndex);

            let delay = this.isDeleting ? this.speed / 2 : this.speed;

            if (!this.isDeleting && this.charIndex === current.length) {
                delay = this.pause;
                this.isDeleting = true;
            } else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
                delay = 400;
            }

            setTimeout(() => this.tick(), delay);
        }
    }

    // ========== SCROLL REVEAL ==========
    function initScrollReveal() {
        const elements = document.querySelectorAll('.ai-reveal');
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach((el) => observer.observe(el));
    }

    // ========== COUNTER ANIMATION ==========
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    const suffix = el.getAttribute('data-suffix') || '';
                    let current = 0;
                    const step = Math.max(1, Math.floor(target / 40));
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(interval);
                        }
                        el.textContent = current + suffix;
                    }, 30);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach((el) => observer.observe(el));
    }

    // ========== HEADER SCROLL ==========
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

    // ========== MOBILE MENU ==========
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

    // ========== SMOOTH SCROLL ==========
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    const offset = 80;
                    const pos = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: pos, behavior: 'smooth' });
                }
            });
        });
    }

    // ========== BACK TO TOP ==========
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

    // ========== ACTIVE NAV ==========
    function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.ai-nav-link[href^="#"]');
        if (!sections.length || !navLinks.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach((link) => {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

        sections.forEach((s) => observer.observe(s));
    }

    // ========== EMAILJS CONTACT FORM ==========
    function initContactForm() {
        const form = document.getElementById('ai-contact-form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const spinner = document.getElementById('ai-spinner');
            const success = document.getElementById('ai-success');
            const submitBtn = form.querySelector('button[type="submit"]');

            if (spinner) spinner.style.display = 'block';
            if (success) success.style.display = 'none';
            if (submitBtn) submitBtn.disabled = true;

            // EmailJS send
            if (typeof emailjs !== 'undefined') {
                emailjs.sendForm('service_2r2c7we', 'template_q2p8hhb', form)
                    .then(function () {
                        if (spinner) spinner.style.display = 'none';
                        if (success) {
                            success.style.display = 'block';
                            success.textContent = '✓ Message sent successfully!';
                        }
                        form.reset();
                        if (submitBtn) submitBtn.disabled = false;

                        setTimeout(() => {
                            if (success) success.style.display = 'none';
                        }, 5000);
                    }, function (error) {
                        if (spinner) spinner.style.display = 'none';
                        if (success) {
                            success.style.display = 'block';
                            success.textContent = 'Failed to send. Please email me directly.';
                            success.style.color = '#f43f5e';
                        }
                        if (submitBtn) submitBtn.disabled = false;
                        console.error('EmailJS error:', error);
                    });
            } else {
                if (spinner) spinner.style.display = 'none';
                alert('Email service not loaded. Please email me directly.');
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }

    // ========== INIT ALL ==========
    document.addEventListener('DOMContentLoaded', function () {
        // Particle canvas
        new ParticleNetwork('particle-canvas');

        // Typewriter
        new Typewriter('ai-typewriter', [
            'AI Solutions Architect.',
            'Enterprise Builder.',
            'Vibe Coder.',
            'ERP Specialist.',
            '10x Shipping Speed.'
        ]);

        // Scroll animations
        initScrollReveal();
        animateCounters();

        // Navigation
        initHeaderScroll();
        initMobileMenu();
        initSmoothScroll();
        initActiveNav();

        // Back to top
        initBackToTop();

        // Contact form
        initContactForm();
    });

})();
