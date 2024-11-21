"use strict";
// Index signatures and keyof assertions
/*
interface TransactionObj {
  Pizza: number,
  Books: number,
  Job: number
}
*/
const todaysTransactions = {
    Pizza: -10,
    Books: -20,
    Job: 70
};
console.log(todaysTransactions['Job']);
let prop = 'Job';
console.log(todaysTransactions[prop]);
// using a function and a loop
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Leny',
    GPA: 4.5,
    classes: ['Maths', 'Algorithms']
};
// console.log(student.tests); // index signature assumes we might have 'tests' in student
for (const key in student) {
    console.log(`${key} = ${student[key]}`); // keyof creates a union type of all types in Student interface
    // console.log(`${key} = ${student[key]}`); // same as the above if we had an index signature when defining the interface
}
Object.keys(student).map(key => {
    console.log(student[key]);
    // console.log(student[key as keyof Student]); // same as above
});
function logStudentKey(student, key) {
    console.log(`Student ${key}: ${student[key]}`);
}
logStudentKey(student, 'classes');
logStudentKey(student, "GPA");
/*
interface Incomes {
  [key: string]: number
}
*/
const novemberIncome = {
    salary: 89000,
    bonus: 5250,
    sidehustle: 24800
};
for (const income in novemberIncome) {
    console.log(`${income} = ${novemberIncome[income]}`);
}
