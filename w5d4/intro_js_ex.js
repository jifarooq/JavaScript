Array.prototype.uniq = function () {
  var newArr = [];

  for (var i = 0; i < this.length; i++) {
    if (newArr.indexOf(this[i]) < 0) {
      newArr.push(this[i]);
    }
  }
  
  return newArr;
};

// [-1, 0, 2, -2, 1].two_sum # => [[0, 4], [2, 3]]
Array.prototype.twoSum = function() {
  var newArr = [];
  
  for (var i = 0; i < (this.length); i++) {
    for (var j = i + 1; j < (this.length); j++) {
      if (this[i] === -this[j] ) {
        newArr.push([i, j]);
      }
    }
  }
  
  return newArr;
};

// var arr = [-1, 0, 2, -2, 1];
// console.log(arr.twoSum());

Array.prototype.transpose = function() {
  var newArr = new Array(this.length);
  
  for(var i = 0; i < newArr.length; i++) { 
    newArr[i] = new Array(this.length); 
  }
    
  for (var i = 0; i < (this.length); i++) {
    for (var j = 0; j < (this.length); j++) {
      newArr[i][j] = this[j][i];
    }
  }
  
  return newArr;
};

// var arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
// console.log(arr.transpose());

Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};


Array.prototype.myMap = function (callback) {
  var newArr = [];
  
  this.myEach(function(el) {
    newArr.push(callback(el));
  });
  
  return newArr;
};

var arr = ['abc', 'd', 'e']
var func = function(accum, num) {
  return accum + num;
};

Array.prototype.myInject = function (callback) {
  var accum = this[0];
  var slice = this.slice(1);
  slice.myEach(function(el) {
    accum = callback(accum, el);
  });
  return accum;
};

Array.prototype.bubbleSort = function () {
  var sorted = false;
  
  while (sorted === false) {
    sorted = true;
    
    for(var i = 0; i < (this.length - 1); i++) {
      if (this[i] > this[i + 1]) {
        sorted = false;
        var temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }
  
  return this;
};
// var arr = [43525, 234, 632, 10];
// console.log(arr.bubbleSort());

Array.prototype.substrings = function () {
  var newArr = [];
  for(var i = 0; i < this.length; i++) {
    for(var j = i; j <this.length; j++) {
      newArr.push(this.slice(i, j + 1));
    }
  }
  return newArr;
};

var range = function(start, end) {
  if (start === end) {
      return [start];
  }
  
  return [start].concat(range(start + 1, end));
};

// console.log(range(1, 5));



// console.log(["c", "a", "t"].substrings());

// arr.my_each(function(el) { console.log(el) });
// console.log(arr.myInject(f));
// console.log(arr);

var fibs = function(n) {
  if (n < 3) { return [0, 1].splice(0, n + 1); }
  var result = fibs(n - 1);
  return result.concat(result[n - 3] + result[n - 2]);
};

var bsearch = function(arr, target) {
  if (arr.length < 1) {
    return undefined;
  };
  
  var mid = Math.floor(arr.length / 2);
  
  if (target < arr[mid]) {
    return bsearch(arr.splice(0, mid), target);
  } else if (target === arr[mid]) {
    return mid;
  } else {
    return bsearch(arr.splice(mid + 1), target) + mid + 1;
  }
};

// console.log(bsearch([1, 3, 5, 7, 9], 11));

var makeChange0 = function(n, coins) {
  for (var i = 0; i < coins.length; i++){
    if (coins[i] <= n){
      var new_coins;
  
      if (coins.slice(1).length === 1) {
        new_coins = coins;
      } else {
        new_coins = coins.slice(0, i).concat(coins.slice(i + 1));
      }
      
      // push make change call to results array.  pick array with fewest coins 
      return [coins[i]].concat(makeChange(n - coins[i], new_coins));
      break;
    }
  }
};


var makeChange = function(n, coins) {
  var best = null;
  
  for (var i = 0; i < coins.length; i++){
    var coin_combo = [];
      if (coins[i] <= n) {
        coin_combo = [coins[i]].concat(makeChange(n - coins[i], coins));
        if (best === null || coin_combo.length < best.length) {
          best = coin_combo;
        }
      }
  }
  
  return best;
}

Array.prototype.mergeSort = function () {
  if (this.length < 2) {
    return this;
  }
  
  var mid = Math.floor( this.length / 2);
  
  var left = this.slice(0, mid), right = this.slice(mid);
  var sortedLeft = left.mergeSort(), sortedRight = right.mergeSort();
  return merge(sortedLeft, sortedRight);
};

var merge = function(left, right) {
  var newArr = [];
  
  while (left.length > 0 && right.length > 0){
    var temp = ( (left[0] < right[0]) ? left.shift() : right.shift() );
    newArr.push(temp);
  }
  return newArr.concat(left).concat(right);
};

Array.prototype.subsets0 = function () {
  len = this.length;
  
  if (len < 1) {
    var arr = new Array(1);
    arr[0] = new Array(1);
    return arr;
  }
  
  var result = (this.slice(0, len - 1)).subsets();
  
  for (var i = 0; i < result.length; i++){
    result.push(this[len]);
  }
  
  return result;
};

var subsets = function (arr) {

  // step through solution on Chrome debugger
  // learn it well!
  
  if (arr.length < 1) {
    return [[]];
  }

  var sub = arr.slice(0, len - 1);
  
  for (var i = 0; i < sub.length; i++){
    // results = results.push(arr[len]);
    return subsets(sub).push(arr[len]);
    var x = 3;
  }
  
  // return results;
};

console.log(subsets( [1, 2, 3] ));
// console.log( subsets( [1, 2, 3] );

// console.log(makeChange(24, [10, 7, 1]));

// console.log([2,7,9,3,5,7].mergeSort());
