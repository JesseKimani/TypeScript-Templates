// Type assertions - overriding the type of a variable
type One = string;
type Two = string | number;
type Three = 'hello';

//  convert to more or less specific type
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One> 'hello';
let e = <string | number> 'world'; // Another way of defining types


// Example using a function
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') {
    return a + b; // number
  }
  return '' + a + b; // string
}

let myVal: string = addOrConcat(4, 5, 'add') as string; // tell TS you need the result as a string
let nextVal: number = addOrConcat(4, 5, 'add') as number;

let anotherVal: string = addOrConcat(4, 5, 'concat') as string;


// Example using the DOM
let img = document.querySelector('img')!; // ! is used as a not null assertion
let myImg = document.getElementById('#img') as HTMLImageElement;
let nextImg = <HTMLImageElement> document.getElementById('#img'); // using angle brackets to define the type

img.src
myImg.src
