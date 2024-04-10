export default function GameOver({winningPlayer, }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winningPlayer} Victory</p>
            <p>
                <button>Rematch?</button>
            </p>
        </div>
    )
}