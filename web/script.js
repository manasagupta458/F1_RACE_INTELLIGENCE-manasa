// Formula 1 Race Intelligence Dashboard
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('nav a[href^="#"]');
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
    // Add a small hover effect to project feature cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-5px)";
            this.style.transition = "transform 0.3s ease";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });
    });
    // Automatically display the current year in the footer
    const footer = document.querySelector("footer");
    if (footer) {
        const year = document.createElement("p");
        year.textContent = "© " + new Date().getFullYear()
            + " Formula 1 Race Intelligence Dashboard";
        footer.appendChild(year);
    }
    // Log successful initialization
    console.log("Formula 1 Dashboard JavaScript loaded successfully.");
});
