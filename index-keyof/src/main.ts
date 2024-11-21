// Index signatures and keyof assertions

interface TransactionObj {
  readonly [index: string]: number; // all keys are strings and all values are numbers
}

/*
interface TransactionObj {
  Pizza: number,
  Books: number,
  Job: number
}
*/

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -20,
  Job: 70
}

console.log(todaysTransactions['Job']);

let prop = 'Job';
console.log(todaysTransactions[prop]);

// using a function and a loop
const todaysNet = (transactions : TransactionObj): number => {
  let total = 0;

  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
}

console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 7; index signature is readonly


///////
interface Student {
  // [key: string]: string | number | string[] | undefined;
  name: string,
  GPA: number,
  classes?: string[]
}

const student: Student = {
  name: 'Leny',
  GPA: 4.5,
  classes: ['Maths', 'Algorithms']
}

// console.log(student.tests); // index signature assumes we might have 'tests' in student

for (const key in student) {
  console.log(`${key} = ${student[key as keyof Student]}`); // keyof creates a union type of all types in Student interface

  // console.log(`${key} = ${student[key]}`); // same as the above if we had an index signature when defining the interface

}


Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
  // console.log(student[key as keyof Student]); // same as above
})


function logStudentKey(student: Student, key: keyof Student): void {
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'classes');
logStudentKey(student, "GPA");


//////////////////////

type Streams = 'salary' | 'bonus' | 'sidehustle'; // declare some string literal types

type Incomes = Record<Streams, number> // use Record utility type to access Streams
/*
interface Incomes {
  [key: string]: number
}
*/

const novemberIncome: Incomes = {
  salary: 89000,
  bonus: 5250,
  sidehustle: 24800
}

for (const income in novemberIncome) {
  console.log(`${income} = ${novemberIncome[income as keyof Incomes]}`);
}