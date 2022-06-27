// // setting board configurations
// let board = [
//   ["-", "-", "-"],
//   ["-", "-", "-"],
//   ["-", "-", "-"],
// ];

// let currentPlayer = 0;
// timesPlayed = 0;
// // function to print board
// const printBoard = () => {
//   //   for (let b in board) console.log(board[b]);
//   board.forEach((b) => console.log(b));
// };

// // printBoard();
// //functon to check whether a given position is occupied already
// const alreadyOccupied = (firstIndex, secondIndex) => {
//   if (
//     board[firstIndex][secondIndex] === "X" ||
//     board[firstIndex][secondIndex] === "O"
//   ) {
//     return true;
//   }
//   return false;
// };
// // function to modify board according to position played
// const playPosition = (symbol) => {
//   let enteredPosition = parseInt(prompt("Where do you want to play (1-9)? "));
//   while (isNaN(enteredPosition) || enteredPosition < 1 || enteredPosition > 9) {
//     console.log("Enter a valid input(1-9)");
//     enteredPosition = parseInt(prompt("Where do you want to play(1-9)? "));
//   }
//   let magicNumber = enteredPosition - 1;
//   let firstIndex = Math.floor(magicNumber / 3); //Math.trunc(magicNumber/3)
//   let secondIndex = magicNumber % 3;
//   while (alreadyOccupied(firstIndex, secondIndex)) {
//     alert(
//       "Ooops! That position is occupied already! Please enter a different one"
//     );
//     enteredPosition = parseInt(prompt("Where do you want to play(1-9)? "));
//     while (
//       isNaN(enteredPosition) ||
//       enteredPosition < 1 ||
//       enteredPosition > 9
//     ) {
//       console.log("Enter a valid input(1-9)");
//       enteredPosition = parseInt(prompt("Where do you want to play(1-9)? "));
//     }
//     magicNumber = enteredPosition - 1;
//     firstIndex = Math.floor(magicNumber / 3);
//     secondIndex = magicNumber % 3;
//   }
//   board[firstIndex][secondIndex] = symbol;
//   printBoard();
// };

// // function to determine who plays first
// const firstToPlay = () => {
//   let first_to_play = Math.floor(1 + Math.random() * 2); //generate random number between 1 and 2
//   if (first_to_play === 1) {
//     console.log("Player 1 plays first! ");
//     playPosition("X");
//     timesPlayed += 1;

//     currentPlayer = 1;
//   } else {
//     console.log("Player 2 plays first!");
//     playPosition("O");
//     timesPlayed += 1;
//     currentPlayer = 2;
//   }
// };

// //function to switch rounds between players
// const playerRounds = () => {
//   if (currentPlayer === 1) {
//     currentPlayer = 2;
//     console.log("Player 2's turn");
//     playPosition("O");
//     timesPlayed += 1;
//   } else {
//     currentPlayer = 1;
//     console.log("Player 1's turn");
//     playPosition("X");
//     timesPlayed += 1;
//   }
// };

// // main game functionality
// const game = () => {
//   firstToPlay();
//   while (timesPlayed <= 9) {
//     if (timesPlayed >= 4) {
//       if (checkWinner() && currentPlayer === 1) {
//         console.log("Player 1 wins!!!");
//         return;
//       } else if (checkWinner() && currentPlayer === 2) {
//         console.log("Player 2 wins!!!");
//         return;
//       }
//       if (checkWinner() === false && timesPlayed === 9) {
//         console.log("Tie game!!!");
//         return;
//       }
//     }
//     playerRounds();
//   }
// };

// // function to define winning positions
// const checkWinner = () => {
//   //vertical check
//   if (
//     board[0][0] !== "-" &&
//     board[0][0] === board[1][0] &&
//     board[1][0] == board[2][0]
//   ) {
//     return true;
//   } else if (
//     board[0][1] !== "-" &&
//     board[0][1] === board[1][1] &&
//     board[1][1] == board[2][1]
//   ) {
//     return true;
//   } else if (
//     board[0][2] !== "-" &&
//     board[0][2] === board[1][2] &&
//     board[1][2] == board[2][2]
//   ) {
//     return true;
//   }
//   //Horizontal check
//   else if (
//     board[0][0] !== "-" &&
//     board[0][0] === board[0][1] &&
//     board[0][1] == board[0][2]
//   ) {
//     return true;
//   } else if (
//     board[1][0] !== "-" &&
//     board[1][0] === board[1][1] &&
//     board[1][1] == board[1][2]
//   ) {
//     return true;
//   } else if (
//     board[2][0] !== "-" &&
//     board[2][0] === board[2][1] &&
//     board[2][1] == board[2][2]
//   ) {
//     return true;
//   }
//   //Diagonal check
//   else if (
//     board[0][0] !== "-" &&
//     board[0][0] === board[1][1] &&
//     board[1][1] == board[2][2]
//   ) {
//     return true;
//   } else if (
//     board[0][2] !== "-" &&
//     board[0][2] === board[1][1] &&
//     board[1][1] == board[2][0]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// game();
