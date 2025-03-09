/**
 * Main JavaScript for Tipsy Turtle Travels
 */

// Initialize mobile menu functionality when partials are loaded
document.addEventListener('partialLoaded', function(e) {
    const partialPath = e.detail.partialPath;
    
    // If one of the header partials was loaded, initialize the mobile menu
    if (partialPath.includes('header.html') || partialPath.includes('header-trip-details.html')) {
        initializeMobileMenu();
    }
});

// Function to initialize mobile menu toggle functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}
