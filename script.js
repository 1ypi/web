document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("backgroundVideo");
    const clickText = document.getElementById("clickText");
    const audioPlayer = document.getElementById("audioPlayer");
    const overlay = document.getElementById("overlay");
    const title = document.querySelector("h2");
    const projectCards = document.querySelector(".project-cards");
    const loadingScreen = document.getElementById("loading-screen");

    video.play();

    clickText.style.opacity = "1";
    clickText.style.pointerEvents = "auto";

    function handleClick() {
        audioPlayer.play();
        
        // Only hide the "(click me)" text, not the entire h2 element
        clickText.style.opacity = "0";
        clickText.style.pointerEvents = "none";

        video.src =
            "https://cdn.discordapp.com/attachments/1122169102941814865/1122597504681255013/vecteezy_animated-flying-through-the-stars-and-blue-and-red-in-space_8079146_731_1.MP4";

        video.load();
        video.play();

        projectCards.style.display = "flex";

        clickText.removeEventListener("click", handleClick);

        // Call the hackText function when the "(click me)" text is clicked
        hackText();
    }

    clickText.addEventListener("click", handleClick);

    const originalText = title.innerText;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let iteration = 0;
    let interval = null;

    // Remove the hackText function from here
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

            title.innerHTML = `<a href="https://wanted.lol/1ypi" target="_blank" class="gradient-text">${hackedText}</a>`;

            if (iteration >= originalText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    title.innerHTML = `<a href="https://wanted.lol/1ypi" target="_blank" class="gradient-text">${originalText}</a>`;
                }, 2000);
            }

            iteration++;
        }, 50);
    }

    // Remove the loading screen after 5 seconds with a fade-out effect
    setTimeout(function () {
        loadingScreen.style.opacity = "0"; // Set opacity to 0 for fade-out effect
        setTimeout(function () {
            loadingScreen.style.display = "none"; // Hide the loading screen after fade-out
        }, 500); // Wait for the fade-out transition to complete (0.5 seconds)
    }, 5000); // Remove after 5 seconds
});
