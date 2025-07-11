// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe elements for scroll reveal
    const revealElements = document.querySelectorAll('.section-title, .about-content, .skills-category, .project-card, .experience-item, .education-item, .contact-info');
    
    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill items hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Contact items hover effect
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add some interactive elements
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Certificate items animation
    const certificateItems = document.querySelectorAll('.certificate-item');
    certificateItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in-up');
    });

    // Experience items staggered animation
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('fade-in-up');
    });

    // Global mouse interaction effects
    const mouseCursor = document.querySelector('.mouse-cursor');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    if (mouseCursor) {
        // Custom mouse cursor for entire site
        document.addEventListener('mousemove', function(e) {
            mouseCursor.style.left = e.clientX + 'px';
            mouseCursor.style.top = e.clientY + 'px';
        });
        
        // Mouse hover effects
        document.addEventListener('mouseenter', function() {
            mouseCursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', function() {
            mouseCursor.style.opacity = '0';
        });
        
        // Global mouse interaction for all sections
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX;
            const y = e.clientY;
            
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const moveX = (x - centerX) / centerX * 15;
            const moveY = (y - centerY) / centerY * 15;
            
            // Move floating elements based on mouse position
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.3;
                const currentTransform = element.style.transform;
                const baseTransform = currentTransform.includes('translateY') ? 
                    currentTransform.replace(/translate\([^)]*\)/, '') : currentTransform;
                element.style.transform = `${baseTransform} translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
            
            // Move section contents slightly
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionCenterX = rect.left + rect.width / 2;
                const sectionCenterY = rect.top + rect.height / 2;
                
                const distanceX = (x - sectionCenterX) / window.innerWidth * 10;
                const distanceY = (y - sectionCenterY) / window.innerHeight * 10;
                
                const sectionContent = section.querySelector('.hero-content, .about-content, .skills-content, .projects-grid, .experience-content, .education-content, .contact-content');
                if (sectionContent) {
                    sectionContent.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
                }
            });
        });
        
        // Mouse cursor hover effects for all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, img, .project-card, .skill-item, .experience-item, .contact-item, .certificate-item');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                mouseCursor.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', function() {
                mouseCursor.classList.remove('hover');
            });
        });
        
        // Parallax effect for floating elements on scroll
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                const currentTransform = element.style.transform;
                const translateMatch = currentTransform.match(/translate\(([^)]*)\)/);
                
                if (translateMatch) {
                    const translateValues = translateMatch[1].split(',');
                    const translateX = translateValues[0].trim();
                    const translateY = translateValues[1] ? translateValues[1].trim() : '0px';
                    element.style.transform = `translate(${translateX}, ${translateY}) translateY(${rate * speed}px)`;
                } else {
                    element.style.transform = `translateY(${rate * speed}px)`;
                }
            });
        });
    }

    // Initialize tooltips or any additional features
    console.log('Portfolio website loaded successfully!');
}); 