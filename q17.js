const students = [
    { name: "Rahul", marks: 85 },
    { name: "Amit", marks: 70 },
    { name: "Priya", marks: 92 },
    { name: "Neha", marks: 80 }
]

let total = 0

for (const student of students) {
    total = total + student.marks
}

console.log("Total Marks:", total)