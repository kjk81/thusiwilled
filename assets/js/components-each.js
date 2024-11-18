// Using jQuery to load navigation bar and footer from /assets/components
    $.get("/assets/components/nav-bar.html", function(data) {
        $("#nav-temp").replaceWith(data);
    });
  
    $.get("/assets/components/footer.html", function(data) {
        $("#footer-temp").replaceWith(data);
    });