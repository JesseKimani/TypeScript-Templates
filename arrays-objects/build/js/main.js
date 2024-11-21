"use strict";
// Arrays
let stringArr = ['Shoes', 'Computer', 'Money'];
let guitars = ['Strat', 'Les Paul', 3940];
let mixedData = ['Work', true, 100000];
guitars = [780, 44]; // guitars accepts numbers
guitars = stringArr; // Works because guitar accepts strings
mixedData = guitars; // Works because mixedData accepts strings and numbers
// stringArr = mixedData // Other data types are not assignable to a string array.
// Tuples - More strict than arrays
let tuple1 = ['Africa', 54, false];
let dataArray = ['Europe', 30, true];
dataArray = tuple1; // A tuple can be assigned to an array if they have the same data types inside.
// tuple1 = dataArray; // Fails because array data type cannot be assigned to a tuple
// Objects
const object1 = {
    prop1: 'Lenovo',
    prop2: 2021,
    prop3: true
};
let neymar = {
    name: 'Neymar Jr',
    age: 34,
    isActive: true,
    trophies: [2015, 2016, 'Copa 2024']
};
// console.log(neymar.trophies);
let yamal = {
    name: 'Lamine Yamal',
    age: 20,
    trophies: ['EURO 2024', 2025]
};
// neymar = yamal // Works because 'isActive' property is optional
const greetPlayer = (footballer) => {
    return `Hi ${footballer.name}!`;
};
console.log(greetPlayer(yamal));
console.log(greetPlayer(neymar));
// Enums - Represent a list of related constants
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["F"] = 5] = "F";
})(Grade || (Grade = {}));
console.log(Grade.B);
