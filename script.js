// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .project-card, .skill-category').forEach(el => {
    observer.observe(el);
});

// Enhanced skill cloud interactions
document.querySelectorAll('.skill-item').forEach((skill, index) => {
    // Stagger animation on load
    skill.style.animationDelay = `${index * 0.05}s`;
    skill.classList.add('fade-in');

    // Random floating animation
    const randomDelay = Math.random() * 3;
    const randomDuration = 3 + Math.random() * 2;
    skill.style.animation = `fadeIn 0.6s ease-out ${index * 0.05}s backwards, skillFloat ${randomDuration}s ease-in-out ${randomDelay}s infinite`;

    // Interactive hover effect
    skill.addEventListener('mouseenter', function() {
        // Highlight related skills
        const skillText = this.querySelector('span').textContent;
        document.querySelectorAll('.skill-item').forEach(s => {
            if (s !== this) {
                s.style.opacity = '0.4';
            }
        });
    });

    skill.addEventListener('mouseleave', function() {
        document.querySelectorAll('.skill-item').forEach(s => {
            s.style.opacity = '1';
        });
    });
});

// Add skill float animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes skillFloat {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        25% {
            transform: translateY(-10px) rotate(2deg);
        }
        75% {
            transform: translateY(-5px) rotate(-2deg);
        }
    }
`;
document.head.appendChild(style);

// Dynamic year in footer
const currentYear = new Date().getFullYear();
document.querySelectorAll('.footer p').forEach(p => {
    if (p.textContent.includes('2026')) {
        p.textContent = p.textContent.replace('2026', currentYear);
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    };
    
    // Uncomment the line below to enable typing effect
    // setTimeout(typeWriter, 500);
    
    // For now, just show the text immediately
    heroTitle.innerHTML = text;
}

// Hero stats counter animation
const animateCounter = (element, target, suffix = '') => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
};

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = document.querySelectorAll('.stat-value');
            statItems.forEach(item => {
                const text = item.textContent;
                if (text.includes('%')) {
                    animateCounter(item, parseInt(text), '%');
                } else if (text.includes('K')) {
                    animateCounter(item, parseFloat(text) * 1000, 'K+');
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Add particle effect to hero background
const createParticles = () => {
    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 217, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        heroBackground.appendChild(particle);
    }

    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
};

createParticles();

// Console message for developers
console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #0076CE;');
console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px; color: #1a1a2e;');
console.log('%chttps://github.com/priyanka-patil-tech', 'font-size: 12px; color: #0076CE;');
console.log('%c⚡ Built with passion for tech infrastructure', 'font-size: 12px; color: #00FF88;');
