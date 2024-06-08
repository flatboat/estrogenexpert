document.addEventListener('DOMContentLoaded', function() {
    // Counter initialization
    let counter = 0;
    const counterDisplay = document.getElementById('counterDisplay');

    // Event listeners for button click and keypress
    document.getElementById('mrrp').addEventListener('click', function() {
        playAnimation();
        updateCounter();
    });
    document.addEventListener('keypress', function() {
        playAnimation();
        updateCounter();
    });

    // Function to play the animation
    function playAnimation() {
        // Play the sound
        const sound = document.getElementById('sound');
        sound.currentTime = 0;
        sound.play();

        // Create the floating word
        const word = document.createElement('div');
        word.className = 'floating-word';
        word.innerText = 'mrrp :3';
        
        counterDisplay.style.animation = 'textColorChange 10s infinite'; // Apply text color transition animation

        // Set a random position
        const randomLeft = Math.random() * (window.innerWidth - 100);
        const randomBottom = Math.random() * (window.innerHeight - 100);
        word.style.left = randomLeft + 'px';
        word.style.bottom = randomBottom + 'px';

        // Append the word to the container
        document.getElementById('container').appendChild(word);

        // Remove the word after the animation is complete
        word.addEventListener('animationend', function() {
            word.remove();
        });

        // Display the counter display
        counterDisplay.style.display = 'block';
    }

    // Function to update the counter display
    function updateCounter() {
        counter++;
        counterDisplay.textContent = "such a good kitty :3 keep mrrping!!: " + counter + "xMRRRP!";
    }
});
