function showCalculator() {
    console.log("showCalculator function called"); // Check if the function is being called
    var loadingScreen = document.getElementById('loading-screen');
    var calculator = document.querySelector('.calculator');
    loadingScreen.classList.add('hidden');
    calculator.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("backgroundVideo");
    const clickText = document.getElementById("clickText");
    const audioPlayer = document.getElementById("audioPlayer");
    const overlay = document.getElementById("overlay");
    const title = document.querySelector("h2");
    const projectCards = document.querySelector(".project-cards");

    video.src =
        "https://cdn.discordapp.com/attachments/1176791105841406014/1180856621040140328/video.mp4?ex=657ef16d&is=656c7c6d&hm=9f450b98c99650be57ac0132a892ce1924b68c41808ee03e1c84d05d69ba6402&";

    video.load();
    video.play();

    clickText.style.opacity = "1";
    clickText.style.pointerEvents = "auto";

    function handleClick() {
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

            title.innerHTML = `<a href="https://www.youtube.com/channel/UC3tDacQMJjuzfTJUInF2MFw" target="_blank" class="gradient-text">${hackedText}</a>`;

            if (iteration >= originalText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    title.innerHTML = `<a href="https://www.youtube.com/channel/UC3tDacQMJjuzfTJUInF2MFw" target="_blank" class="gradient-text">${originalText}</a>`;
                }, 2000);
            }

            iteration++;
        }, 50);
    }
});
