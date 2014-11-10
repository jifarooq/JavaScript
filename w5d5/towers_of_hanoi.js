var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Hanoi() {
  
  this.tower1 = [3, 2, 1];
  this.tower2 = [];
  this.tower3 = [];
  
  var solution = [3, 2, 1];
  var game = this;
}

Hanoi.prototype.parseInput = function (towerStr) {
  if (towerStr === '1') {
    return this.tower1;
  } else if (towerStr === '2') {
    return this.tower2;
  } else {
    return this.tower3;
  }
};

Hanoi.prototype.hasWon = function () {
  return this.tower2.length === 3  || this.tower3.length === 3;
};
  
Hanoi.prototype.isValidMove = function (tower1, tower2) {
  var currentDisc = tower1[(tower1.length - 1)];
  return tower2.length === 0 || currentDisc < tower2[(tower2.length - 1)]
};
  
Hanoi.prototype.move = function (tower1, tower2) {
    
  if (this.isValidMove(tower1, tower2)) {
    var currentDisc = tower1.pop();
    tower2.push(currentDisc);
    return true;
  } 
  
  console.log("Not a valid move");
  return false;
};
  
Hanoi.prototype.print = function () {
  console.log(JSON.stringify(this.tower1));
  console.log(JSON.stringify(this.tower2));
  console.log(JSON.stringify(this.tower3));
};
  
Hanoi.prototype.promptMove = function (callback) {
  var game = this;
  reader.question("Enter start tower: ", function (startTowerIdx) {
    reader.question("Enter end tower: ", function (endTowerIdx) {
        var tower1 = game.parseInput(startTowerIdx);
        var tower2 = game.parseInput(endTowerIdx);
    
        if (callback(tower1, tower2)) {
          return;
        }
      });
  });
};  

Hanoi.prototype.run = function (callback) {
  var game = this;
  this.print();
  this.promptMove(function (tower1, tower2) {
    game.move(tower1, tower2);
    callback();
  });
};
  
Hanoi.prototype.startGame = function (func) {
  var game = this;
  function loopStep() {
    if (game.hasWon()) {
      return func();
    } else {
      game.run(loopStep);
    }
  }
  
  loopStep();
};

var completionCallback = function () {
  console.log("Congrats you're a Towers of Hanoi champ!");
  reader.close();
};

var game = new Hanoi();
game.startGame(completionCallback);