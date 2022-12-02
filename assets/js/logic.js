document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
  document.body.innerHTML = `
  <div class="scores"><a href="highscores.html">View Highscores</a></div>

  <div class="timer">Time: <span id="time">0</span></div>

  <div class="wrapper">
  <h2>Which of these is NOT a valid JavaScript data type?</h2>
  <button onclick="correct()">1. Variable</button>
  <button onclick="incorrect()">2. String</button>
  <button onclick="incorrect()">3. Number</button>
  <button onclick="incorrect()">4. Null</button>
  </div>
  `;
}
