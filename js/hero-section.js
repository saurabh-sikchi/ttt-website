/**
 * Hero Section JavaScript for Tipsy Turtle Travels
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the typing animation when the hero section is loaded
    document.addEventListener('partialLoaded', function(e) {
        const partialPath = e.detail.partialPath;
        
        // If the hero section partial was loaded, initialize the typing animation
        if (partialPath.includes('hero-section.html')) {
            initializeTypingAnimation();
        }
    });
    
    // Initialize typing animation for the hero section
    function initializeTypingAnimation() {
        const typedElement = document.getElementById('typed-text');
        
        if (typedElement) {
            // Create a new Typed instance with proper configuration
            new Typed('#typed-text', {
                strings: [
                    'Curated quality co-travellers',
                    'Professional photo assistance for those hall-of-fame clicks',
                    'A perfect blend of luxury, party and socialisation'
                ],
                typeSpeed: 22, // Fast typing speed
                startDelay: 1000, // Initial delay before typing starts
                backSpeed: 0, // No backspacing
                fadeOut: true, // Fade out instead of backspace
                fadeOutClass: 'typed-text-fade-out',
                fadeOutDelay: 2000, // How long to keep text visible before fading
                loop: true, // Loop through the strings
                loopCount: Infinity, // Loop infinitely
                showCursor: false, // No cursor
                autoInsertCss: true, // Insert CSS for fade out animation
                smartBackspace: false // Don't use smart backspace
            });
        }
    }
});
