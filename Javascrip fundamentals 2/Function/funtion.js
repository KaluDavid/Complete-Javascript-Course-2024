"use strict ";

// starting with function
/*
function examScore(broadcasting, editorial) {
    const bothScore = `In FOB, I scored ${broadcasting}, while in Editorial Writing, I scored ${editorial}`

    return bothScore;
}

const resultOutput = examScore(68, 81);
console.log(resultOutput);



LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*

function describeCountry(country, population, capitalCity) {
    const data = `${country} has ${population} million people and it's capital city is ${capitalCity} `;

    return data;
}

const finlandData = describeCountry('Finland', 6, 'Helsinki');
const nigeriaData = describeCountry('Nigeria', +200, 'Abuja');
const ghanaData = describeCountry('Ghana', 60, 'Accra');
console.log(finlandData);
console.log(nigeriaData);
console.log(ghanaData);
*/

// FuNction declaration vs Expression

// function declartion

function ageCal(birthYear) {
  // you can also direction return the function, rather than storing in a var
  return 2034 - birthYear;
}
const realAge = ageCal(2006);
console.log(realAge);

// Function Expression
const myAge = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = myAge(2006);
console.log(age2);

console.log(`



`);
/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)*/

//  function declaration
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const nigeriaPopulation = 200;
// const nigeriaData = percentageOfWorld1(nigeriaPopulation);
// let resultOutput = `Nigeria has ${nigeriaPopulation} million people, so it's about ${nigeriaData}% of
// the world population`;
// console.log(resultOutput);

// function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const ghanaPopulation = 60;
const ghanaData = percentageOfWorld2(ghanaPopulation);
resultOutput = `Ghana has ${ghanaPopulation} million people, so it's about ${ghanaData}% of
the world population`;
console.log(resultOutput);

function percentageOfWorld3(population) {
  return (population / 7900) * 100;
}
const populate = percentageOfWorld3(100);
console.log(`Cameroon has ${100} million people, so it's about ${populate}% of
the world population`);

console.log(`



`);
