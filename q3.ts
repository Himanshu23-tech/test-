class School {
    static totalStudents: number = 0;
    studentList: string[];

    constructor() {
        this.studentList = [];
    }

    addStudent(name: string): void {
        this.studentList.push(name);
        School.totalStudents++;
    }

    displayStudents(): void {
        console.log("Student List:", this.studentList);
        console.log("Total Students:", School.totalStudents);
    }
}

const school1 = new School();

school1.addStudent("Rahul");
school1.addStudent("Amit");
school1.addStudent("Priya");

school1.displayStudents();