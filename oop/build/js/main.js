"use strict";
class Coder {
    constructor(name, // accessible in and outside the class but cannot be changed
    music, age, // only accessible inside this class
    lang = "JavaScript" // accessible inside this class and its subclasses
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name,
            this.music = music,
            this.age = age,
            this.lang = lang;
    }
    getAge() {
        return `Age = ${this.age}`;
    }
}
const Wesley = new Coder('Wesley S', 'RNB', 26); // Wesley is a Coder object - Instance of the class Coder
console.log(Wesley.getAge()); // getAge is public
// console.log(Wesley.age); // age is private
console.log(Wesley.music); // music is public
// console.log(Wesley.lang); // lang is protected
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Programming Language - ${this.lang}`; // lang can be accessed in Coder subclasses
    }
}
const Ian = new WebDev('Lenovo', 'Iano', 'Hiphop', 24);
console.log(Ian.getLang());
// define a class that implements Musician interface
class Guitarist {
    constructor(name, instrument) {
        this.name = name,
            this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action}s the ${this.instrument}`;
    }
}
// create a Guitarist object
const Samidoh = new Guitarist('Samidoh Muchoki', 'guitar');
console.log(Samidoh.play('chuna'));
/////////
// using static properties
class Peeps {
    static getCount(count) {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name,
            this.id = ++Peeps.count; // increments count before calling it
    }
}
Peeps.count = 0; //static ensures the property/method can only be used in this class and not its objects
const Irene = new Peeps('Renee');
console.log(Irene.id); // 1
// Irene.count = 1; // error since count can only be accessed by Peeps and not its instances
const James = new Peeps('Jamoo');
console.log(James.id);
console.log(Peeps.count); // 2 - The number of times Peeps has been instanciated
/////
// setters and getters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Sauti Sol', 'Elani', 'Hart the band']; // sets some array values
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Vijana Barubaru', 'P Unit']; // add new values using the spread operator
console.log(MyBands.data);
