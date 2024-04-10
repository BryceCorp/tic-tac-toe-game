export default function MoveLog({turnLog}) {
    const logEntry = turnLog.map((turn, index) => {
        const { row, column } = turn.square;
        const player = turn.player;
        return <li key={index}>{player} has selected {row}{column}</li>
    })

    return (
        <ol id="log">
            {console.log('turnLog in moveLog', turnLog)}
            {logEntry}
        </ol>
    )
}