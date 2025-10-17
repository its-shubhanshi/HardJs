const fruits = ["Apple", "Banana", "Grapes", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}



const marks = [60, 70, 80];
const updatedMarks = marks.map((m) => m + 5);
console.log(updatedMarks); // [65, 75, 85]


const scores = [45, 82, 67, 90, 33];
const passed = scores.filter(score => score >= 60);
console.log(passed); // [82, 67, 90]



const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 600



/* 🧩 Mini Project: Student Grades : */

const students = [
  { name: "Aarav", marks: 85 },
  { name: "Riya", marks: 55 },
  { name: "Kabir", marks: 72 },
  { name: "Anaya", marks: 95 }
];
// Step 1: Add 5 bonus marks to all
const updated = students.map(s => ({ ...s, marks: s.marks + 5 }));

// Step 2: Keep only those who passed (>=60)
const passStd = updated.filter(s => s.marks >= 60);

// Step 3: Find total marks of passed students
const totalMatks = passStd.reduce((sum, s) => sum + s.marks, 0);

console.log("Passed Students:", passed);
console.log("Total Marks:", total);

