document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById('game-container');
    const startButton = document.getElementById('start-button');
    const endMessage = document.getElementById('end-message');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    let flickerInterval;
    let flickerSpeed = 1000; 

    function startFlickering() {
        flickerInterval = setInterval(() => {
            if (gameContainer.style.backgroundColor === 'black') {
                gameContainer.style.backgroundColor = 'white';
            } else {
                gameContainer.style.backgroundColor = 'black';
            }
        }, flickerSpeed);
    }

    function increaseFlickerSpeed() {
        if (flickerSpeed > 100) {
            flickerSpeed -= 100; 
            clearInterval(flickerInterval);
            startFlickering();
        } else {
            clearInterval(flickerInterval);
            endMessage.style.display = 'flex';
            gameContainer.style.backgroundColor = 'black';
        }
    }

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        startFlickering();
        setInterval(increaseFlickerSpeed, 5000);
    });

    yesButton.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });

    noButton.addEventListener('click', () => {
        alert('Welp! Goodbye');
    });
});
