const prompt = require('prompt');

class TicTacToe {
  constructor(){
    this.board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    this.player = 'X';
    this.numMoves = 0;
  }

  showBoard(board) {
    console.log(`| ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]} |`);
    console.log(`| ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]} |`);
    console.log(`| ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]} |`);
  }

  play() {
    console.log('Player 1 is X, player 2 is O');
    console.log(`| ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]} |`);
    console.log(`| ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]} |`);
    console.log(`| ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]} |`);
    console.log('On your turn enter the space number you want to occupy')
    this.board = [['', '', ''], ['', '', ''], ['', '', '']]
    this.takeTurn();
  }

  takeTurn() {
    showBoard();
    const space = prompt.get(['move'], function(err, result) {
      if (err) {
        console.log('Error making move');
      } else {
        const row = Math.floor((result.move - 1) / 3);
        const column = (result.move - 1) % 3;
        if (this.board[row][column] === '') {
          this.board[row][column] = this.player;
          this.moves++;
          if (isWinner(row, column)) {
            console.log('Congratulations you have won the game!');
          } else {
            this.player === 'X' ? 'O' : 'X';
            takeTurn();
          }
        }
      }
    })
  }

  isWinner(row, column) {

  }

  rowWinner(row) {

  }

  columneWinner(column) {

  }

  diagonalWinner(start) {

  }
}

const game = new TicTacToe;
prompt.start();
game.play();
