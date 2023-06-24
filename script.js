document.addEventListener("DOMContentLoaded", function() {
    var title = document.title;
    var count = 0;
    var variations = ["$", "$ b", "$ b#", "$ b#0", "$ b#00", "$ b#000", "$ b#0001", "‎ ", "$ b#0001", "‎", "$ b#0001", "‎"];
    var interval = setInterval(function() {
      document.title = variations[count % variations.length];
      count++;
    }, 500);
  
    var overlay = document.getElementById("overlay");
    overlay.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
  