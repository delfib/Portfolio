const text = "delfi";  
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text[index];
        index++;
        setTimeout(type, 200);
    } else {
        //keep cursor blinking after typing finishes
        cursor.classList.add("blink-after");
    }
}

// Start typing when page loads
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        type();
    }, 350); 
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}