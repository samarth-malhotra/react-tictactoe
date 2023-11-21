import { useDispatch, useSelector } from "react-redux";
import Cell from "./Cell";
import { playMove } from "./gameSlice";

function Board() {
  const { state, isGameRunning, isGameWon } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();
  const handleClick = (el) => {
    if (!isGameRunning || isGameWon || !Number.isInteger(state[el])) {
      return;
    }
    dispatch(playMove(el));
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
