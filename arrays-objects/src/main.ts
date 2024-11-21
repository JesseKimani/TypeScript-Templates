// Arrays
let stringArr: string[] = ['Shoes', 'Computer', 'Money'];

let guitars: (number | string)[] = ['Strat', 'Les Paul', 3940];

let mixedData: (string | boolean | number)[] = ['Work', true, 100000];

guitars = [780, 44]; // guitars accepts numbers
guitars = stringArr; // Works because guitar accepts strings
mixedData = guitars; // Works because mixedData accepts strings and numbers
// stringArr = mixedData // Other data types are not assignable to a string array.


// Tuples - More strict than arrays
let tuple1: [string, number, boolean] = ['Africa', 54, false];

let dataArray = ['Europe', 30, true];

dataArray = tuple1; // A tuple can be assigned to an array if they have the same data types inside.
// tuple1 = dataArray; // Fails because array data type cannot be assigned to a tuple


// Objects
const object1 = {
  prop1: 'Lenovo',
  prop2: 2021,
  prop3: true
}


// Type aliases - Declaring objects or repetitive related data
// Using 'type'
/*
type Footballer = {
  name: string,
  age: number,
  isActive ?: boolean, // The '?' sign makes this property optional
  trophies: (string | number)[]
}
*/

//Using 'interface
interface Footballer {
  name: string,
  age: number,
  isActive ?: boolean, // The '?' sign makes this property optional
  trophies: (string | number)[]
}

let neymar: Footballer = {
  name: 'Neymar Jr',
  age: 34,
  isActive: true,
  trophies: [2015, 2016, 'Copa 2024']
}
// console.log(neymar.trophies);

let yamal = {
  name: 'Lamine Yamal',
  age: 20,
  trophies: ['EURO 2024', 2025]
}

// neymar = yamal // Works because 'isActive' property is optional

const greetPlayer = (footballer: Footballer) => {
  return `Hi ${footballer.name}!`;
}

console.log(greetPlayer(yamal));
console.log(greetPlayer(neymar));


// Enums - Represent a list of related constants
enum Grade {
  A = 1,
  B,
  C,
  D,
  F
}

console.log(Grade.B)