// sets local storage items and user display to save highscore
var highScore = localStorage.getItem("highScore");
var userInitials = localStorage.getItem("initials");
document.getElementById("highscores").innerHTML = `
<ol>
  <li>${userInitials} - ${highScore}</li>
</ol>
`;

// clears saved scores
function clearScores() {
  document.getElementById("highscores").innerHTML = "";
  localStorage.clear();
}
