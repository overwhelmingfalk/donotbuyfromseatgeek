// JavaScript for donotbuyfromseatgeek.com
// Interactive elements and enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Evidence button click handlers
    const evidenceButtons = document.querySelectorAll('.evidence-btn');
    
    evidenceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a full implementation, this would open a modal or load the full email
            // For now, we'll show an alert with the concept
            alert('Full email view would be implemented here.\nIn production, this would load the complete email content or show a modal with the full email text.');
        });
    });
    
    // Add hover effect for evidence cards (enhancing the CSS effect)
    const evidenceItems = document.querySelectorAll('.evidence-item');
    
    evidenceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scrolling for anchor links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Console log for debugging (remove in production)
    console.log('Do Not Buy From SeatGeek site loaded successfully');
});

// Optional: Add a simple animation for the hero overlay
window.addEventListener('load', function() {
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroOverlay) {
        heroOverlay.style.opacity = '0.15';
    }
});