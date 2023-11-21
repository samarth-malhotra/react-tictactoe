import { memo } from "react";
import { useSelector } from "react-redux";

function Status() {
  const { status } = useSelector((state) => state.game);
  return <div className="Status">{status}</div>;
}

export default memo(Status);
