/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// solution
/* Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.*/
// task 1
// 1. Store Mark's and John's mass and height in variables
const markMass = 78;
const markHeight = 1.69;

// John BMI
const johnMass = 92;
const johnHeight = 1.95;

// task 2
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// formula:  BMI = mass / height ** 2 = mass / (height * height)
const markBMI = markMass / markHeight ** 2;
console.log(markBMI);

// john BMI
const johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

// Task 3
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);


/*
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall 
*/
// solution
// task 1
// 1. Store Mark's and John's mass and height in variables
const mark_Mass = 95;
const mark_Height = 1.88;

const john_Mass = 85;
const john_Height = 1.79;

// task 2
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// formula:  BMI = mass / height ** 2 = mass / (height * height)
const mark_BMI = mark_Mass / mark_Height ** 2;
console.log(mark_BMI);

const john_BMI = john_Mass / john_Height ** 2;
console.log(john_BMI);

// Task 3
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const mark_Heigher_BMI = mark_BMI > john_BMI;
console.log(mark_Heigher_BMI);