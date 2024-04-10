export default function GameOver({winningPlayer, onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            { winningPlayer && <p>{winningPlayer} Victory</p>}
            { !winningPlayer && <p>It's a draw</p>}
            <p>
                <button onClick={onRestart}>Rematch?</button>
            </p>
        </div>
    )
}