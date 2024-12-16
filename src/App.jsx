import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/navbar";
import GameBoard from "./component/GameBoard";
function App() {
  let [isPausepopup, setpopup] = useState(false);
  return (
    <>
      <Navbar
        showpopup={() =>
          setpopup(true)}
      />
      <div className="App-mainContainer">
        <div className="Game-Board-Container">
          <GameBoard
            isPausepopup={isPausepopup}
            funpausepopup={() => {
              setpopup(false);
            }}
          />
        </div>
        <div className="Game-Board-status"></div>
      </div>
    </>
  );
}

export default App;
