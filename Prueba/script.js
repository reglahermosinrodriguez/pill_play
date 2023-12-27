document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const clickButton = document.getElementById('clickButton');
    const gameArea = document.getElementById('gameArea');
    const clicksDisplay = document.getElementById('clicks');
    const timerDisplay = document.getElementById('timer');
  
    let clicks = 0;
    let seconds = 10;
    let timer;
  
    startButton.addEventListener('click', startGame);
    clickButton.addEventListener('click', countClick);
  
    function moveButton() {
      const screenWidth = window.innerWidth - 150; // Considera el tamaño del botón
      const screenHeight = window.innerHeight - 150; // Considera el tamaño del botón
      const randomX = Math.floor(Math.random() * screenWidth);
      const randomY = Math.floor(Math.random() * screenHeight);
  
      clickButton.style.left = `${randomX}px`;
      clickButton.style.top = `${randomY}px`;
    }
  
    function startGame() {
      startButton.style.display = 'none';
      clickButton.style.display = 'block';
      gameArea.style.display = 'block';
      clicks = 0;
      clicksDisplay.textContent = clicks;
  
      timer = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
          endGame();
        } else {
          timerDisplay.textContent = `Tiempo restante: ${seconds}s`;
          moveButton(); // Llama a la función para mover el botón en cada intervalo de tiempo
        }
      }, 1000);
    }
  
    function countClick() {
      clicks++;
      clicksDisplay.textContent = clicks;
    }
  
    function endGame() {
      clearInterval(timer);
      clickButton.style.display = 'none';
      alert(`Juego terminado. Total de clics: ${clicks}`);
      startButton.style.display = 'block';
      timerDisplay.textContent = 'Tiempo restante: 10s';
      seconds = 10;
    }
  });