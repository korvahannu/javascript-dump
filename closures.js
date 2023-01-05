
function Person(name) {
	function say(x) {
		console.log(name + ": " + x);	
	}
	return say;
}

const person = new Person("Hannu");
person("How are you doing?");

function Box() {
	let value = undefined;
	return {
		get: function() {
			return value;
		},
		set: function(newValue) {
			value = newValue;
		},
		type: function() {
			return typeof value;
		}
	}
}

let b = new Box();
b.set(69.0);
console.log(b.get() + "(" + b.type() + ")");
