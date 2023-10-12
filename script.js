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