function showSubmit() {
  const elements = document.getElementById("form");
  const value = elements["score"].value;

  if (value === "") {
    // Trigger animation when no score selected
    const noScoreImputed = document.getElementById("no-score-imputed");
    noScoreImputed.style.display = "flex";
    noScoreImputed.style.animation = "none";
    noScoreImputed.offsetHeight;
    noScoreImputed.style.animation = null;
  } else {
    // Display the thank you card
    const receivedScoreText = `You selected ${value} out of 5`;
    document.getElementById("received-score").innerHTML = receivedScoreText;
    document.getElementById("rating").style.display = "none";
    document.getElementById("thank-you").style.display = "flex";
  }
}




// Light/dark mode
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const media = window.matchMedia("(prefers-color-scheme: light)");

  function getSaved() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    // Icon shows the theme you will switch to
    toggle.textContent = theme === "light" ? "🌙" : "☀️";
    toggle.setAttribute("aria-pressed", String(theme === "light"));
  }

  applyTheme(getSaved() || (media.matches ? "light" : "dark"));

  toggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });

  // Follow system changes unless the user chose a theme manually
  media.addEventListener("change", function (e) {
    if (!getSaved()) applyTheme(e.matches ? "light" : "dark");
  });
})();
