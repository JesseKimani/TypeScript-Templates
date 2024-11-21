// Utility Types

// Partial
interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified ?: boolean
}

const assignment1: Assignment = {
  studentId: 'SadamCS12',
  title: 'Data Structures',
  grade: 0
}

// function to update a property
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsToUpdate}
}

const gradedAssignment = updateAssignment(assignment1, {'grade': 62}); // updates grade
console.log(gradedAssignment);
console.log(updateAssignment(assignment1, {title: 'Finance 101', grade: 58})); // update multiple properties


// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // some logic eg. post the to the database
  return assign;
}

const assignVerified: Readonly<Assignment> = {...gradedAssignment, grade: 57, verified: true};
console.log(assignVerified);
// assignVerified.grade = 90; // Assignment is readonly

const sadamAssignment = recordAssignment({...assignment1, studentId: 'SadamCS14', title: 'Theory of Computation', grade: 65, verified: true});
// const sadamAssignment = recordAssignment({...gradedAssignment, verified: true});
console.log(sadamAssignment);


///////

// Record
type Students = "Liam" | "Kelly";
type LetterGrades = "A" | "B" | "C" |"D" | "F";

const finalGrades: Record<Students, LetterGrades> = {
  Liam: "B",
  'Kelly': "C"
}


// Pick and Omit
type AsignResult = Pick<Assignment, 'studentId' | 'grade'>; // only takes these properties

const score: AsignResult = {
  studentId: 'Javada11',
  grade: 71
}

type AssignPreview = Omit<Assignment, 'grade'>;

const preview: AssignPreview = {
  studentId: 'Javada11',
  title: 'Artificial Intelligence'
}


// Exclude and Extract
type PassingGrades = Exclude<LetterGrades, "F">; // removes F
type HighGrades = Extract<LetterGrades, 'A' | 'B'>; // Takea A and B only


// Nonnullable
type AllPossibleNames = 'Hailey' | 'Anto' | null | undefined;
type NamesOnly = NonNullable<AllPossibleNames>; // Removes null and undefined
