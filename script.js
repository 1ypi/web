document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("backgroundVideo");
  const clickText = document.getElementById("clickText");
  const audioPlayer = document.getElementById("audioPlayer");

  // Play the video on page load
  video.play();

  // Show the click text
  clickText.style.opacity = "1";

  // Handle click event
  function handleClick() {
    audioPlayer.play(); // Play the audio

    // Set the new video source
    video.src = "https://cdn.discordapp.com/attachments/1122169102941814865/1122554551732543618/vecteezy_animated-flying-through-the-stars-and-blue-and-red-in-space_8079146_731.mp4"; // Reemplaza "URL_DEL_NUEVO_VIDEO" con la URL del nuevo video

    video.load(); // Load the new video
    video.play(); // Play the new video

    clickText.classList.add("clicked"); // Add class to fade out the click text

    // Remove the click event listener after it's clicked
    clickText.removeEventListener("click", handleClick);
  }

  // Add click event listener to the click text
  clickText.addEventListener("click", handleClick);
});
