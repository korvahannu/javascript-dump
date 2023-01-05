function average(a) {
  let sum = 0,
    count;

  for (count = 0; count < a.length; count++) {
    sum += a[count];
  }

  return sum / count;
}

function betterAverage() {
  let sum = 0,
    count;
  for (count = 0; count < arguments.length; count++) {
    sum += arguments[count];
  }

  return sum / count;
}

console.log(average([1, 10, 5, 20]));
console.log(betterAverage(1, 10, 5, 20));

const nea = {
  name: "Nea",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const hannu = {
  name: "Hannu",
  greet: nea.greet,
};

const niilo = {
  name: "Niilo",
};

nea.greet();
hannu.greet();
nea.greet.call(niilo);
