"use strict";
//  convert to more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'hello';
let e = 'world'; // Another way of defining types
// Example using a function
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b; // number
    }
    return '' + a + b; // string
};
let myVal = addOrConcat(4, 5, 'add'); // tell TS you need the result as a string
let nextVal = addOrConcat(4, 5, 'add');
let anotherVal = addOrConcat(4, 5, 'concat');
// Example using the DOM
let img = document.querySelector('img'); // ! is used as a not null assertion
let myImg = document.getElementById('#img');
let nextImg = document.getElementById('#img'); // using angle brackets to define the type
img.src;
myImg.src;
