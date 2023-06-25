    document.addEventListener("DOMContentLoaded", function() {
        var title = document.title;
        var count = 0;
        var variations = ["w", "we", "web", "webz"];
        var interval = setInterval(function() {
        document.title = variations[count % variations.length];
        count++;
        }, 500);
    });
    
