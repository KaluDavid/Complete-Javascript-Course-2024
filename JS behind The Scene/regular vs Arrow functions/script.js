"use strict";

const firsName = "elsa";

const jonas = {
  firsName: "dhave",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // THIS IS THE ERROR, BELOW THE COMMENT OUT CODES IS THE SOLUTION AND FIXED BUG.

    // Problem
    //     // functions inside of  methods
    //     const isMillenial = function () {
    //       console.log(this);
    //       console.log(this.year >= 1981 && this.year <= 1996);
    //     };
    //     isMillenial();
    //   },

    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self); //self or that
    //   console.log(self.year >= 1981 && self.year <= 1996);

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firsName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Argument keyWord
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5);


// Argument doesn't entails to arrow function
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3, 4);
