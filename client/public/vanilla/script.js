// Navigation Logic
function navigateTo(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Handle Background Change - Register page uses static image
    const bgVideo = document.querySelector('.bg-video');
    if (pageId === 'register') {
        bgVideo.style.display = 'none';
    } else {
        bgVideo.style.display = 'block';
    }

    // Update Nav Active State
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === pageId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('open');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
}

// Leaf Generation Logic
function createLeaves() {
    const container = document.getElementById('leaf-container');
    const leafCount = 15;

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // Random positioning properties
        const left = Math.random() * 100 + '%';
        const delay = Math.random() * 10 + 's';
        const duration = (15 + Math.random() * 10) + 's';
        
        leaf.style.left = left;
        leaf.style.animation = `falling-leaf ${duration} linear infinite`;
        leaf.style.animationDelay = delay;
        
        container.appendChild(leaf);
    }
}

// Countdown Timer Logic
function updateCountdown() {
    // Target date: February 1, 2025
    const targetDate = new Date(2025, 1, 1, 0, 0, 0).getTime();
    
    function calculate() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    calculate();
    setInterval(calculate, 1000);
}

// Form Handling
function handleRegister(event) {
    event.preventDefault();
    
    // Get button and show loading state
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'INITIATING...';
    btn.style.opacity = '0.7';
    
    // Simulate API call
    setTimeout(() => {
        alert("WELCOME TO THE JUNGLE!\n\nYour registration is complete. The game begins soon. See you at AADHAR '14!");
        event.target.reset();
        btn.innerText = originalText;
        btn.style.opacity = '1';
    }, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createLeaves();
    updateCountdown();
});

// Close mobile menu when clicking a link
document.addEventListener('click', (e) => {
    if (e.target.matches('.mobile-menu a')) {
        document.getElementById('mobileMenu').classList.remove('open');
    }
});