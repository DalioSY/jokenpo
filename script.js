const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const draw = document.querySelector("#draw");
const ia = document.querySelector(".ia");

let humanScoreNumber = 0;
let machineScoreNumber = 0;
let drawScoreNumber = 0;

const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS,
  ];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  // console.log("humano:" + human + " Maquina:" + machine);
  if (human === machine) {
    drawScoreNumber++;
    draw.innerHTML = drawScoreNumber;
    result.innerHTML = "EMPATE";
    result.style.color = "#666666";
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "VENCEDOR";
    result.style.color = "rgb(3, 88, 46)";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "PERDEDOR";
    result.style.color = "rgb(196, 7, 1)";
  }

  if (machine === GAME_OPTIONS.ROCK) {
    ia.innerHTML = "&#x1f44a;";
  }
  if (machine === GAME_OPTIONS.PAPER) {
    ia.innerHTML = "&#x1f590;";
  }
  if (machine === GAME_OPTIONS.SCISSORS) {
    ia.innerHTML = "&#x270c;";
  }
};
