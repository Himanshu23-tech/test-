"use strict";
class School {
    static totalStudents = 0;
    studentList;
    constructor() {
        this.studentList = [];
    }
    addStudent(name) {
        this.studentList.push(name);
        School.totalStudents++;
    }
    displayStudents() {
        console.log("Student List:", this.studentList);
        console.log("Total Students:", School.totalStudents);
    }
}
const school1 = new School();
school1.addStudent("Rahul");
school1.addStudent("Amit");
school1.addStudent("Priya");
school1.displayStudents();
