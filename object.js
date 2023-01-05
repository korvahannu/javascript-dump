const value =
  5 *
  {
    valueOf: function () {
      return 5;
    },
  };

console.log(value);

const user = {
  name: "Hannu",
  getName: () => {
    return this.name;
  },
  get: function () {
    return this.getName.call({ name: this.name });
  },
};

console.log(user.get());
