import { useReducer, createContext, useContext } from "react";

const GameContext = createContext();

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

const reducer = (state, action) => {
  switch (action.type) {
    case "playMove":
      const newState = state.state.map((v, i) =>
        i === action.payload ? playerMarker[state.turn] : v
      );
      const isGameWon =
        (newState[0] === newState[1] && newState[1] === newState[2]) ||
        (newState[3] === newState[4] && newState[4] === newState[5]) ||
        (newState[6] === newState[7] && newState[7] === newState[8]) ||
        (newState[0] === newState[3] && newState[3] === newState[6]) ||
        (newState[1] === newState[4] && newState[4] === newState[7]) ||
        (newState[2] === newState[5] && newState[5] === newState[8]) ||
        (newState[0] === newState[4] && newState[4] === newState[8]) ||
        (newState[6] === newState[4] && newState[4] === newState[2])
          ? true
          : false;
      const isGameRunning =
        newState.find((el) => Number.isInteger(el)) > -1 && !isGameWon;
      const status = isGameWon
        ? `${state.turn} won the game`
        : !isGameRunning
        ? "Game over"
        : state.status;
      return {
        ...state,
        state: newState,
        isGameWon,
        isGameRunning,
        turn: state.turn === "player1" ? "player2" : "player1",
        status,
      };
    default:
      throw new Error("invalid action type");
  }
};

const GameProvider = ({ children }) => {
  const [{ status, turn, state, isGameRunning, isGameWon }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <GameContext.Provider
      value={{
        state,
        status,
        turn,
        isGameRunning,
        isGameWon,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("GameContext used outside of GameProvider");
  return context;
};

export { GameProvider, useGame };
