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
            gameContainer.style.animation = gameContainer.style.animation === 'flicker 0.5s infinite' ? 'none' : 'flicker 0.5s infinite';
        }, flickerSpeed);
    }

    function increaseFlickerSpeed() {
        if (flickerSpeed > 100) {
            flickerSpeed -= 100;
            clearInterval(flickerInterval);
            startFlickering();
        } else {
            clearInterval(flickerInterval);
            gameContainer.style.animation = 'none';
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
        window.location.href = 'https://youtu.be/xvFZjo5PgG0?si=34dzdh9kmHPBGMaS';
    });

    noButton.addEventListener('click', () => {
        alert('Welp! Goodbye');
    });
});
