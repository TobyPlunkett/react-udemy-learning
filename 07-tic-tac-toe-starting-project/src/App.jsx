import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState("X"); 
//both player component and gameboard compononent need access to state (which player's turn it is)
//this is the closest 'ancestor' that has access to both these components
//we then pass the state via props

  function handleSelectSquare(){
    setActivePlayer(currentActivePlayer => currentActivePlayer === "X" ? "O" : "X");
  }

  console.log(activePlayer); 

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
  </main>
)
}

export default App
