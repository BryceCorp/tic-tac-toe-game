import { useState } from "react";

export default function PlayerInfo({name, symbol, isActive, onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleIsEditing() {
      setIsEditing(editing => !editing);
      if(isEditing) {
        onChangeName(symbol, playerName);
      }
  }

  function handleChangeName(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        <span className="player-name">

        {isEditing ? 
          (<input required  value={playerName} onChange={handleChangeName}/>): 
          (playerName)}
          
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? ('Save') : ('Edit')}</button>
    </li>
  );
}
