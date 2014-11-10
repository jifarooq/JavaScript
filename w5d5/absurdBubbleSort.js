var readline = require('readline');

var reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function askIfLessThan(el1, el2, callback) {
	console.log(el1, el2);
	console.log();
	reader.question("Is the first less than second? ", function(input) {
		if (input.slice(0, 1) === 'y' ) {
			callback(true);
		} else {
			callback(false);
		}
	});
}

// solution code is a little clearer here
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
	if (i < arr.length - 1) {

		askIfLessThan(arr[i], arr[i + 1], function (isLessThan) {
			if (!isLessThan) {
				var first = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = first;

				madeAnySwaps = true;
			}

			innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);	
		});
	} else {
		outerBubbleSortLoop(madeAnySwaps);
	}
}

function absurdBubbleSort(arr, sortCompletionCallback) {
	function outerBubbleSortLoop(madeAnySwaps) {
		if (madeAnySwaps) {
			innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
		} else {
			sortCompletionCallback(arr);
		}
	}

	outerBubbleSortLoop(true);  //kickOff!
}

absurdBubbleSort([2, 3, 1, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});