import React, { useState } from "react";
import "./GameBoard.css";
import Popup from "./Popup";
import PausePopup from "./PausePopup";
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
function GameBoard({isPausepopup,funpausepopup}) {
  let [iswin, setwining] = useState(false);
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  let [player, setplayer] = useState("X");
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
    }
  }
  return (
    <>
      {iswin && (
        <Popup
          Popupclose={() => setwining(false)}
          Popupreset={() => {
            setBoard(["", "", "", "", "", "", "", "", ""]);
            setwining(false);
          }}
        />
      )}

      {isPausepopup && (
        <PausePopup
          Popupclose={funpausepopup}
          Popupreset={() => {
            setBoard(["", "", "", "", "", "", "", "", ""]);
            funpausepopup();
          }}
        />
      )}


      <div className="board">
        <div
          className="cell"
          onClick={() => {
            handlemove(0);
          }}
        >
          {board[0]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(1);
          }}
        >
          {board[1]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(2);
          }}
        >
          {board[2]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(3);
          }}
        >
          {board[3]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(4);
          }}
        >
          {board[4]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(5);
          }}
        >
          {board[5]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(6);
          }}
        >
          {board[6]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(7);
          }}
        >
          {board[7]}
        </div>
        <div
          className="cell"
          onClick={() => {
            handlemove(8);
          }}
        >
          {board[8]}
        </div>
      </div>
    </>
  );
}

export default GameBoard;
