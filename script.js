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


