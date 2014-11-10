var Board = require("./board");
var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game () {
  this.board = new Board();
  this.curPlayer = 'x';
}

var game = this;

Game.prototype.togglePlayer = function () {
  this.curPlayer = (this.curPlayer === 'x') ? 'o' : 'x';
};

Game.prototype.print = function () {
  console.log(this.board.grid[0]);
  console.log(this.board.grid[1]);
  console.log(this.board.grid[2]);
};

Game.prototype.promptMove = function (callback) {
  reader.question("Enter move position: ", function (pos) {
    var newPos = pos.split(' ')
    newPos[0] = parseInt(newPos[0]);
    newPos[1] = parseInt(newPos[1]);
    
    if (callback(newPos)) {
      return;
    }
  });
}; 


Game.prototype.run = function (callback) {
  this.print();
  this.promptMove(function (pos) {

    if (game.board.validMove(pos)) {
      game.board.placeMark(pos, game.curPlayer);
      game.togglePlayer();
    } else {
      console.log("Move not valid.");
    }

    callback();
  });
};
  
Game.prototype.startGame = function (func) {
  
  function loopStep() {
    if (game.board.isOver()) {
      return func();
    } else {
      game.run(loopStep);
    }
  }
  
  loopStep();
};

var completionCallback = function () {
  if (game.board.hasWon()) {
    // player toggles on last move 
    player = (game.curPlayer === 'o') ? 'Player1' : 'Player2';
    console.log("Congrats " + player + ", you won!");
  } else {
    console.log("Cat's game.");
  }

  reader.close();
};

var game = new Game();
game.startGame(completionCallback);
