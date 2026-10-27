abstract class Person {
    abstract getDetails(): string;
    abstract getRole(): string;
}

class Student1 extends Person {
    name: string;
    studentId: number;

    constructor(name: string, studentId: number) {
        super();
        this.name = name;
        this.studentId = studentId;
    }

    getDetails(): string {
        return "Name: " + this.name + ", ID: " + this.studentId;
    }

    getRole(): string {
        return "Student1";
    }
}

class Teacher extends Person {
    name: string;
    subject: string;

    constructor(name: string, subject: string) {
        super();
        this.name = name;
        this.subject = subject;
    }

    getDetails(): string {
        return "Name: " + this.name + ", Subject: " + this.subject;
    }

    getRole(): string {
        return "Teacher";
    }
}

const s2 = new Student1("Rahul", 101);
const t1 = new Teacher("Priya", "JavaScript");

console.log(s2.getDetails());
console.log(s2.getRole());

console.log(t1.getDetails());
console.log(t1.getRole());
