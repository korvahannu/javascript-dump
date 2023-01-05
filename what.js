const a =
  5 +
  {
    valueOf: function () {
      return 50;
    },
  };

const b =
  "hello " +
  {
    toString: () => {
      return "world!";
    },
  };

console.log(a);
console.log(b);

const square = {
  length: 5,
  valueOf: function () {
    return this.getArea();
  },
  getArea: function () {
    return this.length * this.length;
  },
};

const rectangle = {
  height: 10,
  width: 20,
  valueOf: function () {
    return this.getArea();
  },
  getArea: function () {
    return this.height * this.width;
  },
};

console.log(
  "Rectangle of " +
    rectangle +
    " * square of " +
    square +
    " = " +
    rectangle * square
);
