document.getElementById("start").addEventListener("click", startQuiz);

var time = 60;

var score = 0;
console.log(score);
function correctAnswer() {
  score += 10;
  console.log(score);
}

function incorrectAnswer() {
  console.log(score);
  score -= 10;
  console.log(score);
}

function startQuiz() {
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>Which of these is NOT a valid JavaScript data type?</h2>
  <button onclick="correctAnswer()">1. Variable</button>
  <button onclick="incorrectAnswer()">2. String</button>
  <button onclick="incorrectAnswer()">3. Number</button>
  <button onclick="incorrectAnswer()">4. Null</button>
  </div>
  `;
  var unHide = document.getElementById("questions");
  unHide.classList.remove("hide");
}
