import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [activePlayer, setActivePlayer] = useState("X"); 
//both player component and gameboard compononent need access to state (which player's turn it is)
//this is the closest 'ancestor' that has access to both these components
//we then pass the state via props
  
  const [gameTurns, setGameTurns] = useState("");
//as we already store the state data we need inside gameboard, it doesn't make sense to store almost the same state AGAIN.
//makes more sense to lift the state from GameBoard to the log. 

  function handleSelectSquare(rowIndex, columnIndex){

    setActivePlayer(currentActivePlayer => currentActivePlayer === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      
      let currentPlayer =  "X";         //this gets our current player based on the most recent info, instead of activePlayer 
      if(prevTurns.length > 0 && prevTurns[0].player === "X"){
        currentPlayer = "O";
      }else{
        currentPlayer = "X";
      }

      //Add most recent turn and deep copy old turns
      const updatedTurns = [ 
        { square: {row : rowIndex, col : columnIndex}, player: currentPlayer } // Using 'player : activePlayer' does seem like an option, but is actually merging states
        , ...prevTurns];                                                        // We don't have a guarantee that activePlayer is the most recent value. 0

        return updatedTurns; 
    }); 
  }

  return (
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        {/* these two Players are isolated instances. Clicking edit in one, will not change the state in the other */}
        <Player
          name="Player 1"
          symbol="X"
          isActive={activePlayer === "X"} />
        <Player
          name="Player 2"
          symbol="O"
          isActive={activePlayer === "O"} />
      </ol>

      <GameBoard selectSquareCallback={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
    <Log handleLog = {setGameTurns}/>
  </main>
)
}

export default App
