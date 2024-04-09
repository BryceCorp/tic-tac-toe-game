import Header from "./components/Header"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
import MoveLog from "./components/MoveLog"

import { useState } from "react"

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [turnLog, setTurnLog] =  useState([]);

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
          turnLog={turnLog}
        />
      </div>
      <MoveLog turnLog={turnLog}/>
    </main>
  )
}

export default App
