let scoreText = document.getElementById("score");

let score = 0;

let highscore = 0;

let highscoreText = document.getElementById("highscore");

scoreText.textContent = `${score}`;

let ran = generateRandom();

if (ran === 0 ) {
  while (ran != 0) {
    ran = generateRandom();
  }
}

let button = document.getElementById("button");

button.onclick = () => {
  score++;

  let audio = new Audio('clicksoundeffect.mp3');
  audio.play();

  if (ran == score) {
    if (highscore < score) {
      highscore = score - 1;
    }
    score = 0;
    highscoreText.textContent = `High Score: ${highscore}`;
    ran = generateRandom();
  }

  if (ran === 0 ) {
    while (ran != 0) {
      ran = generateRandom();
    }
  }

  scoreText.textContent = score;
}



function generateRandom() {
  let randomNum = Math.round(Math.random() * 100);

  if (randomNum > 10) {
    randomNum = Math.round(Math.random() * (randomNum/2));
  }

  if (randomNum > 20) {
    randomNum = Math.round(Math.random() * (randomNum/2));
  }

  return randomNum;
}