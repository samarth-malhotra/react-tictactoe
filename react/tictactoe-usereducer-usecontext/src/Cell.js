function Cell({ value, onClick, index }) {
  return (
    <div className="Cell" onClick={() => onClick(index)}>
      {!Number.isInteger(value) ? value : ""}
    </div>
  );
}

export default Cell;
