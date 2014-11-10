function Board () {
  this.grid = [ 
    ['_', '_', '_'], 
    ['_', '_', '_'], 
    ['_', '_', '_'] 
  ]; 
}

Board.prototype.hasWon = function () {
  return this.checkRows(this.grid) || 
    this.checkColumns() || 
    this.checkDiagonals();
};

Board.prototype.tieGame = function () {
  for (var i = 0; i < this.grid.length; i++) {
    for (var j = 0; j < this.grid.length; j++) {
      if (this.grid[i][j] === '_') {
        return false;
      }
    }
  }

  return true;
};

Board.prototype.isOver = function () {
  return this.hasWon() || this.tieGame();
};

Board.prototype.checkRows = function (grid) {
  for (var i = 0; i < grid.length; i++){
    var spot = grid[i][0];

    var winningRow = (spot === grid[i][1] && spot === grid[i][2] 
      && spot !== '_');
    
    if (winningRow) {
      return true;
    }
  }
  
  return false;
};

Board.prototype.checkColumns = function () {
  return this.checkRows(this.transposedBoard());
};

Board.prototype.transposedBoard = function () {
  var columns = [];
  
  for (var i = 0; i < this.grid[0].length; i++) {
    columns.push([]);
  }

  for (var i = 0; i < this.grid.length; i++) {
    for (var j = 0; j < this.grid[i].length; j++) {
      columns[j].push(this.grid[i][j]);
    }
  }

  return columns;
};

Board.prototype.checkDiagonals = function () {
  var grid = this.grid, spot = grid[1][1];

  var winningDiagDown = 
    (spot === grid[0][0] && spot === grid[2][2] && spot !== '_');
  var winningDiagUp = 
    (spot === grid[0][2] && spot === grid[2][0] && spot !== '_');

  if (winningDiagDown || winningDiagUp) {
    return true;
  }

  return false;
};

Board.prototype.validMove = function (pos) {
  var row = pos[0], col = pos[1];
  var onBoard = (row >= 0 && row < 3 && col >= 0 && col < 3)

  if (!onBoard) {
    return false;
  }

  return (this.grid[row][col] === '_');
};

Board.prototype.placeMark = function (pos, mark) {  
  this.grid[pos[0]][pos[1]] = mark;
};

module.exports = Board;
