const increaseMarks = function(marks) {
    return marks.map(mark => mark + 10)
}

const marks = [50, 60, 70, 80, 90]

const newMarks = increaseMarks(marks)

console.log("Original Marks:", marks)
console.log("Increased Marks:", newMarks)