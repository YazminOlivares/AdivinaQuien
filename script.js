let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

submitBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }

    attempts++;
    if (userGuess === randomNumber) {
        feedback.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        gameOver();
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Demasiado bajo. Intenta de nuevo.';
    } else {
        feedback.textContent = 'Demasiado alto. Intenta de nuevo.';
    }

    attemptsDisplay.textContent = `Intentos: ${attempts}`;
}

function gameOver() {
    guessInput.disabled = true;
    submitBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
}

function restartGame() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.disabled = false;
    guessInput.value = '';
    feedback.textContent = '';
    attemptsDisplay.textContent = '';
    submitBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
}
