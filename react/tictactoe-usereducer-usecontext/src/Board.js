import Cell from "./Cell";
import { useGame } from "./GameProvider";

function Board() {
  const { state, isGameRunning, isGameWon, dispatch } = useGame();
  const handleClick = (el) => {
    if (!isGameRunning || isGameWon || !Number.isInteger(state[el])) {
      return;
    }
    dispatch({ type: "playMove", payload: el });
  };
  return (
    <div className="Board">
      {state.map((el, index) => (
        <Cell value={el} key={index} onClick={handleClick} index={index} />
      ))}
    </div>
  );
}

export default Board;
