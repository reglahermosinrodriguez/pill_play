/* Llamar al DOM */
document.addEventListener('DOMContentLoaded', function() {
const startButton = document.querySelector('.start-button');
const clicksDisplay = document.getElementById('clicksDisplay');
const usernameInput = document.getElementById('username');
const gameArea = document.getElementById('gameArea');
const clickHereButton = document.getElementById('clickButton');

let timer; // Variable para almacenar el temporizador
let clicks = 0;

startButton.addEventListener('click', startGame);
clickHereButton.addEventListener('click', countClick);


function startGame() {
    startButton.style.display = 'none';
    clicksDisplay.style.display = 'block';
    clickHereButton.style.display = 'block';
    gameArea.style.display = 'block';
    clicks = 0;
    clicksDisplay.textContent = clicks;

    /*Iniciar el temporizador de 10 segundos*/

    timer = setInterval(() => {
        endGame();
    }, 5000);
    }

    function countClick() {
        clicks++;
        clicksDisplay.textContent = clicks; 
    }

    function endGame() {
        clearInterval(timer);
        startButton.style.display = 'block';
        clickHereButton.style.display = 'none';
        alert(`Juego terminado. Total de clics: ${clicks}`);
    }

}); 


