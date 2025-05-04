import Player from "./components/Player"

function App() {
return (
  <main>
    <div id="game-container">
      <ol id="players">
        {/* these two Players are isolated instances. Clicking edit in one, will not change the state in the other */}
        <Player
          name="Player 1"
          symbol="X" />
        <Player
          name="Player 2"
          symbol="O"/>
      </ol>
    </div>
  </main>
)
}

export default App
