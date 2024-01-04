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
// 1. Store Mark's and John's mass and height in variables
//Mark's mass and height
const markMass = 78;
const markHeight = 1.69;

// john's mass and height
const johnMass = 92;
const johnHeight = 1.92;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// formula:  BMI = mass / height ** 2 = mass / (height * height)

const markBmi = markMass / markHeight ** 2;
console.log(markBmi);

const johnBmi = johnMass / johnHeight ** 2;
console.log(johnBmi);


// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);


