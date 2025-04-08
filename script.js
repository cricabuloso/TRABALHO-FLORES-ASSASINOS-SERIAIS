const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carrossel = document.querySelector('.carrossel');

let index = 0; // Índice do card atual
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function updateCarrossel() {
    // Calcula o deslocamento com base no índice atual
    const offset = -index * 220; // 220 é a largura dos cards (incluindo margens)
    carrossel.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
    // Avançar para o próximo card
    if (index < totalCards - 1) {
        index++;
    } else {
        index = 0; // Voltar ao primeiro card
    }
    updateCarrossel();
});

prevBtn.addEventListener('click', () => {
    // Voltar para o card anterior
    if (index > 0) {
        index--;
    } else {
        index = totalCards - 1; // Voltar ao último card
    }
    updateCarrossel();
});