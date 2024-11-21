"use strict";
// Generrics - useful when you don't know the data type you expect
const display = (arg) => arg; // replace T with any letter
// check if whatever passed is an object
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
/*
console.log(isObj(true)); // false
console.log(isObj('Mary')); // false
console.log(isObj(7)); // false
console.log(isObj([4,8,'yes'])); // false
console.log(isObj({Year: 2024})); // true
console.log(isObj(null)); // false
*/
// confirm if the type of argument passed exists
const isTrue = (arg) => {
    // if empty, return false
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue([])); // false
console.log(isTrue('')); // false
console.log(isTrue({})); // false
console.log(isTrue(null)); // false
console.log(isTrue(undefined)); // false
console.log(isTrue([3, 6, 9])); // true
console.log(isTrue({ name: 'Kim' })); // true
console.log(isTrue(true)); // true
console.log(isTrue(false)); // false
console.log(isTrue('Rhumba')); // true
console.log(isTrue(22)); // true
const checkBoolValue = (arg) => {
    // if empty, return false
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // some loic here
    return user;
};
// console.log(processUser({name: 'Liam'})); // requires id property
console.log(processUser({ id: 'JK24', name: 'Kimani' }));
/////////
// using a class and setters/getters
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const obj1 = new StateObject('Roy');
console.log(obj1.state);
