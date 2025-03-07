/**
 * Partials Loader for Tipsy Turtle Travels
 * This script dynamically loads HTML partials into the page
 * 
 * This version uses XMLHttpRequest instead of fetch for better compatibility
 * with the file:// protocol when opening HTML files directly in a browser.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load all partials
    loadPartials();
    
    // Function to load all partials
    function loadPartials() {
        // Find all elements with data-partial attribute
        const partialElements = document.querySelectorAll('[data-partial]');
        
        // Load each partial
        partialElements.forEach(element => {
            const partialPath = element.getAttribute('data-partial');
            loadPartial(element, partialPath);
        });
    }
    
    // Function to load a single partial using XMLHttpRequest
    function loadPartial(element, partialPath) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', partialPath, true);
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                // Success!
                const html = xhr.responseText;
                element.innerHTML = html;
                
                // Execute any scripts in the partial
                const scripts = element.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    
                    // Copy all attributes
                    Array.from(script.attributes).forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    
                    // Copy the content
                    newScript.textContent = script.textContent;
                    
                    // Replace the old script with the new one
                    script.parentNode.replaceChild(newScript, script);
                });
                
                // Dispatch an event to notify that the partial has been loaded
                const event = new CustomEvent('partialLoaded', {
                    detail: { element, partialPath }
                });
                document.dispatchEvent(event);
            } else {
                // We reached our target server, but it returned an error
                console.error('Error loading partial:', xhr.statusText);
                element.innerHTML = `<div class="error">Error loading ${partialPath}</div>`;
            }
        };
        
        xhr.onerror = function() {
            // There was a connection error of some sort
            console.error('Error loading partial: Network error');
            element.innerHTML = `<div class="error">Error loading ${partialPath}</div>`;
        };
        
        xhr.send();
    }
});
