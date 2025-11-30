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
        alert("WELCOME TO THE JUNGLE!\n\nYour registration is complete. The game begins soon.");
        event.target.reset();
        btn.innerText = originalText;
        btn.style.opacity = '1';
    }, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createLeaves();
});
