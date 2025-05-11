const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard( ) {
    return (
        <ol id="game-board">
            {initalGameBoard.map((row, key) => <li key={key}> 
                <ol>{row.map((playerSymbol, playerSymbolIndex)=> <button>{playerSymbol}</button>)}</ol>
            </li>)}
        </ol>
    );
}