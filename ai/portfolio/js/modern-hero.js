/**
 * Modern Hero Section JavaScript
 * Handles navigation, scroll effects, and animations
 */

(function() {
  'use strict';

  // ========== HEADER SCROLL EFFECT ==========
  
  const header = document.querySelector('.modern-header');
  let lastScrollY = window.scrollY;
  
  function handleHeaderScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  }
  
  // Throttle scroll event for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleHeaderScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ========== MOBILE MENU TOGGLE ==========
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = menuToggle.classList.contains('active') ? 'hidden' : '';
  }
  
  function closeMenu() {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
  
  // Close menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Don't close if it's an external link
      if (link.getAttribute('href').startsWith('#')) {
        closeMenu();
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // ========== SMOOTH SCROLL ==========
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== ACTIVE NAV LINK ON SCROLL ==========
  
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavOnScroll() {
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        highlightNavOnScroll();
      });
    }
  });

  // ========== SCROLL INDICATOR ==========
  
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const heroHeight = document.querySelector('.modern-hero').offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
      });
    });
    
    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200 && scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    });
  }

  // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);
  
  // Observe elements with animation classes
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });

  // ========== PERFORMANCE: REDUCE MOTION ==========
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable all animations
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
  }

  // ========== KEYBOARD NAVIGATION ACCESSIBILITY ==========
  
  // Trap focus in mobile menu when open
  const focusableElements = navMenu.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  navMenu.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
    
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  });

  // ========== INITIALIZE ON LOAD ==========
  
  window.addEventListener('DOMContentLoaded', () => {
    // Set initial header state
    handleHeaderScroll();
    
    // Set initial active nav link
    highlightNavOnScroll();
    
    console.log('✨ Modern Hero initialized');
  });

})();
