"use strict";
// Utility Types
const assignment1 = {
    studentId: 'SadamCS12',
    title: 'Data Structures',
    grade: 0
};
// function to update a property
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const gradedAssignment = updateAssignment(assignment1, { 'grade': 62 }); // updates grade
console.log(gradedAssignment);
console.log(updateAssignment(assignment1, { title: 'Finance 101', grade: 58 })); // update multiple properties
// Required and Readonly
const recordAssignment = (assign) => {
    // some logic eg. post the to the database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, gradedAssignment), { grade: 57, verified: true });
console.log(assignVerified);
// assignVerified.grade = 90; // Assignment is readonly
const sadamAssignment = recordAssignment(Object.assign(Object.assign({}, assignment1), { studentId: 'SadamCS14', title: 'Theory of Computation', grade: 65, verified: true }));
// const sadamAssignment = recordAssignment({...gradedAssignment, verified: true});
console.log(sadamAssignment);
const finalGrades = {
    Liam: "B",
    'Kelly': "C"
};
const score = {
    studentId: 'Javada11',
    grade: 71
};
const preview = {
    studentId: 'Javada11',
    title: 'Artificial Intelligence'
};
