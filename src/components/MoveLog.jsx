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
// [
//     {
//         "square": {
//             "row": 1,
//             "column": 2
//         },
//         "player": 
//     },
//     {
//         "square": {
//             "row": 1,
//             "column": 1
//         },
//         "player": "X"
//     },
//     {
//         "square": {
//             "row": 0,
//             "column": 2
//         },
//         "player": "O"
//     },
//     {
//         "square": {
//             "row": 0,
//             "column": 1
//         },
//         "player": "X"
//     }
//     "X12"
//     "O11"
//     "X02"
//     "O01"
// ]