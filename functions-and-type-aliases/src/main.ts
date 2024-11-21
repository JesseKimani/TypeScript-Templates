// Type Aliases - Giving names to TypeScript types for easier readability

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name : string,
  isActive: boolean,
  albums: stringOrNumberArray
}

type userId = stringOrNumber;


// Literal types
let userName: 'Dave' | 'Jay' | 'Carol'; // useful when you want the system to only accept certain usernames

let academicYear: 2017 | 2018 | 2019;


// Functions
// Several ways to write functions
const subtract = function(a: number, b: number): number {
  return a - b;
}

function add(a: number, b: number) {
  return a + b;
}

// Arrow function - same as the function above
const addNums = (a: number, b: number): number => {
  return a + b;
}

// A function that does not return anything
const logMessage = (message: any): void => {
  console.log(message);
}


type mathFunction = (a: number, b: number) => number;
/*
// interface option - not recommended for functions
interface mathFunction {
  (a: number, b: number): number
}
*/

let multiply: mathFunction = (x, y) => {
  return x * y;
}

let divide: mathFunction = function(x,y) {
  return x / y;
}

logMessage(divide(40,8)); // 5


// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  //use type guard since there can be an undefined parameter
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
}

logMessage(addAll(5,9)); // 14
logMessage(addAll(5,9,6)); //20

// Default parameters
const sumAll = (a: number = 10, b: number, c: number = 5) => {
  return a + b + c;
}

logMessage(sumAll(7,8,5)); // 20
logMessage(sumAll(undefined, 9, 5)); // 24
logMessage(sumAll(undefined, 20)); // 35
logMessage(sumAll(undefined, 20, 5)); // 35


// Rest parameters - the array comes last in the list of parameters
// ... represents an array
const arrayTotal = (...nums: number[]):number => {
  return nums.reduce((prev, curr) => prev + curr); // reduce function adds all the numbers in an array
}

logMessage(arrayTotal(1,2,3,4,5));


// 'never' type - used mostly when a function returns an error
const createError = (errMessage: string): never => {
  throw new Error(errMessage);
}

/*
// Endless loop returns never
const infinite = (): never => {
  let a: number = 1
  while(true) {
    a++;
  }
}
*/


// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number'
    ? true
    : false
    // same as using an if statement
}

const numberOrString = (value: number | string): string => {
  if (isNumber(value)) return 'number';
  if (typeof value === 'string') return 'string';

  return createError('Test purposes - This should not happen');
}
