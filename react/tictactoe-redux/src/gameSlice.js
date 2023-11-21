import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "Game Started",
  turn: "player1",
  state: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  isGameRunning: true,
  isGameWon: false,
};

const playerMarker = {
  player1: "O",
  player2: "X",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playMove: (state, action) => {
      state.state = state.state.map((v, i) =>
        i === action.payload ? playerMarker[state.turn] : v
      );
      state.isGameWon =
        (state.state[0] === state.state[1] &&
          state.state[1] === state.state[2]) ||
        (state.state[3] === state.state[4] &&
          state.state[4] === state.state[5]) ||
        (state.state[6] === state.state[7] &&
          state.state[7] === state.state[8]) ||
        (state.state[0] === state.state[3] &&
          state.state[3] === state.state[6]) ||
        (state.state[1] === state.state[4] &&
          state.state[4] === state.state[7]) ||
        (state.state[2] === state.state[5] &&
          state.state[5] === state.state[8]) ||
        (state.state[0] === state.state[4] &&
          state.state[4] === state.state[8]) ||
        (state.state[6] === state.state[4] && state.state[4] === state.state[2])
          ? true
          : false;
      state.isGameRunning =
        state.state.find((el) => Number.isInteger(el)) > -1 && !state.isGameWon;
      state.status = state.isGameWon
        ? `${state.turn} won the game`
        : !state.isGameRunning
        ? "Game over"
        : state.status;
      state.turn = state.turn === "player1" ? "player2" : "player1";
    },
  },
});

export const { playMove } = gameSlice.actions;

export default gameSlice.reducer;
