console.log("hi from script.js")

const legalName = "John Doe"
console.log(legalName)

let age;
console.log("age before assignment", age)
age = 28;
console.log("age after assignment", age)
age = 36;
console.log("age after second assignment", age)

let firstLetterOfTheAlphabet = "a";
console.log("camel case", firstLetterOfTheAlphabet)

const num = 1;
console.log(num, typeof num);

const string = "string";
console.log(string, typeof string);

const boolean = true;
console.log(boolean, typeof boolean);

let x;
console.log("x", typeof x);

const y = null;
console.log("y", typeof y);

const array = [1, "apple", true];
console.log(array, typeof array);
console.log(array[2])

const object = {
    name: "John",
    age: 28,
    isMarried: true
}
console.log(object, typeof object);

let firstNum = 26;
let secondNum = 4;

console.log("addition", firstNum + secondNum);
console.log("subtraction", firstNum - secondNum);
console.log("multiplication", firstNum * secondNum);
console.log("division", firstNum / secondNum);
console.log("modulus", firstNum % secondNum);

let grade = 95;
grade = 100;
console.log("grade", grade);

let newNumber = 5;
newNumber += 6;
console.log("newNumber", newNumber);

console.log(1 == 1);
console.log(1 === 1);
console.log(1 === "1");
console.log(2 > 3);
console.log(3 > 2);
console.log(5 != 10);
console.log(5 !== 5);
console.log(5 !== "10");

let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;
//1.Create a variable called average that computes for the average from grade1 to grade4
let average = (grade1 + grade2 + grade3 + grade4) / 4;
console.log("average", average);