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
    this.showBoard();
    console.log(`Player ${this.player}'s turn`)
    var current = this;
    const space = prompt.get(['move'], function(err, result) {
      if (err) {
        console.log('Error making move');
      } else {
        const row = Math.floor((result.move - 1) / 3);
        const column = (result.move - 1) % 3;
        if (current.board[row][column] === '') {
          current.board[row][column] = current.player;
          current.numMoves = current.numMoves + 1;
          console.log(current.numMoves)
          if (current.isWinner(row, column)) {
            console.log('Congratulations you have won the game!');
          } else if (current.numMoves === 9) {
            console.log('Game over')
            current.showBoard();
          }else {
            current.player === 'X' ? current.player = 'O' : current.player = 'X';
            current.takeTurn();
          }
        }
      }
    })
  }

  isWinner(row, column) {
    if (this.rowWinner(row) || this.columnWinner(column) || this.diagonalWinner(row, column)) {
      return true;
    }
    return false;
  }

  rowWinner(row) {
    if (this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2]) {
      return true;
    } else {
      return false;
    }
  }

  columnWinner(column) {
    if (this.board[0][column] === this.board[1][column] && this.board[1][column] === this.board[2][column]) {
      return true;
    } else {
      return false;
    }
  }

  diagonalWinner(row, column) {
    const diagonals = [[0,0], [0, 2], [1, 1], [2, 0], [2, 2]];
  
    if ((this.board[0][0] === 'X' && this.board[1][1] === 'X' && this.board[2][2] === 'X') || (this.board[0][0] === 'O' && this.board[1][1] === 'O' && this.board[2][2] === 'O') )  {
      return true;
    }

    if ((this.board[0][2] === 'X' && this.board[1][1] === 'X' && this.board[2][0] === 'X') || (this.board[0][2] === 'O' && this.board[1][1] === 'O' && this.board[2][0] === 'O')) {
      return true;
    }

    return false;
    
  }
}

const game = new TicTacToe;
prompt.start();
game.play();
