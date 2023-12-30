// Almacenar la información del usuario (nombre y puntaje) en localStorage
function guardarInformacionUsuario(nombreUsuario, puntaje) {
    // Obtener datos existentes (si los hay) del localStorage
    const datosExistente = JSON.parse(localStorage.getItem('datosJugadores')) || {};

    // Si ya existe un registro para este usuario, actualizar el puntaje
    if (datosExistente[nombreUsuario]) {
        /*datosExistente[nombreUsuario] = puntaje;*/
        datosExistente[nombreUsuario].historial.push(puntaje);
    } else {
        // Si no existe un registro para este usuario, crear uno nuevo
        /*datosExistente[nombreUsuario] = puntaje;*/
        datosExistente[nombreUsuario] = { historial: [puntaje] };
    }

    // Guardar los datos actualizados en el localStorage
    localStorage.setItem('datosJugadores', JSON.stringify(datosExistente));
}


// Recuperar la información de todos los usuarios almacenados
function obtenerInformacionUsuarios() {
    const datosExistente = JSON.parse(localStorage.getItem('datosJugadores')) || {};
    return datosExistente;
}






// Llamar al DOM
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.start-button');
    const clicksDisplay = document.getElementById('clicksDisplay');
    const usernameInput = document.getElementById('username');
    const gameArea = document.getElementById('gameArea');
    const clickHereButton = document.getElementById('clickButton');
    const boxScore = document.getElementById('boxScore');
    const finalScreen = document.getElementById('finalScreen');
    const playAgainButton = document.getElementById('playAgain');
    const boxName = document.getElementById('boxName');


    
    // VARIABLE PARA ALMACENAR EL TEMPORIZADOR
    
    let timer; 
    let clicks = 0;
    
    startButton.addEventListener('click', startGame);
    clickHereButton.addEventListener('click', () => {
        countClick();
        changeButtonSize();
      });
    playAgainButton.addEventListener('click', playAgain);
    usernameInput.addEventListener('input', function() {
        const nombreUsuario = usernameInput.value.trim();
        localStorage.setItem('username', nombreUsuario);
    });
    


    // CAMBIO DE TAMAÑO DEL BOTON CLICK HERE

    function changeButtonSize() {
        const currentSize = parseInt(window.getComputedStyle(clickButton).fontSize);
        const newSize = currentSize - 2;
        clickButton.style.fontSize = `${newSize}px`;
      }
  
        
    // VALIDACIÓN USERNAME
    
    const usernameValidation = function() {
        const usernameValue = usernameInput.value.trim();
        if (!usernameValue) {
            alert("Introduce tu username");
            return false;
      }
        return true;
    }

    // MOVIMIENT0 DEL BOTON CLICKHERE

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
        boxScore.style.display = 'block';
        clicks = 0;
        clicksDisplay.textContent = clicks;
        
        
    
        let buttonMovement = setInterval(moveButton, 1800);
        setTimeout(() => {
            clearInterval(buttonMovement);
            endGame();
        }, 10000);
    
        
    
        
    // INICIAR TEMPORIZADOR 10 SEGUNDOS
    
        timer = setInterval(() => {
            endGame();
    
        }, 3000);    
    }
    
    
    // CONTADOR DE CLICKS
    
        function countClick() {
            clicks++;
            clicksDisplay.textContent = clicks;

        }
    
// Antes de llamar a actualizarPuntuacionUsuarioEnBoxScore
const datosLocalStorage = JSON.parse(localStorage.getItem('datosJugadores')) || {};
console.log('Contenido de localStorage:', datosLocalStorage);


    // FIN DEL JUEGO Y YOUR SCORE
    
        function endGame() {
            clearInterval(timer);
            startButton.style.display = 'block';
            clickHereButton.style.display = 'none';
            boxScore.style.display = 'block';
            finalScreen.style.display = 'block';
            playAgainButton.style.display = 'block';
            boxName.style.display = 'none';
            /*alert(`Juego terminado. Total de clics: ${clicks}`);*/

// Obtener el nombre del usuario actual y su puntaje
const nombreUsuario = usernameInput.value.trim();
/*const nombreUsuario = localStorage.getItem('username');*/
const recordClicks = document.getElementById('recordClicks');
const puntajeUsuario = clicks; // El puntaje del usuario actual
recordClicks.textContent = `Your score is ${puntajeUsuario}`;

// Almacenar o actualizar el puntaje del usuario en localStorage
guardarInformacionUsuario(nombreUsuario, puntajeUsuario);



/*actualizarPuntuacionUsuarioEnBoxScore(nombreUsuario, puntajeUsuario);(ESTA SÍ FUNCIONABA)*/
actualizarPuntuacionUsuarioEnBoxScore();
}




            const recordClicks = document.getElementById('recordClicks');
            recordClicks.textContent = `Your score is ${clicks}`;
        
       
    
    

// PUNTUACIÓN BOX SCORE FUNCIONA Y GUARDADO TODO EN EL LOCALSTORAGE Y EN LA BOX SCORE APARECE SOLO EL USUARIO Y SU HISTORIAL
function actualizarPuntuacionUsuarioEnBoxScore() {
    const playerResult = document.getElementById('playerResult');

    // Obtener datos existentes del localStorage
    const datosExistente = JSON.parse(localStorage.getItem('datosJugadores')) || {};

    // Crear un array de registros de usuarios
    const registrosUsuarios = [];

    // Iterar sobre los usuarios en los datos existentes
    for (const nombreUsuario in datosExistente) {
        if (datosExistente.hasOwnProperty(nombreUsuario)) {
            // Verificar si hay historial de puntuaciones para el usuario actual
            const historialPuntuaciones = datosExistente[nombreUsuario]?.historial || [];
            
            if (historialPuntuaciones.length > 0) {
                const puntajeActual = historialPuntuaciones[historialPuntuaciones.length - 1];
                // Agregar el registro del usuario al array
                registrosUsuarios.push(`${nombreUsuario}: ${historialPuntuaciones.join(', ')}`);
            }
        }
    }

    // Mostrar todos los registros de usuarios en playerResult
    playerResult.innerHTML = registrosUsuarios.join('<br>');
}












/*function actualizarPuntuacionUsuarioEnBoxScore(nombreUsuario) {
    const playerResult = document.getElementById('playerResult');

    // Obtener datos existentes del localStorage
    const datosExistente = JSON.parse(localStorage.getItem('datosJugadores')) || {};

    // Verificar si hay datos para el usuario actual
    if (datosExistente[nombreUsuario]) {
        const historialPuntuaciones = datosExistente[nombreUsuario].historial;

        // Mostrar el historial de puntuaciones
        playerResult.textContent = `${nombreUsuario}: ${historialPuntuaciones.join(', ')}`;
    } else {
        // Mostrar un mensaje si no hay datos para el usuario actual
        playerResult.textContent = `${nombreUsuario}: Sin historial de puntuaciones`;
    }
}*/
    



    // CON ESTA FUNCION: FUNCIONA USUARIO Y SU PUNTAJE
    /*function actualizarPuntuacionUsuarioEnBoxScore(nombreUsuario, puntaje) {
        const playerResult = document.getElementById('playerResult');
        playerResult.textContent = `${nombreUsuario}: ${puntaje}`;
    }*/



    



        

    // TAMAÑO ORIGINAL CLICK HERE

    function resetButton() {
        const originalSize = 2;
        clickButton.style.fontSize = `${originalSize}rem`;

    }
    
    // VOLVER AL PRINCIPIO

    function playAgain() {
        boxName.style.display = 'block';
        boxScore.style.display = 'none';
        finalScreen.style.display = 'none';
        boxScore.style.display = 'block';
        resetButton();
        
    } 

// LOCAL STORAGE


    // Almacenar el nombre de usuario en localStorage cuando comience el juego
function guardarUsuario(username) {
    localStorage.setItem('username', username);
}

// Recuperar el nombre de usuario almacenado en localStorage
function obtenerUsuario() {
    const username = localStorage.getItem('username');
    return username;
}

// Ejemplo de uso:
const nombreUsuario = 'UsuarioEjemplo';
guardarUsuario(nombreUsuario);

// Obtener el nombre de usuario almacenado y usarlo en tu juego
const usuarioActual = obtenerUsuario();
console.log(`El usuario actual es: ${usuarioActual}`);

});