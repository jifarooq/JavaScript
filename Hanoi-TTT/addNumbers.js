var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

	if (numsLeft > 0 ) {
		reader.question("Enter number to add: ", function(numStr) {
			var num = parseInt(numStr);
			
			sum += num;
			console.log("Current sum is " + sum);
			console.log();

			addNumbers(sum, numsLeft - 1, completionCallback);
		})
		// first time had addNumbers recursion here but it needs to be
		// inside the reader, or it wont keep asking for input
	} else {
		// by putting it inside else, it enforces only running it once!
		completionCallback(sum);
	}
}

addNumbers(0, 3, function (sum) {
	console.log("Total Sum: " + sum);
	reader.close();
});