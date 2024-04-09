
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turnLog}) {
  // const [gameBoardStatus, setGameBoardStatus] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, columnIndex) {
  //   setGameBoardStatus((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   })
  //   onSelectSquare();
  // }

  

  return (
    <ol id="game-board">
      {gameBoardStatus.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* column will represent polayer symbol */}
            {row.map((column, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={onSelectSquare}>
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
