// Q1. make a string out of an array
const fruits = ["apple", "banana", "orange"];
console.log(fruits.toString());

// ? Q2. make an array out of a string
const fruits2 = "🍕, 🍔, 🍟, 🌭";
const fruit_array = [fruits2[0], fruits2[1], fruits2[2], fruits2[3]];
console.log(fruit_array);

// Q3. make this array look like this: [5,4,3,2,1]
const array = [1, 2, 3, 4, 5];
const reversed_array = array.reverse();
console.log(reversed_array);

// Q4. make new array without the first two elements
const array2 = [1, 2, 3, 4, 5];
array2.splice(0, 2);
console.log(array2);

//
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
const q5 = students.filter((student) => student.score === 90);
console.log(q5);

// Q6. make an array of enrolled students
const q6 = students.filter((student) => student.enrolled === true);
console.log(q6);

// Q7. make an array containing only the student's scores
const q7 = students.map((student) => {
  return student.score;
});
console.log(q7);

// Q8. check if there is a student with the score lower than 50

// Q9. compute students' average score
let sum = 0;
students.forEach((student) => {
  sum += student.score;
});
console.log(sum / students.length);

// Q10. make a string containing all the scores
console.log(q7.join(", "));

// Bonus do Q10 sorted in ascending order
q7.sort();
console.log(q7.join(", "));
