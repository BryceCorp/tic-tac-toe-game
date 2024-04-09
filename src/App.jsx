import Header from "./components/Header"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
import MoveLog from "./components/MoveLog"

import { useState } from "react"

function App() {

  const [activePlayer, setActivePlayer] = useState([]);
  const [turnLog, setTurnLog] = useState('X');

  function handleSelectSquare(rowIndex, columnIndex) {
    setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X');
    setTurnLog(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{ square: {row: rowIndex, column: columnIndex}, player: currentPlayer }, ...prevTurns];
    }); 
  }

  return (
    <main>
      <Header/>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <PlayerInfo name='Kratos' symbol='X' isActive={activePlayer === 'X'}/>
            <PlayerInfo name='Master Chief' symbol='0' isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          turnLog={turnLog}
        />
      </div>
      <MoveLog/>
    </main>
  )
}

export default App
