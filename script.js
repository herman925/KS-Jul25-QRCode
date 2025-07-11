// DOM Elements
const heroSection = document.getElementById('hero');
const mainContent = document.getElementById('main-content');
const ctaButton = document.querySelector('.cta-button');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.classList.add('loading');
    
    // Initialize collapsed sections
    initializeSections();
});

// Show main content and hide hero
function showMainContent() {
    heroSection.style.display = 'none';
    mainContent.classList.remove('hidden');
    
    // Smooth scroll to top of main content
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100);
}

// Scroll to top (logo click)
function scrollToTop() {
    // If on main content, scroll to top
    if (!mainContent.classList.contains('hidden')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // If on hero, scroll to hero section
        heroSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Toggle collapsible sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = section.previousElementSibling;
    
    if (section.classList.contains('active')) {
        // Close section
        section.classList.remove('active');
        header.classList.remove('active');
    } else {
        // Close all other sections first (optional - for accordion behavior)
        // closeAllSections();
        
        // Open this section
        section.classList.add('active');
        header.classList.add('active');
    }
}

// Initialize sections (all closed by default)
function initializeSections() {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        header.classList.remove('active');
    });
}

// Close all sections (for accordion behavior)
function closeAllSections() {
    const sections = document.querySelectorAll('.section-content');
    const headers = document.querySelectorAll('.section-header');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    headers.forEach(header => {
        header.classList.remove('active');
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle external links (add analytics or tracking if needed)
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add any analytics tracking here
        console.log('External link clicked:', this.href);
        
        // Ensure link opens in new tab
        if (!this.target) {
            this.target = '_blank';
            this.rel = 'noopener noreferrer';
        }
    });
});

// Handle QR code image errors
document.querySelectorAll('.qr-code').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        
        // Create placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'qr-placeholder';
        placeholder.innerHTML = `
            <div style="width: 120px; height: 120px; background-color: #f0f0f0; 
                        border: 2px dashed #ccc; display: flex; align-items: center; 
                        justify-content: center; border-radius: 8px; color: #666;">
                <span>QR Code<br>載入中...</span>
            </div>
        `;
        
        this.parentNode.insertBefore(placeholder, this);
    });
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Space or Enter to activate buttons
    if (e.target.classList.contains('section-header') && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        e.target.click();
    }
    
    // ESC to close all sections
    if (e.key === 'Escape') {
        closeAllSections();
    }
});

// Add accessibility attributes
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA attributes to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach((header, index) => {
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `section${index + 1}`);
    });
    
    // Add ARIA attributes to section content
    const sectionContents = document.querySelectorAll('.section-content');
    sectionContents.forEach((content, index) => {
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', `section${index + 1}-header`);
    });
});

// Update ARIA attributes when sections toggle
const originalToggleSection = toggleSection;
toggleSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    const header = section.previousElementSibling;
    
    originalToggleSection(sectionId);
    
    // Update ARIA attributes
    const isActive = section.classList.contains('active');
    header.setAttribute('aria-expanded', isActive);
};

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
