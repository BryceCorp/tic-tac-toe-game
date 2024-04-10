
export default function GameBoard({onSelectSquare, baseBoard}) {
  return (
    <ol id="game-board">
      {baseBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* column will represent polayer symbol */}
            {row.map((column, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSelectSquare(rowIndex, columnIndex)} disabled={column !== null}>
                  {column}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
