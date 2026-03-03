/* Typing Effect */
const typingEffect = (() => {
    const text = "delfi";  
    const typedText = document.getElementById("typed-text");
    const cursor = document.querySelector(".cursor");
    let index = 0;

    const type = () => {
        if (index < text.length) {
            typedText.textContent += text[index];
            index++;
            setTimeout(type, 200); // typing speed
        } else {
            cursor.classList.add("blink-after"); // keep cursor blinking
        }
    };

    const start = (delay = 350) => {
        setTimeout(type, delay);
    };

    return { start };
})();

/* Smooth Scrolling */
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}

/* Reveal on scroll */
const ScrollReveal = (() => {
    const defaultOptions = { threshold: 0.1 }; // trigger when 10% visible

    const revealElements = (selector, stagger = 0) => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, stagger * idx);
                    obs.unobserve(entry.target); // animate once
                }
            });
        }, defaultOptions);

        elements.forEach(el => observer.observe(el));
    };

    return { revealElements };
})();

/* INIT */
window.addEventListener("DOMContentLoaded", () => {
    typingEffect.start(350); 

    // Reveal sections on scroll
    ScrollReveal.revealElements('.reveal');         
    ScrollReveal.revealElements('.project-card.reveal', 150);
});