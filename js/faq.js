document.addEventListener('partialLoaded', function(event) {
    const partialPath = event.detail.partialPath;

    // Check if the loaded partial is trip-faq.html
    if (partialPath === 'partials/trip-faq.html') {
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                console.log('FAQ question clicked!'); // Debug log
                const answer = this.nextElementSibling;
                const icon = this.querySelector('svg');

                // Toggle answer visibility
                answer.classList.toggle('hidden');

                // Toggle icon (plus/minus)
                if (answer.classList.contains('hidden')) {
                    icon.innerHTML = '<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>';
                } else {
                    icon.innerHTML = '<path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"></path>';
                }
            });
        });
    }
}); 
