document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("backgroundVideo");
  const clickText = document.getElementById("clickText");
  const audioPlayer = document.getElementById("audioPlayer");
  const overlay = document.getElementById("overlay");
  const title = document.querySelector("h2");

  // Play the video on page load
  video.play();

  // Show the click text
  clickText.style.opacity = "1";
  clickText.style.pointerEvents = "auto";

  // Handle click event
  function handleClick() {
    audioPlayer.play(); // Play the audio
    clickText.style.opacity = "0";
    clickText.style.pointerEvents = "none";

    // Set the new video source
    video.src = "https://cdn.discordapp.com/attachments/1122169102941814865/1122597504681255013/vecteezy_animated-flying-through-the-stars-and-blue-and-red-in-space_8079146_731_1.MP4"; // Replace "URL_DEL_NUEVO_VIDEO" with the URL of the new video

    video.load(); // Load the new video
    video.play(); // Play the new video

    clickText.classList.add("clicked"); // Add class to fade out the click text
    overlay.classList.add("clicked"); // Add class to show the hidden elements

    // Start the hacked text animation
    hackText();

    // Remove the click event listener after it's clicked
    clickText.removeEventListener("click", handleClick);
  }

  // Add click event listener to the click text
  clickText.addEventListener("click", handleClick);

  // Hacked text animation
  const originalText = title.innerText;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let iteration = 0;
  let interval = null;

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

      title.innerHTML = `<a href="https://feds.lol/1ypi" target="_blank" class="gradient-text">${hackedText}</a>`;

      if (iteration >= originalText.length) {
        clearInterval(interval);
        setTimeout(() => {
          title.innerHTML = `<a href="https://feds.lol/1ypi" target="_blank" class="gradient-text">${originalText}</a>`;
        }, 2000); // Delay before showing the original text
      }

      iteration++;
    }, 50);
  }
});
