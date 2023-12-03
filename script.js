function showCalculator() {
    console.log("showCalculator function called"); // Check if the function is being called
    var loadingScreen = document.getElementById('loading-screen');
    var calculator = document.querySelector('.calculator');
    loadingScreen.classList.add('hidden');
    calculator.style.display = 'block';
    video.src = "https://cdn.discordapp.com/attachments/1122169102941814865/1122554551732543618/vecteezy_animated-flying-through-the-stars-and-blue-and-red-in-space_8079146_731.mp4";
    video.load();
    video.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("backgroundVideo");
    const clickText = document.getElementById("clickText");
    const audioPlayer = document.getElementById("audioPlayer");
    const overlay = document.getElementById("overlay");
    const title = document.querySelector("h2");
    const projectCards = document.querySelector(".project-cards");
    
    clickText.style.opacity = "1";
    clickText.style.pointerEvents = "auto";

    function handleClick() {
        video.src = "https://cdn.discordapp.com/attachments/1122169102941814865/1122597504681255013/vecteezy_animated-flying-through-the-stars-and-blue-and-red-in-space_8079146_731_1.MP4";
        video.load();
        video.play();
        audioPlayer.play();
        video.style.opacity = "1";
        clickText.style.opacity = "0";
        clickText.style.pointerEvents = "none";

        clickText.classList.add("clicked");
        overlay.classList.add("clicked");

        hackText();

        projectCards.style.display = "flex";

        clickText.removeEventListener("click", handleClick);
    }

    clickText.addEventListener("click", handleClick);

    const originalText = title.innerText;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let iteration = 0;
    let interval = null;

    function reverseLookup(obj, value) {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop) && obj[prop] === value) {
                return prop;
            }
        }
        return value;
    }
    window.onload = function() {
        setTimeout(function() {
            showCalculator();
        }, 2000);
    };

    function hackText() {
        clearInterval(interval);

        interval = setInterval(() => {
            let hackedText = "";

            for (let i = 0; i < originalText.length; i++) {
                if (i < iteration) {
                    hackedText += originalText[i];
                } else {
                    hackedText += letters[Math.floor(Math.random() * letters.length)];
                }
            }

            title.innerHTML = `<a href="https://instagram.com/yassinpfk" target="_blank" class="gradient-text">${hackedText}</a>`;

            if (iteration >= originalText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    title.innerHTML = `<a href="https://instagram.com/yassinpfk" target="_blank" class="gradient-text">${originalText}</a>`;
                }, 2000);
            }

            iteration++;
        }, 50);
    }
});
