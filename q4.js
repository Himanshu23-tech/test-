"use strict";
class Person {
}
class Student1 extends Person {
    name;
    studentId;
    constructor(name, studentId) {
        super();
        this.name = name;
        this.studentId = studentId;
    }
    getDetails() {
        return "Name: " + this.name + ", ID: " + this.studentId;
    }
    getRole() {
        return "Student1";
    }
}
class Teacher extends Person {
    name;
    subject;
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
    }
    getDetails() {
        return "Name: " + this.name + ", Subject: " + this.subject;
    }
    getRole() {
        return "Teacher";
    }
}
const s2 = new Student1("Rahul", 101);
const t1 = new Teacher("Priya", "JavaScript");
console.log(s2.getDetails());
console.log(s2.getRole());
console.log(t1.getDetails());
console.log(t1.getRole());
