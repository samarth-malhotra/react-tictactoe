const board = document.querySelector(".board");
const status = document.querySelector(".status");

const state = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let turn = "player1";
const playerMarkers = {
  player1: "O",
  player2: "X",
};

const togglePlayer = () => {
  turn = turn === "player1" ? "player2" : "player1";
};
let isRunning = true;

const isGameWon = () => {
  if (
    (state[0] === state[1] && state[1] === state[2]) ||
    (state[3] === state[4] && state[4] === state[5]) ||
    (state[6] === state[7] && state[7] === state[8]) ||
    (state[0] === state[3] && state[3] === state[6]) ||
    (state[1] === state[4] && state[4] === state[7]) ||
    (state[2] === state[5] && state[5] === state[8]) ||
    (state[0] === state[4] && state[4] === state[8]) ||
    (state[6] === state[4] && state[4] === state[2])
  ) {
    return true;
  } else {
    return false;
  }
};

const isOver = () => {
  return !state.find((e) => Number.isInteger(e));
};

board.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.textContent || !isRunning) {
    alert("Invalid move");
    return;
  }
  e.target.textContent = playerMarkers[turn];
  state[e.target.id] = playerMarkers[turn];
  if (isGameWon()) {
    status.textContent = `${turn} won the game`;
    isRunning = false;
    return;
  }
  togglePlayer();
  if (isOver()) {
    status.textContent = `Game over`;
    isRunning = false;
    return;
  }
});
