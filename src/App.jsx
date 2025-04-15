import "./App.css";
import React, { useState } from "react";
import GameBoard from "./component/GameBoard";
function App() {
  let [isPausepopup, setpopup] = useState(false);
  let [isreset, setreset] = useState(false);
  return (
    <>
      <div className="App-mainContainer">
        <div className="Game-Board-Container">
        <div className="Game-Board-status">
          {/* <div><img src="./component/pngwing.com.png" alt="logo" /></div> */}
          <div className="Name" >Tic Tac Toe</div>
          <div className="navitem" 
          onClick={()=>{
            setreset(true);
            setTimeout(()=>{
              setreset(false);

            },2000)
          }}><i className='fa-solid fa-rotate-right'></i></div>
        <div className="navitem" onClick={()=>{setpopup(true)}}>
          <i class="fa-solid fa-pause"></i>
        </div>
        </div>
          <GameBoard
            isreset={isreset}
            isPausepopup={isPausepopup}
            funpausepopup={() => {
              setpopup(false);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
