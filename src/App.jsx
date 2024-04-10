import Header from "./components/Header"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
import MoveLog from "./components/MoveLog"
import GameOver from "./components/GameOver"
import  { WINNING_CONDITIONS } from "./data/winning-conditions.js"
import  { INITIAL_GAME_BOARD } from "./data/initial-board.js"

import { useState } from "react"

const initialGameBoard = INITIAL_GAME_BOARD;

const basePlayer1Name = 'Naruto';
const basePlayer2Name = 'Luffy';

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [turnLog, setTurnLog] =  useState([]);
  const [players, setPlayers] = useState({
    X: [basePlayer1Name],
    O: [basePlayer2Name]
  });

  let gameBoard = [...initialGameBoard.map(array => [...array])];

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
      winningPlayer = players[firstSymbolCoordinate];
    }
  }

  const drawCondition = turnLog.length === 9 && !winningPlayer;

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

  function handlePlayerNameChange(symbol, updatedName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: updatedName
      };
    });
  }

  function resetGame() {
    setActivePlayer('X')
    setTurnLog([])
  }

  return (
    <main>
      <Header/>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <PlayerInfo 
              name={basePlayer1Name} 
              symbol='X' 
              isActive={activePlayer === 'X'}
              onChangeName={handlePlayerNameChange}
              />
            <PlayerInfo 
              name={basePlayer2Name} 
              symbol='O' 
              isActive={activePlayer === 'O'}
              onChangeName={handlePlayerNameChange}
            />
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          baseBoard={gameBoard}
        />
      {(winningPlayer || drawCondition) && 
        <GameOver 
          winningPlayer={winningPlayer}
          onRestart={resetGame}

        />}
        
      <MoveLog turnLog={turnLog}/>
      </div>
      {console.log(winningPlayer, 'winner is')}
    </main>
  )
}

export default App
