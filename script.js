document.addEventListener("DOMContentLoaded", function () {
  // Load navbar from navbar.html
  fetch("./navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
  });

  // Check if Bootstrap CSS loaded, fallback if not
  const testCss = document.createElement("div");
  testCss.className = "d-none";
  document.body.appendChild(testCss);
  const style = window.getComputedStyle(testCss);
  if (style.display !== "none") {
    const fallbackCss = document.createElement("link");
    fallbackCss.rel = "stylesheet";
    fallbackCss.href = "./lib/bootstrap/bootstrap.min.css"; // adjust path if needed
    document.head.appendChild(fallbackCss);
    console.warn("CDN Bootstrap CSS failed. Loaded local CSS.");
  }
  document.body.removeChild(testCss);

  // Check if Bootstrap JS loaded, fallback if not
  if (!window.bootstrap) {
    const fallbackJs = document.createElement("script");
    fallbackJs.src = "./lib/bootstrap/bootstrap.bundle.min.js"; // adjust path if needed
    document.body.appendChild(fallbackJs);
    console.warn("CDN Bootstrap JS failed. Loaded local JS.");
  }

  function redirectWithFade(url) {
    // Remove fade-in if present
    document.body.classList.remove('fade-in');
    // Add fade-out
    document.body.classList.add('fade-out');
    
    setTimeout(() => {
      window.location.href = url;
    },400);
  }

  // Redirect immediately on click
  const landingImage = document.getElementById('landing-image');
  if (landingImage) {
    landingImage.addEventListener('click', () => {
      redirectWithFade('./page/home.html');
    });
  }

});
