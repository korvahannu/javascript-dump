
function compareWith(x, y, comparer) {
	return comparer(x, y);
};

function comp(i, j) {
	return i > j
} 

console.log(compareWith(5, 10, comp));

let myObject = {
	name: "Test"
};
let hasOwnProperty = {}.hasOwnProperty;
delete myObject.hasOwnProperty;

const result = hasOwnProperty.call(myObject, "name");

console.log(result);
