class Student {
    name: string;
    studentId: number;
    grade: string;
    address: string;

    constructor(name: string, studentId: number, grade: string, address: string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }

    displayInfo(): void {
        console.log("Name:", this.name);
        console.log("Student ID:", this.studentId);
        console.log("Grade:", this.grade);
        console.log("Address:", this.address);
    }
}

const s1 = new Student( "Rahul", 101, "A", "Mumbai" );
s1.displayInfo();