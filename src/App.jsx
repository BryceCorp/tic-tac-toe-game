import Header from "./components/Header"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
import MoveLog from "./components/MoveLog"
import GameOver from "./components/GameOver"
import  { WINNING_CONDITIONS } from "./data/winning-conditions.js"

import { useState } from "react"

// const WINNING_CONDITIONS = [
//   { row: 0, col: 0 },
//   { row: 0, col: 1 },
//   { row: 0, col: 2 },
// ]

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [turnLog, setTurnLog] =  useState([]);

  let gameBoard = initialGameBoard;

  for (const turn of turnLog){
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }

  let winningPlayer;

  for (const winScenario of WINNING_CONDITIONS) {
    const firstSymbolCoordinate = gameBoard[winScenario[0].row][winScenario[0].column];
    const secondSymbolCoordinate = gameBoard[winScenario[1].row][winScenario[1].column];
    const thirdSymbolCoordinate = gameBoard[winScenario[2].row][winScenario[2].column];

    if(firstSymbolCoordinate && firstSymbolCoordinate === secondSymbolCoordinate && firstSymbolCoordinate === thirdSymbolCoordinate){
      winningPlayer = firstSymbolCoordinate;
    }
  }

  function handleSelectSquare(rowIndex, columnIndex) {
    setActivePlayer(currentActivePlayer => (currentActivePlayer === 'X' ? 'O' : 'X'));
    setTurnLog(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{ square: {row: rowIndex, column: columnIndex}, player: currentPlayer }, ...prevTurns,];
      return updatedTurns;
    }); 
  }

  return (
    <main>
      <Header/>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <PlayerInfo name='Kratos' symbol='X' isActive={activePlayer === 'X'}/>
            <PlayerInfo name='Naruto' symbol='O' isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          baseBoard={gameBoard}
        />
      {winningPlayer && <GameOver winningPlayer={winningPlayer}/>}
      </div>
      {console.log(winningPlayer, 'winner is')}
      <MoveLog turnLog={turnLog}/>
    </main>
  )
}

export default App
