document.addEventListener("DOMContentLoaded", function () {
  // Detect path depth and adjust relative path
  const pathLevel = window.location.pathname.split('/').length - 2;
  let basePath = '';
  for (let i = 0; i < pathLevel; i++) basePath += '../';

  // Load navbar from navbar.html
  fetch(basePath + "navbar.html")
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
    fallbackCss.href = basePath + "lib/bootstrap/bootstrap.min.css";
    document.head.appendChild(fallbackCss);
    console.warn("CDN Bootstrap CSS failed. Loaded local CSS.");
  }
  document.body.removeChild(testCss);

  // Check if Bootstrap JS loaded, fallback if not
  if (!window.bootstrap) {
    const fallbackJs = document.createElement("script");
    fallbackJs.src = basePath + "lib/bootstrap/bootstrap.bundle.min.js";
    document.body.appendChild(fallbackJs);
    console.warn("CDN Bootstrap JS failed. Loaded local JS.");
  }

  function redirectWithFade(url) {
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = url;
    }, 400);
  }

  // Redirect on click
  const landingImage = document.getElementById('landing-image');
  if (landingImage) {
    landingImage.addEventListener('click', () => {
      redirectWithFade(basePath + "page/home.html");
    });
  }
});
