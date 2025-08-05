document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });

  const testCss = document.createElement("div");
  testCss.className = "d-none";
  document.body.appendChild(testCss);
  const style = window.getComputedStyle(testCss);
  if (style.display !== "none") {
    const fallbackCss = document.createElement("link");
    fallbackCss.rel = "stylesheet";
    fallbackCss.href = "lib/bootstrap/bootstrap.min.css";
    document.head.appendChild(fallbackCss);
    console.warn("CDN Bootstrap CSS failed. Loaded local CSS.");
  }
  document.body.removeChild(testCss);

  if (!window.bootstrap) {
    const fallbackJs = document.createElement("script");
    fallbackJs.src = "lib/bootstrap/bootstrap.bundle.min.js";
    document.body.appendChild(fallbackJs);
    console.warn("CDN Bootstrap JS failed. Loaded local JS.");
  }
});
