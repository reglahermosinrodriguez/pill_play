// Obtener elementos del DOM
const startButton = document.querySelector('.start-button');
const userScore = document.querySelector('.box-score');

let gameStarted = false;
let score = 0;

// Función para manejar el clic en el botón de inicio
startButton.addEventListener('click', () => {
  if (!gameStarted) {
    gameStarted = true;
    score = 0;
    userScore.textContent = 'User Score: 0';

    // Comienza el juego durante 10 segundos
    setTimeout(() => {
      gameStarted = false;
      alert(`Game over! Your score: ${score}`);

      // Almacena el resultado en localStorage si es mejor que el anterior
      const prevScore = localStorage.getItem('userScore');
      if (!prevScore || score > parseInt(prevScore)) {
        localStorage.setItem('userScore', score);
        userScore.textContent = `User Score: ${score} (New High Score!)`;
      }
    }, 10000); // 10 segundos

    // Escucha los clics en el cuadro
    userScore.addEventListener('click', () => {
      if (gameStarted) {
        score++;
        userScore.textContent = `User Score: ${score}`;
      }
    });
  }
});
