var highScore = localStorage.getItem("highScore");
console.log(`High after submit score: ${highScore}`);
var userInitials = localStorage.getItem("initials");
console.log(`Initials after submit: ${userInitials}`);
document.getElementById("highscores").innerHTML = `
<ol>
  <li>${userInitials} - ${highScore}</li>
</ol>
`;

function clearScores() {
  document.getElementById("highscores").innerHTML = "";
  localStorage.clear();
}
