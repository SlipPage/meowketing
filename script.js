document.addEventListener("DOMContentLoaded", function () {
  // Load navbar
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});

// Load local fallback CSS
function loadLocalCSS() {
  const fallbackCss = document.createElement("link");
  fallbackCss.rel = "stylesheet";
  fallbackCss.href = "lib/bootstrap/bootstrap.min.css";
  document.head.appendChild(fallbackCss);
  console.warn("CDN Bootstrap CSS failed. Loaded local CSS.");
}

// Load local fallback JS
function loadLocalJS() {
  const fallbackJs = document.createElement("script");
  fallbackJs.src = "lib/bootstrap/bootstrap.bundle.min.js";
  document.body.appendChild(fallbackJs);
  console.warn("CDN Bootstrap JS failed. Loaded local JS.");
}