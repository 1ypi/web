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
    video.style.opacity = "0"; // Fade out the video
    clickText.classList.add("clicked"); // Add class to fade out the click text

    // Remove the click event listener after it's clicked
    clickText.removeEventListener("click", handleClick);
  }

  // Add click event listener to the click text
  clickText.addEventListener("click", handleClick);
});
