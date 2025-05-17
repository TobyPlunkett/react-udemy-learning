// import { useState } from "react";

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({selectSquareCallback}) {
    
    //instead we will use the turns state. 
    // const [gameBoard, setGameBoard] = useState(initalGameBoard); 

    // function handleSelectSquare(row, column){
    //     setGameBoard((currentGameBoard) => {
    //        //create deep copy
    //         const updatedGameBoard = [... currentGameBoard.map((innerArray)=>[...innerArray])];
    //         updatedGameBoard[row][column] = activePlayerSymbol;
    //         return updatedGameBoard; 
    //     }); 
    //     selectSquareCallback(); 
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}> 
                    <ol>
                        {row.map((playerSymbol, playerSymbolIndex) => (
                            <li key={playerSymbolIndex}>
                                {/* <button onClick={() => handleSelectSquare(rowIndex, playerSymbolIndex)}>{playerSymbol}</button> */}
                                <button onClick={selectSquareCallback}>{playerSymbol}</button>
                            </li>    
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}