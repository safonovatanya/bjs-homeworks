'use strict';

function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
	return false
	}
	
	for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] !== arr2[i]) {
	return false
	}
	}
	return true;
	}

	function memorize(fn, limit) {
		let results = [];
		return function() {
		check = results.find(result => compareArrays(result.args, Array.from(arguments)));
		if (check) {
		console.log(`Результат из памяти:`);
		return check.result;
		}
		results.push({ args: Array.from(arguments), result: fn(...arguments) })
		
		if (results.length > limit) {
		results.pop();
		}
		let i = results.length - 1;
		console.log(`Результат не из памяти:`)
		return results[i].result;
		}
		}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 10);
mSum( 3, 4 );
mSum( 8, 9 );
mSum( 83, 38 );
mSum( 777, 777 );
mSum( 1, 29 );
mSum( 11, 11 );
mSum( 15, 23 );
mSum( 123, 987 );
mSum( 15, 25 );
mSum( 83, 38 );
mSum( 878, 32 );
mSum( 3, 4 );