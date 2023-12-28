// Llamar al DOM
document.addEventListener('DOMContentLoaded', function() {
const startButton = document.querySelector('.start-button');
const clicksDisplay = document.getElementById('clicksDisplay');
const usernameInput = document.getElementById('username');
const gameArea = document.getElementById('gameArea');
const clickHereButton = document.getElementById('clickButton');

// VARIABLE PARA ALMACENAR EL TEMPORIZADOR

let timer; 
let clicks = 0;

startButton.addEventListener('click', startGame);
clickHereButton.addEventListener('click', countClick);

// VALIDACIÓN USERNAME

const usernameValidation = function() {
    const usernameValue = usernameInput.value.trim();
    if (!usernameValue) {
        alert("Introduce tu username");
        return false;
  }
    return true;
}

function moveButton() {
    const screenWidth = window.innerWidth -150;
    const screenHeight = window.innerHeight -150;
    const randomX = Math.floor(Math.random() * screenWidth);
    const randomY = Math.floor(Math.random() * screenHeight);

    clickButton.style.left = `${randomX}px`;
    clickButton.style.top = `${randomY}px`;

}

// INICIO DEL JUEGO

function startGame() {
    const isValidUsername = usernameValidation();
    if (!isValidUsername) {
        return;
    }
    startButton.style.display = 'none';
    clicksDisplay.style.display = 'none';
    clickHereButton.style.display = 'block';
    gameArea.style.display = 'block';
    clicks = 0;
    clicksDisplay.textContent = clicks;

    let buttonMovement = setInterval(moveButton, 1500);
    setTimeout(() => {
        clearInterval(buttonMovement);
        endGame();
    }, 10000);

    

    
// INICIAR TEMPORIZADOR 10 SEGUNDOS

    timer = setInterval(() => {
        endGame();

    }, 10000);
    }


// CONTADOR DE CLICKS

    function countClick() {
        clicks++;
        clicksDisplay.textContent = clicks;
        
    }

// FIN DEL JUEGO

    function endGame() {
        clearInterval(timer);
        startButton.style.display = 'block';
        clickHereButton.style.display = 'none';
        alert(`Juego terminado. Total de clics: ${clicks}`);
    }

}); 


