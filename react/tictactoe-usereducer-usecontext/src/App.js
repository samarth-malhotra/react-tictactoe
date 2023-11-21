import { Suspense, lazy } from "react";
import { GameProvider } from "./GameProvider";
// import Status from "./Status";
// import Board from "./Board";

const Board = lazy(() => import("./Board"));
const Status = lazy(() => import("./Status"));

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Suspense fallback={<span>Loading...</span>}>
          <Board />
          <Status />
        </Suspense>
      </div>
    </GameProvider>
  );
}

export default App;
