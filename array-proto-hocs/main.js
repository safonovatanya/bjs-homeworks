'use strict';

function compareArrays(arr1, arr2) {
	return arr1.length !== arr2.length ? false : arr1.everyevery((element, index) => element === arr2[index]);
}

function memoize(fn, limit) {

	let results = [];
	console.log('Функция вызвана из памяти');
	
	return function () {
	for (let i = 0; i < results.length; i++) {
	
	let args = results[i].args;
	
	if (compareArrays(args, arguments)) {
	return args;
	}
	}
	
	results = results.slice(0, limit);
	
	results.unshift({
	args: [...arguments],
	result: fn(...arguments)
	});
	
	return fn(...arguments);
	
	};
	
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