document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // --- Typewriting Animation ---
    const typingTextSpan = document.querySelector(".typing-text");
    
    if (typingTextSpan) {
        const skillsToType = [
            "WordPress Developer",
            "Frontend Developer",
            "Computer Networking Expert",
            "Freelancer"
        ];
        let skillIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentSkill = skillsToType[skillIndex];
            
            if (isDeleting) {
                // Remove character
                typingTextSpan.textContent = currentSkill.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add character
                typingTextSpan.textContent = currentSkill.substring(0, charIndex + 1);
                charIndex++;
            }

            // If word is fully typed
            if (!isDeleting && charIndex === currentSkill.length) {
                // Pause at end
                setTimeout(() => isDeleting = true, 2000);
            } 
            // If word is fully deleted
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                skillIndex = (skillIndex + 1) % skillsToType.length;
            }

            const typingSpeed = isDeleting ? 50 : 150;
            setTimeout(type, typingSpeed);
        }
        
        // Start the animation
        type();
    }
});