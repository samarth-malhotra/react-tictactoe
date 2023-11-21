import { Suspense, lazy } from "react";
// import Status from "./Status";
// import Board from "./Board";

const Board = lazy(() => import("./Board"));
const Status = lazy(() => import("./Status"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<span>Loading...</span>}>
        <Board />
        <Status />
      </Suspense>
    </div>
  );
}

export default App;
