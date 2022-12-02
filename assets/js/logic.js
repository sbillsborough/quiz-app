document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
  document.body.innerHTML = `
  <div class="scores"><a href="highscores.html">View Highscores</a></div>

  <div class="timer">Time: <span id="time">0</span></div>

  <div class="wrapper">
  <h2>Which of these is NOT a valid JavaScript data type?</h2>
  <button>1. Variable</button>
  <button>2. String</button>
  <button>3. Number</button>
  <button>4. Null</button>
  </div>
  `;
}
