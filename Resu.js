const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.color = "#FFD54F";
    });

    card.addEventListener("mouseleave", () => {
        card.style.color = "#fff";
    });
});