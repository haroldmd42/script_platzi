
// Palabra a adivinar
const wordToGuess = "javascript";
let attemptsLeft = 3;

// Función principal que gestiona el juego
function playGame() {
  const guessInput = document.getElementById("inputGuess");
  const guessButton = document.getElementById("guessButton");
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");
  const resetButton = document.getElementById("resetButton");

  guessButton.addEventListener("click", function() {
    const guess = guessInput.value.toLowerCase();
    if (guess === wordToGuess) {
      // Adivinaste la palabra
      message.innerHTML = "¡Felicidades! ¡Has ganado!";
      message.classList.add("text-success");
      guessInput.disabled = true;
      guessButton.disabled = true;
    } else {
      attemptsLeft--;
      attemptsDisplay.textContent = attemptsLeft;
      if (attemptsLeft === 0) {
        // Se acabaron los intentos
        message.innerHTML = "Lo siento, has perdido. La palabra era: " + wordToGuess;
        message.classList.add("text-danger");
        guessInput.disabled = true;
        guessButton.disabled = true;
      } else {
        message.innerHTML = "Intenta de nuevo.";
        message.classList.remove("text-success", "text-danger");
      }
    }
  });

  resetButton.addEventListener("click", function() {
    attemptsLeft = 3;
    attemptsDisplay.textContent = attemptsLeft;
    guessInput.value = "";
    message.innerHTML = "";
    message.classList.remove("text-success", "text-danger");
    guessInput.disabled = false;
    guessButton.disabled = false;
  });
}

// Iniciar el juego cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", playGame);
