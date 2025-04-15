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
  
  // Function to check if there's a winner
  function checkWinner(board) {
	for (let [a, b, c] of winningCombinations) {
	  if (board[a] && board[a] === board[b] && board[a] === board[c]) {
		return board[a]; // Return the winner ("X" or "O")
	  }
	}
	return board.includes("") ? null : "draw"; // If the board is full, it's a draw
  }
  
  // Minimax function to simulate all possible moves and choose the best one
  function minimax(board, isMaximizing, player, opponent) {
	const winner = checkWinner(board);
	if (winner === player) return 1;       // If current player wins, return score 1
	if (winner === opponent) return -1;    // If opponent wins, return score -1
	if (winner === "draw") return 0;       // If it's a draw, return score 0
  
	// Maximize the player's score (maximize the current player)
	if (isMaximizing) {
	  let bestScore = -Infinity;
	  for (let i = 0; i < board.length; i++) {
		if (!board[i]) {
		  board[i] = player;                     // Simulate the move
		  const score = minimax(board, false, player, opponent); // Recursively call minimax
		  board[i] = "";                         // Undo the move
		  bestScore = Math.max(score, bestScore); // Choose the maximum score
		}
	  }
	  return bestScore;
	}
	// Minimize the opponent's score
	else {
	  let bestScore = Infinity;
	  for (let i = 0; i < board.length; i++) {
		if (!board[i]) {
		  board[i] = opponent;                   // Simulate the opponent's move
		  const score = minimax(board, true, player, opponent); // Recursively call minimax
		  board[i] = "";                         // Undo the move
		  bestScore = Math.min(score, bestScore); // Choose the minimum score
		}
	  }
	  return bestScore;
	}
  }
  
  // Function to find the best move for the current player using Minimax
  function findBestMove(board, player) {
	let bestMove = -1;
	let bestScore = -Infinity;
	const opponent = player === "X" ? "O" : "X";
  
	// Loop through all possible moves and choose the best one
	for (let i = 0; i < board.length; i++) {
	  if (!board[i]) {
		board[i] = player;                      // Simulate the move
		const score = minimax(board, false, player, opponent); // Call minimax for opponent
		board[i] = "";                          // Undo the move
		if (score > bestScore) {
		  bestScore = score;                    // Update best score
		  bestMove = i;                         // Update best move
		}
	  }
	}
	return bestMove;
  }
  
  // Example usage:
  function Apibot(){

	  const board = ["X", "O", "X", "", "X", "", "", "O", ""];
	  const player = "X";
	  const nextMove = findBestMove(board, player);
	  console.log("Next move for player", player, "is at position:", nextMove);
  }
  export default Apibot