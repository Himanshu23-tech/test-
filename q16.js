const students = [
    { name: "Rahul", marks: 85 },
    { name: "Amit", marks: 70 },
    { name: "Priya", marks: 92 },
    { name: "Neha", marks: 80 }
]

const result = students.filter(student => student.marks > 80)

console.log(result)