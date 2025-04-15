import React, { useState } from "react";
import "./GameBoard.css";
import Popup from "./Popup";
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkwin(newBoard) {
  console.log("i am in check ");
  for (let row of winningCombinations) {
    let [a, b, c] = row;
    if (
      newBoard[a] &&
      newBoard[a] === newBoard[b] &&
      newBoard[a] === newBoard[c]
    ) {
      return true;
    }
  }
  return false;
}
function GameBoard({isreset, isPausepopup, funpausepopup }) {
  let [iswin, setwining] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  let [player, setplayer] = useState("X");
  let [message, setmessage] = useState("");
  let [isnomove, setnomoves] = useState(0);
  if(isreset)setBoard(["", "", "", "", "", "", "", "", ""]);
  function handlemove(i) {
    if (board[i]) return;
    console.log(i);
    const newBoard = [...board];
    newBoard[i] = player;
    setBoard(newBoard);
    player = player == "X" ? "O" : "X";
    setplayer(player);
    if (checkwin(newBoard)) {
      setwining(true);
      setnomoves(0);
      if(isnomove%2==0)
        message=<div className="message-conetnt">
          <h1>Winner-Player 1</h1>
          <h4>GAME-OVER</h4>
        </div>;
        else
        message=<div className="message-conetnt">
        <h1>Winner-Player 2</h1>
        <h4>GAME-OVER</h4>
      </div>;
    } else {
      isnomove++;
      setnomoves(isnomove);
    }

  }
  return (
    <>
      {(iswin || isnomove === 9 || isPausepopup) && (
        <Popup
          isdrawpopup={() => setnomoves(0)}
          isPausepopup={isPausepopup}
          Popupclose={() => {
            setwining(false);
            funpausepopup();
          }}
          Popupreset={() => {
            setBoard(["", "", "", "", "", "", "", "", ""]);
            setwining(false);
            setnomoves(0);
            funpausepopup();
          }}
        />
      )}
      <div className="board">
        {board.map((value, index) => {
          return(<div
            className="cell"
            style={(value == "X") ? { color: "black" } : { color: "red" }}
            onClick={() => {
              handlemove(index);
            }}
          >
            {value}
          </div>);
        })}
      </div>
    </>
  );
}

export default GameBoard;
