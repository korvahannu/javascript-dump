"use strict";

function Person(name) {
  // The following check allows creation of Person when omitting keyword new
  if (!(this instanceof Person)) {
    return new Person(name);
  }

  this.name = name;
}

Person.prototype.log = function () {
  console.log(this.name);
};

const p = new Person("Hannu");
const p2 = Person("Nea");

console.log(p);
console.log(p2);

p.log();
p2.log();

// Essentially the same as the Person prototype, except keyword new can not be omitted
class Human {
  // ssn is defined as a private variable
  #ssn;
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn || undefined;
  }

  log() {
    console.log(this.name);
  }
}

const p3 = new Human("Niilo");
p3.log();
const p4 = new Human("Markus", "010181-900c");
p4.log();
console.log(p4.name);

const createUser = (firstname, lastname) => {
  if (!firstname || !lastname) {
    throw new Error(
      "createUser() requires both parameters [firstname, lastname]"
    );
  }

  let result = Object.create(new Person(firstname));
  result.lastname = lastname;
  return result;
};
const myUser = createUser("Jack", "Daniels");
myUser.log();
