document.addEventListener("DOMContentLoaded", function() {
    var title = document.title;
    var count = 0;
    var variations = ["1", "1y", "1yp", "1ypi"];
    var interval = setInterval(function() {
      document.title = variations[count % variations.length];
      count++;
    }, 500);
  
    var overlay = document.getElementById("overlay");
    overlay.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
  
