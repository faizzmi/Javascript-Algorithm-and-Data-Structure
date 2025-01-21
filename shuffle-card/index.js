const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function rotateCards() {
    let angle = 0;

    cards.forEach((card, index) => {
        if (index < currentIndex) {
            card.classList.add('away');
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            card.classList.remove('away');
            card.style.transform = `rotate(${angle}deg)`;
            angle -= 10;
            card.style.zIndex = cards.length - index;
        }
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    rotateCards();
}, 1500);
