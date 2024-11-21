"use strict";
/*
// JS code for copyright
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();

year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
*/
// TS code
const year = document.getElementById("year"); // use a not null assertion (!)
const thisYear = new Date().getFullYear().toString(); // convert year number to string
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
