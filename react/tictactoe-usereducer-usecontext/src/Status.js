import { useGame } from "./GameProvider";
import { memo } from "react";

function Status() {
  const { status } = useGame();
  return <div className="Status">{status}</div>;
}

export default memo(Status);
